import { IFaq } from '../interface/faq.interface'

export const delivery: IFaq = {
	title: 'Доставка',
	items: [
		{
			name: 'Сколько стоит доставка?',
			description: 'Текст ответа на вопрос.'
		},
		{
			name: 'Куда вы доставляете?',
			description: 'Текст ответа на вопрос.'
		},
		{
			name: 'Какими сервисами вы доставляете? Возможна доставка курьером?',
			description: 'Текст ответа на вопрос.'
		},
		{
			name: 'В каких случаях возможен возврат товара?',
			description: 'Текст ответа на вопрос.'
		}
	]
}

export const refund: IFaq = {
	title: 'Возврат',
	items: [
		{
			name: 'В каких случаях возможен возврат товара?',
			description: 'Текст ответа на вопрос.'
		},
		{
			name: 'Я могу заказать несколько размеров и вернуть неподходящие?',
			description: 'Текст ответа на вопрос.'
		}
	]
}
