var age = 70;

console.log(`Você tem ${age} anos.`);

if (age < 16) {
	console.log('Não vota');
} else if (age < 18 || age > 69) { // Condição aninhada
	console.log('Voto opcional');
} else {
	console.log('Voto obrigatório');
}