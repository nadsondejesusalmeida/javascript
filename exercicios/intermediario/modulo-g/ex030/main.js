// Módulos

import { processPayment } from './payment.js';

try {
	const resultado = processPayment(-50);
	console.log(resultado);
} catch (error) {
	console.error(`[${error.code}] ${error.message}`);
}