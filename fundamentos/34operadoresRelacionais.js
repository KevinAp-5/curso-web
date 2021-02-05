console.log('01)', '1' == 1); // por conta da tipagem fraca, retorna true
console.log('02)', '1' === 1); // Sinal se é estreitamente igual, incluindo o
// tipo

console.log('03)', '3' != 3);
console.log('04)', '3' !== 3); // comparação estreita

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);

const data1 = new Date(0);
const data2 = new Date(0);
console.log('09)', data1 == data2)
console.log('10)', data1 == data2) /* está apenas comparando o endereço de
memoria, não faz diferença */
console.log('11)', data1.getTime() === data2.getTime())
console.log('12)', undefined == null) // true
console.log('13)', undefined === null)
/* é recomendado usar o estreitamente igual por conta da tipagem fraca
da linguagem */
