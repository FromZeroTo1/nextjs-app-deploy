export function formatCardNumber(cardNumber: string) {
	const cleanCardNumber = cardNumber.replace(/\D/g, '')

	const formattedCardNumber = `${cleanCardNumber.slice(
		0,
		4
	)} ${cleanCardNumber.slice(4, 6)}** **** **${cleanCardNumber.slice(-2)}`

	return formattedCardNumber
}
