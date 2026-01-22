// Recursividade
function factorial(number) {
	if (number == 1) {
		return 1;
	} else {
		return number * factorial(number - 1);
	}
}

console.log(factorial(5));

/*
5! = 5 × 4 × 3 × 2 × 1 = 120
5! = 5 × 4! = 120

n! = n × (n-1)!
1! = 1
*/