// Módulos

import { processPayment } from './payment.js';

try {
	const result = processPayment(-50);
	console.log(result);
} catch (error) {
	console.error(`[${error.code}] ${error.message}`);
}