import { fetchUserById, fetchUserList } from './userService.js';

const loadUserButton = document.querySelector('#load-user-button');
const listContainer = document.querySelector('#user-list');

async function displayUserProfile(userId) {
	try {
		const user = await fetchUserById(userId);
		const { name, email, company: { name: companyName } } = user;
		
		console.log(`Usuário: ${name} (${email}} trabalha na ${companyName}.`);
		
	} catch (error) {
		if (error.code === 'NOT_FOUND') {
			console.error('Verifique o ID e tente novamete.');
		} else {
			console.error('Ocorreu um erro de conexão.')
		}
	} finally {
		console.log('Tentativa de busca pelo ID do usuário concluída.');
	}
}

async function getActiveUserEmails() {
	try {
		const userList = await fetchUserList();
		const activeEmails = userList.filter(({ website }) => website.endsWith('.org') || website.endsWith('.net')).map(({ email }) => email.toLowerCase());
		
		console.log(activeEmails);
		return activeEmails;
	} catch (error) {
		console.error(error.message);
	} finally {
		console.log('Finalizado a busca de e-mails ativos.');
	}
}

function createUserCard(user) {
	const { name, email } = user;
	const div = document.createElement('div');
	div.classList.add('user-card');
	
	const h3 = document.createElement('h3');
	h3.textContent = name;
	const p = document.createElement('p');
	p.textContent = email;
	
	div.appendChild(h3);
	div.appendChild(p);
	
	return div;
}

function saveUsers(users) {
	localStorage.setItem('userList', JSON.stringify(users));
}

function loadStoredUsers() {
	const rawData = localStorage.getItem('userList');
	if (rawData) {
		const users = JSON.parse(rawData);
		 users.forEach(user => {
			const card = createUserCard(user);
			listContainer.appendChild(card);
		 });
	}
}

loadUserButton.addEventListener('click', async () => {
	loadUserButton.disabled = true;
	loadUserButton.textContent = 'Carregando...';
	
	try {
		const userList = await fetchUserList();
		
		userList.forEach(user => {
			const card = createUserCard(user);
			listContainer.appendChild(card);
		});
		
		saveUsers(userList);
	} catch (error) {
		alert('Não foi possível carregar os usuários no momento.');
		console.error(error);
	} finally {
		loadUserButton.disabled = false;
		loadUserButton.textContent = 'Carregar Usuários';
	}
});

loadStoredUsers();