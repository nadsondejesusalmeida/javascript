const rawContacts = [
	{ id: 10, name: 'diego silva', email: 'DIEGO@mail.com', category: 'work' },
	{ id: 25, name: 'ana costa', email: 'ana@outlook.com', category: 'family' },
	{ id: 32, name: 'beto oliveira', email: 'beto@mail.com', category: 'work' },
	{ id: 45, name: 'carla souza', email: 'carla@gmail.com', category: 'friends' }
];

const cleanedContacts = rawContacts.map(contact => ({
	...contact,
	name: contact.name[0].toUpperCase() + contact.name.slice(1),
	email: contact.email.toLowerCase()
}));

const workerContacts = rawContacts.filter(contact => contact.category === 'work');

const numberOfContactsByCategory = rawContacts.reduce((accumulator, contact) => {
	const { category } = contact;
	
	if (!accumulator[category]) accumulator[category] = 0;
	
	accumulator[category]++;
	return accumulator;
}, {});

console.log(rawContacts);
console.log(rawContacts.find(contact => contact.id === 32));

console.log(cleanedContacts);

console.log(workerContacts);

console.log(numberOfContactsByCategory);