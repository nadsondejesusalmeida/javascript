// Tratamento de erro profissional

function processPayment(value) {
	try {
		if (value < 0) {
			const error = new Error('O valor deve ser maior do que zero.');
			error.code = 'NEGATIVE_VALUE';
			throw error;
		}
		
		console.log(`Pagamento de R$ ${value} processado com sucesso!`);
	} catch (error) {
		console.error(error.message);
	} finally {
		console.log('Operação finalizada!');
	}
}

processPayment(10);