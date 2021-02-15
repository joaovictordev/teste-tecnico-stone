const items = [
  { name: 'Maçã', unitPrice: 50, quantity: 1 },
  { name: 'Pão', unitPrice: 200, quantity: 1 },
  { name: 'Maçã', unitPrice: 300, quantity: 1 },
]

const emails = [
  'jajakaj@mail.com',
  'sjshak@mail.com', 
  'afrstaha@mail.com'
]

function calculatePayment(items, emails) {
  const values = items.map(item => item.unitPrice * item.quantity)
  const amount = values.reduce((accumulated, current) => accumulated + current, 0)

  const quotient = Math.trunc(amount / emails.length)
  const remainder = amount % emails.length

  const paymentMap = {}

  emails.forEach((email, index) => {
    index === 0
      ? paymentMap[email] = quotient + remainder
      : paymentMap[email] = quotient
  })

  return paymentMap
}
