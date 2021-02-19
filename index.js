const items = [
  { name: 'Maçã', unitPrice: 1, quantity: 10 },
  { name: 'Pão', unitPrice: 2, quantity: 3 },
  { name: 'Maçã', unitPrice: 1, quantity: 1 },
]

const emails = [
  'jajakaj@mail.com',
  'sjshak@mail.com', 
  'afrstaha@mail.com',
  'hshdhdhdh@mail.com',
  '7fyf7yyy@mail.com',
  '987hghj@mail.com',
  'jsujakwel@mail.com',
  '23fgrg4@mail.com',
  '47hetay8@mail.com',
  '859jeejb5@mail.com'
]

function calculatePayment(items, emails) {
  const values = items.map(item => item.unitPrice * item.quantity)
  const amount = values.reduce((accumulated, current) => accumulated + current, 0)

  const quotient = Math.trunc(amount / emails.length)
  const remainder = amount % emails.length

  const paymentMap = {}

  emails.forEach((email, index) => {
    index < remainder
      ? paymentMap[email] = quotient + 1
      : paymentMap[email] = quotient
  })

  return paymentMap
}
