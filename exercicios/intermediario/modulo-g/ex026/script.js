// IIFE Avançada

const myApp = {};

const reader = (function(targetObject, undefined) {
	const key = Symbol('secret');
	targetObject[key] = 'Dados confidenciais';
	
	return function() {
		console.log(targetObject[key]); // Closure
	}
})(myApp);

reader();