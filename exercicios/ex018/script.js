function count() {
	let inputInitialNumber = document.getElementById('initial-number');
	let inputFinalNumber = document.getElementById('final-number');
	let inputStepNumber = document.getElementById('step-number');
	let result = document.getElementById('result');
	
	if (inputInitialNumber.value.length == 0 || inputFinalNumber.value.length == 0 || inputStepNumber.value.length == 0) {
		window.alert('Faltam dados!');
	} else {
		result.innerHTML = 'Contando: <br />';
		
		let initialNumber = Number(inputInitialNumber.value);
		let finalNumber = Number(inputFinalNumber.value);
		let stepNumber = Number(inputStepNumber.value);
		
		if (stepNumber <= 0) {
			window.alert('Impossível contar! Considerando passo 1');
			stepNumber = 1;
		}
		
		if (initialNumber < finalNumber) {
			// Contagem crescente
			for (let c = initialNumber; c <= finalNumber; c += stepNumber) {
				result.innerHTML += ` ${c} \u{1F449}`;
			}
		} else {
			// Contagem regressiva
			for (let c = initialNumber; c >= finalNumber; c -= stepNumber) {
				result.innerHTML += ` ${c} \u{1F449}`;
			}
		}
		
		result.innerHTML += `\u{1F3C1}`;
	}
}