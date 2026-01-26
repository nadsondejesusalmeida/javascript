// Os métodos de elite do Array

const students = [
	{name: 'Ana', grade: 8},
	{name: 'Beto', grade: 5},
	{name: 'Carlos', grade: 9},
	{name: 'Duda', grade: 4}
];

const namesOfApprovedStudents = students.filter(({ grade }) => grade > 7).map(({ name }) => name.toUpperCase());
const studentReport = students.reduce((accumulator, { grade }) => {
	if (grade > 7) {
		accumulator.approved++;
	} else {
		accumulator.failed++;
	}
	
	return accumulator;
}, {approved: 0, failed: 0});

console.log(namesOfApprovedStudents);
console.log(studentReport);