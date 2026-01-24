// Promessas em JavaScript

function checkAge(age) {
	return new Promise((resolve, reject) => {
		setTimeout(() => { // Simulando um atraso de rede
			if (age >= 18) {
				resolve('Acesso permitido!');
			} else {
				reject('Acesso negado!');
			}
		}, 2000)
	});
}

async function ageFlow(age) {
	try {
		const permission = await checkAge(age);
		console.log(permission);
	} catch (error) {
		console.error(error);
	}
	
	console.log('Operação finalizada!');
}

ageFlow(16);