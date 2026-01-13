let num = [5, 8, 3, 2];
num.push(1);
num.sort();

console.log(num);
console.log(`O vetor tem ${num.length} elementos`);
console.log(`O primeiro elemento é ${num[0]}`);

/*
console.log(`A posição 0 tem o valor ${num[0]}`);
console.log(`A posição 1 tem o valor ${num[1]`);
console.log(`A posição 2 tem o valor ${num[2]}`);
console.log(`A posição 3 tem o valor ${num[3]}`);
console.log(`A posição 4 tem o valor ${num[4]}`);

for (let i = 0; i < num.length; i++) {
	console.log(`A posição ${i} tem o valor ${num[i]}`);
}
*/

for (let i in num) {
	console.log(`A posição ${i} tem o valor ${num[i]}`);
}

let pos = num.indexOf(8);
if (pos == -1) {
	console.log('O valor não foi encontrado');
} else {
	console.log(`O valor 8 foi encontrado na posição ${pos}`);
}