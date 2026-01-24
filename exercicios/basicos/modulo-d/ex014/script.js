function load() {
	var body = window.document.body;
	var message = window.document.getElementById('message');
	var image = window.document.getElementById('image');
	var date = new Date();
	var hour = date.getHours();
	
	message.innerText = `Agora são ${hour} horas`;
	
	if (hour >= 5 && hour < 12) {
		image.src = 'images/morning.png';
		body.style.backgroundColor = '#D3C7A6';
	} else if (hour >= 12 && hour <= 18) {
		image.src = 'images/afternoon.png';
		body.style.backgroundColor = '#F68E3F';
	} else if (hour > 18 && hour < 24) {
		image.src = 'images/night.png';
		body.style.backgroundColor = '#3F86BC';
	} else {
		image.src = 'images/daybreak.png';
		body.style.backgroundColor = '#031C3A';
	}
}