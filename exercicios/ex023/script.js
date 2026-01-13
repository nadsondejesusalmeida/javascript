let friend = {
	name: 'José',
	gender: 'M',
	mass: 84.2,
	gainWeight(g = 0) {
		console.log('Engordou!');
		this.mass += g;
	}
}

console.log(`O nome do meu amigo é ${friend.name}! A massa corporal dele é ${friend.mass}Kg.`);