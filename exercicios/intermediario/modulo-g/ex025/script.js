// Conta Corrente Secreta

function createAccount(correctPassword) {
	let balance = 0;
	
	return {
		deposit: function(value) {
			balance += value;
		},
		checkBalance: function(password) {
			if (password === correctPassword) {
				console.log(balance);
			} else {
				console.error('Senha incorreta para a consulta do dinheiro!');
			}
		},
		withdraw: function(value, password) {
			if (password !== correctPassword) {
				console.error('Senha incorreta para a retirada do dinheiro!');
				return;
			}
			
			if (value > balance) {
				console.error('O valor que deseja retirar é maior do que você possui!');
				return;
			}
			
			balance -= value;
		}
	}
}

const myAccount = createAccount('pudim123');
myAccount.deposit(1000);
console.log(myAccount.checkBalance('errado'));
console.log(myAccount.checkBalance('pudim123'));
console.log(myAccount.balance);