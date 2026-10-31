import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState } from 'react'

const STORAGE_KEY = 'aso-thread-bag-v1'
const BagContext = createContext(null)

function readStored() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const keyOf = (item) => `${item.slug}|${item.colour}|${item.size}`

function reducer(items, action) {
  switch (action.type) {
    case 'add': {
      const key = keyOf(action.item)
      const existing = items.find((i) => i.key === key)
      if (existing) {
        return items.map((i) => (i.key === key ? { ...i, quantity: Math.min(10, i.quantity + action.item.quantity) } : i))
      }
      return [...items, { ...action.item, key }]
    }
    case 'quantity':
      return items.map((i) => (i.key === action.key ? { ...i, quantity: Math.max(1, Math.min(10, action.quantity)) } : i))
    case 'remove':
      return items.filter((i) => i.key !== action.key)
    case 'clear':
      return []
    default:
      return items
  }
}

export function BagProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, undefined, readStored)
  const [open, setOpen] = useState(false)
  const [notice, setNotice] = useState(null)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* storage blocked: the bag still works for this visit */
    }
  }, [items])

  const add = useCallback((item) => {
    dispatch({ type: 'add', item })
    setNotice({ id: Date.now(), text: `${item.name} added to your bag` })
  }, [])

  const value = useMemo(() => {
    const count = items.reduce((n, i) => n + i.quantity, 0)
    const total = items.reduce((n, i) => n + i.quantity * i.price, 0)
    return {
      items,
      count,
      total,
      open,
      notice,
      add,
      setQuantity: (key, quantity) => dispatch({ type: 'quantity', key, quantity }),
      remove: (key) => dispatch({ type: 'remove', key }),
      clear: () => dispatch({ type: 'clear' }),
      openBag: () => setOpen(true),
      closeBag: () => setOpen(false),
      dismissNotice: () => setNotice(null),
    }
  }, [items, open, notice, add])

  return <BagContext.Provider value={value}>{children}</BagContext.Provider>
}

export function useBag() {
  const ctx = useContext(BagContext)
  if (!ctx) throw new Error('useBag must be used inside BagProvider')
  return ctx
}
