function factorial(number) {
	let result = 1;
	
	for (let c = number; c > 1; c--) {
		result *= c;
	}
	
	return result;
}

console.log(factorial(5));

// 5! = 5 × 4 × 3 × 2 × 1 = 120