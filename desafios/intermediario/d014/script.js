// Desafio: Sistema Bancário Ultra-Seguro

const accountID = Symbol('id');
const bankAccount = {
	holder: 'Nadson de Jesus Almeida',
	[accountID]: '777-999',
	balance: 9000000000000000n
}

function deposit(account, increment) {
	if (typeof account !== 'object' || account === null || Array.isArray(account)) {
		console.error('Nenhuma conta foi detectada!');
		return;
	}
	
	if (typeof increment !== 'bigint') {
		console.error('Nenhum valor numérico do tipo bigint foi detectado!');
		return;
	}
	
	account.balance += increment;
}

deposit(bankAccount, 100n);

const symbols = Object.getOwnPropertySymbols(bankAccount);

console.log(Object.keys(bankAccount));
console.log(bankAccount);
console.log(bankAccount[symbols[0]]);
console.log('Símbolos encontrados:', symbols.map(s => s.toString()));
console.log('Todas as chaves:', Reflect.ownKeys(bankAccount).map(key => key.toString()));