const peso1 = 2.1  // inteiros e números reais são todos number
const peso2 = Number('3.0')  // outra maneira de criar um número

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // >> true

const avaliacao1 = 9.997
const avaliacao2 = 7.819

const valor_total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = valor_total / (peso1 + peso2)

console.log(media.toFixed(3))  // >> 8.716
console.log(media.toString(2)) /* se tiver 2 como atributo vai converter para
binário */

console.log(typeof media)
console.log(typeof Number)