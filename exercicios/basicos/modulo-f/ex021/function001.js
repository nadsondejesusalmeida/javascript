function evenOrOdd(number) {
	if (number % 2 == 0) {
		return 'Par';
	} else {
		return 'Ímpar';
	}
}

let result = evenOrOdd(3);
console.log(result);