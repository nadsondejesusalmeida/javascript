import { PaymentError, PAYMENT_ERRORS } from './errors.js';

export function processPayment(value) {
	if (value < 0) {
		throw new PaymentError('O valor deve ser maior do que zero.', PAYMENT_ERRORS.NEGATIVE_VALUE);
	}
	
	return `R$ ${value} pago!`;
}