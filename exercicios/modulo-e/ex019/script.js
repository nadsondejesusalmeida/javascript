function generateMultiplicationTable() {
	let inputMultiplicationTableNumber = document.getElementById('multiplication-table-number');
	let multiplicationTableList = document.getElementById('multiplication-table-list');
	
	if (inputMultiplicationTableNumber.value.length == 0) {
		window.alert('Digite um número, por favor!');
	} else {
		multiplicationTableList.innerHTML = '';
		let multiplicationTableNumber = inputMultiplicationTableNumber.value;
		
		for (let c = 1; c <= 10; c++) {
			let optionElement = document.createElement('option');
			optionElement.text = `${multiplicationTableNumber} x ${c} = ${multiplicationTableNumber * c}`;
			optionElement.value = `multiplication-table${c}`;
			multiplicationTableList.appendChild(optionElement);
		}
		
		multiplicationTableList.size = 10;
	}
}