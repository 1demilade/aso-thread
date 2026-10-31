import { WHATSAPP_NUMBER } from '../config.js'
import { formatNaira } from './format.js'

function lineFor(item, index) {
  const lines = [
    `${index != null ? `${index + 1}. ` : ''}${item.name}`,
    `   Colour: ${item.colour}`,
    `   Size: ${item.size}`,
    `   Quantity: ${item.quantity}`,
    `   Price: ${formatNaira(item.price)}${item.quantity > 1 ? ` each (${formatNaira(item.price * item.quantity)})` : ''}`,
  ]
  return lines.join('\n')
}

/** The exact text the visitor will send, for one or many items. */
export function buildOrderMessage(items) {
  if (!items.length) return ''
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const single = items.length === 1
  return [
    'Hello Aso & Thread, I would like to order:',
    '',
    single ? lineFor(items[0]) : items.map(lineFor).join('\n\n'),
    '',
    `Total: ${formatNaira(total)} before delivery`,
    '',
    'Please confirm availability and delivery to: ',
  ].join('\n')
}

export function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
