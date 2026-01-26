export class PaymentError extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'PaymentError';
		this.code = code;
	}
}

export const PAYMENT_ERRORS = {
	NEGATIVE_VALUE: 'NEGATIVE_VALUE',
	INSUFFICIENT_FUNDS: 'INSUFFICIENT_FUNDS'
};