const naira = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
  maximumFractionDigits: 0,
})

/** 385000 -> "₦385,000" */
export function formatNaira(amount) {
  return naira.format(amount).replace('NGN', '₦').replace(/\s/g, '')
}
