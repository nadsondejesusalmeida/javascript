const inputChosenNumber = document.getElementById('chosen-number');
const addNumberButton = document.getElementById('add-number-button');
const listOfNumbers = document.getElementById('list-of-numbers');
const result = document.getElementById('result');

let addedNumbers = [];

function addNumber() {
	let chosenNumber = Number(inputChosenNumber.value);
	
	if (chosenNumber >= 1 && chosenNumber <= 100 && addedNumbers.indexOf(chosenNumber) == -1) {
		const optionElement = document.createElement('option');
		optionElement.text = `Valor ${chosenNumber} adicionado`;
		listOfNumbers.appendChild(optionElement);
		
		addedNumbers.push(chosenNumber);
		result.innerHTML = '';
	} else {
		window.alert('Valor inválido ou já adicionado a lista.')
	}
	
	inputChosenNumber.value = '';
	inputChosenNumber.focus();
}

function finish() {
	if (addedNumbers.length == 0) {
		window.alert('Adicione algum número primeiro!');
	} else {
		let largestNumber = addedNumbers[0];
		let smallestNumber = addedNumbers[0];
		let sum = 0;
		let arithmeticMean = 0;
		
		for (let index in addedNumbers) {
			sum += addedNumbers[index];
			arithmeticMean += addedNumbers[index];
			
			if (addedNumbers[index] > largestNumber) {
				largestNumber = addedNumbers[index];
			}
			
			if (addedNumbers[index] < smallestNumber) {
				smallestNumber = addedNumbers[index];
			}
		}
		
		arithmeticMean /= addedNumbers.length;
		
		result.innerHTML = `<p>Ao todo, temos ${addedNumbers.length} números cadastrados.</p>`;
		result.innerHTML += `<p>O maior valor informado foi ${largestNumber}.</p>`;
		result.innerHTML += `<p>O menor valor informado foi ${smallestNumber}.</p>`;
		result.innerHTML += `<p>Somando todos os valores, temos ${sum}.</p>`
		result.innerHTML += `<p>A média dos valores digitados é ${arithmeticMean}</p>`
	}
}