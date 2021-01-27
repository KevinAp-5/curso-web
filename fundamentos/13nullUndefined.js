let value // não inicializada
console.log(value) /* >>> undefined. não foi atribuido nenhum valor, ou seja,
um valor INDEFINIDO */

// é diferente de não declarar a várivel, por aí ela não existirá
// console.log(value2)

value = null /* ausência de valor. A variavel foi definida como ela não
para nenhum local da memória */
console.log(value)

/* 
 * Caso você não queria mais atribuir valores a sua variavel, atribua ela
 * como null e NÃO como undefined. deixa o undefined apenas para a linguagem
 * utilizar quando aquele valor não foi inicializado, não definido.
 * ex: nome = 'kevin'
 * 'agora eu quero "zera" essa variavel'
 * nome = null
*/

// tome cuidado para não acessar algo de uma variavel que está nula/undefined
//console.log(value.toString()) >>> TypeError

const prod = {}
console.log(prod.preco) // >>> undefined
/*
 * Ao tentar acessar algo de um "undefined", vai subir um TypeError
 * ex: console.log(prod.preco.a) >>> TypeError: Cannot read property 'a'
 * of undefined.
 * Você tentar acessar um "undefined" se oque vem antes dele é definido
 * ex: console.log(prod.preco)
*/

prod.preco = 10.50
console.log(prod)

prod.preco = undefined /* não é uma boa prática. Deixa para linguem definir
oque é undefined */

console.log('Booleano do produto: ', !!prod.preco)
console.log(prod)

delete prod.preco // assim, você vai ter um objeto de volta vazio.
console.log(prod)

prod.preco = null // produto está sem preço
console.log(!!prod.preco)
console.log(prod)