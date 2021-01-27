const valores = [7.1, 1.2, 9.0, 10.1] // é um nome genérico, eu sei...
console.log(valores[0], valores[3])
console.log(valores[4]) // retorna undefined porque esse index não existe

valores[4] = 20.3 // não causa erro e insere o valor ao indice
console.log(valores[4])

/* o array vai ficar com items vazios se não adicionar um valor ao proximo
index */
// valores[10] = 11.10

console.log(valores)
console.log(valores.length)

valores.push({id: 2}, true, null, Infinity, 'kevinn') /* adicionar items ao
array. Equivalente ao append do python */

console.log(valores)

/*
 * não é uma boa pratica ter um array héterogeneo(diferentes tipos dentro)
 * o certo é fazer um array com apenas um tipo de valores
 * ex: ['kevin', 'aparecido', 'moraes', santos]
 * [1, 2, 3, 4, 5, 6]
 * [false, false, true, false, true]
 * criar um array so com produtos, um array só com clientes, etc...
*/

console.log(valores.pop()) // retira o ultimo valor do array e o retorna
delete valores[0] // outra maneira de remover um item do array
console.log(valores)

console.log(typeof valores) // um array é do tipo object
