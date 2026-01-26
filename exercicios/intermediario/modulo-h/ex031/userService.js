export async function fetchUserById(id) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	
	if (!response.ok) {
		const error = new Error('Usuário não encontrado no banco de dados.');
		error.code = 'NOT_FOUND';
		throw error;
	}
	
	return await response.json();
}

export async function fetchUserList() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	
	if (!response.ok) {
		const error = new Error('Lista de usuários não encontrado no banco de dados.');
		error.code = 'NOT_FOUND';
		throw error;
	}
	
	
	return response.json();
}