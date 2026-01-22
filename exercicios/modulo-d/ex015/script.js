function verify() {
	var date = new Date();
	var currentYear = date.getFullYear();
	var txtYear = window.document.getElementById('txt-year');
	var result = window.document.querySelector('#result');
	
	if (txtYear.value.length == 0 || Number(txtYear.value) > currentYear) {
		window.alert('Verifique as informações e tente novamente!');
	} else {
		var gender = window.document.getElementsByName('gender');
		var age = currentYear - Number(txtYear.value);
		var txtGender = '';
		var img = window.document.createElement('img');
		img.setAttribute('id', 'photo');
		
		if (gender[0].checked) {
			txtGender = 'homem';
			
			if (age >= 0 && age <= 10) {
				// Criança
				img.setAttribute('src', 'images/child-man.png');
			} else if (age < 21) {
				// Jovem
				img.setAttribute('src', 'images/young-man.png');
			} else if (age < 60) {
				// Adulto
				img.setAttribute('src', 'images/adult-man.png');
			} else {
				// Idoso
				img.setAttribute('src', 'images/elderly-man.png');
			}
		} else {
			txtGender = 'mulher';
			
			if (age >= 0 && age <= 10) {
				// Criança
				img.setAttribute('src', 'images/child-woman.png');
			} else if (age < 21) {
				// Jovem
				img.setAttribute('src', 'images/young-woman.png');
			} else if (age < 60) {
				// Adulto
				img.setAttribute('src', 'images/adult-woman.png');
			} else {
				// Idoso
				img.setAttribute('src', 'images/elderly-woman.png');
			}
		}
		result.innerHTML = `<p>Detectamos ${txtGender} com ${age} anos`;
		result.append(img);
	}
}