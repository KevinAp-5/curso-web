// novo recurso do ES2015

const humano = { // suponhamos que queremos extrair o nome e idade do obj
    nome: 'larissa',
    idade: 17,
    endereco: {
        logradouro: 'Rua edinaldo pereira',
        numero: 21
    }
}

/* Você pode resolver esse problema usando uma váriavel, let nome = humano.nome
Mas usaremos o operador destructoring que é uma forma simplificada de tirar de
uma estrutura elementos*/

const {nome, idade} = humano /*essas chaves não é para criar um objeto, essas
chaves representa o operador destructuring */

/* Essa sintaxe está dizendo, tire de dentro do objeto os atributos nome, idade
objeto humano, no caso*/
console.log(nome, idade) // assim temos acesso as variáveis que queríamos

/* caso você não quer que a váriavel tenha o nome que ela possuí dentro
do objeto, podemos usar a seguinte sintaxe para termos um nome diferente */

const {nome: nome_diferente, idade: idade_aaa} = humano // sintaxe mencionada
console.log(nome_diferente, idade_aaa) /* eu usei péssimos nomes, mas é apenas
um exemplo de que você também pode fazer um nome/valor nesse caso*/

// Mas e se eu tirar um atributo que não existe de um objeto??

// const {sobrenome, humor_atual} = humano // comentado para exemplo abaixo
/* console.log(sobrenome, humor_atual) /* Como já vimos anteriormente exmeplos
semelhantes de atributos que não existem, não é uma surpresa ele retornar
undefined */

/* Mas e se você não quer correr o risco de uma das variáveis retornar esse
valor, Você pode atribuir um valor padrão*/

const {sobrenome = true, humor_atual = true} = humano /* Se não vier
nada(undefined) retorne true. Cada variavel tem que ter o seu próprio sinal*/
console.log(sobrenome, humor_atual)

const { endereco: {logradouro, numero, referencia=null}} = humano
/* não vai criar um objeto endereco com seus atributos requeridos. Não vai
extrair logradouro, numero e referencia de humano, e sim olhando de endereço
que está dentro de humano */

console.log(logradouro, numero, referencia) /* as variaveis de endereco, não
endereco sem sí */
// console.log(endereco) // not defined

// caso você queria o objeto endereco, é so requisita-lô na sintaxe abaixo
const {endereco} = humano
console.log(endereco)

/* Tome cuidado ao tentar acessar objetos aninhados. Exemplo:*/
/* const {conta: {agencia, numero} } = humano // Na propria linha vai dar
erro*/
// console.log(conta)