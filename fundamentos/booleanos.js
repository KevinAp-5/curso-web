let isAtivo = false
console.log(isAtivo)

isAtivo = true // como foi declarada como let, podemos mudar seu valor
console.log(isAtivo)

isAtivo = 1 // 0 = false   1 = true
console.log(!!isAtivo) /* invertemos o valor duas vezes, assim, voltando para
o valor original que é true */

console.log(!false) // >>> true
console.log(!true) // >>> false

console.log(!!false) // >>> false
console.log(!!true) // >>> true

console.log("os de verdade eu sei quem são...") // true one
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)

console.log("------------------") // apenas pra separar os prints

console.log(!!(isAtivo = true)) /* não está conferindo se a atribuição deu
certo, mas sim o valor que está sendo atribuido é conferido... */
console.log(!!(isAtivo = 0)) // >>> false
console.log(!!(isAtivo = true)) // >>> true

console.log('aff, quanta falsidade...') // false one
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("para finalizar...")
// || == or
console.log(!!('' || null || 0 || ' ')) // retorna true se um deles for true
console.log(('' || null || 'kevin' || 0 || ' ')) /* returona o primeiro item
verdadeiro, que no caso é 'kevin' */

let nome = 'a'
console.log(nome || 'Desconhecido') /* se 'nome' for falso >>> 'Desconhecido'
se for true vai >>> o *valor da variavel* */