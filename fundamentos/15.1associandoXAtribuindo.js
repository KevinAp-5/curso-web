const user1 = {name:'robert'} // associando o endereço do objeto a user1
const user2 = user1 /* user2 vai pegar o mesmo endereço do objeto associado
ao user1 */

/* user1 e user2 apontam para o mesmo objeto. Se o objeto mudar, user1 e
user2 vão retonar o mesmo objeto modificado */

user2.name = 'cleber' /* quando houver modificações no objeto, as duas
constantes vão retornar o mesmo objeto, ou seja, os 2 vão ser iguais */

let idade = 17 /* quando é um tipo primitivo, a variavel vai receber esse
valor, e não receber o endereço(ou referencia) dele. idade é 17 e não apenas
aponta para o número 17 */

let numero_alunos = idade /* numero_alunos vai receber o valor atribuido
a variavel idade, e não pegando o mesmo endereço do valor */

idade = 20

console.log(idade)
console.log(numero_alunos)

console.log(user1)
console.log(user2)