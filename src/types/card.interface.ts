export interface ICard {
	id: number
  bankName?: string
	cardNumber: string,
  expirationDate: string,
  holderName: string,
  cvv: string,
  isDefault: boolean
}