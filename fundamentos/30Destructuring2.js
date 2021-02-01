const [a] = [10] // criou a variavel 'a' que recebeu o number 10 do array
// usamos colchetes porquê queremos pegar os elementos de um array
console.log(typeof a)

// podemos pular os valores, representando os ' ' entre as virgulas
const [a1, , a3, , a5, a6 = 0] = [2, 10, 3, 20]
console.log(a1, a3, a5, a6)
/* os items em branco pegaram os elementos do array, a partir do a5 ja saiu
do array. a6 não é undefined porquê tem valor padrão */

// arrays podem ter outros elementos do tipo array
/* ignorando o primeiro elemento, dentro do array, ignorando o primeiro
elemento e pegando o segundo elemento do array no indice 1 */
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
/* o que está esta sintaxe está dizendo, ignore o primeiro elemento, vá para
o segundo elemento(um array), ignore o primeiro elemento desse array, e pegue
o segundo elemento*/

// Você não usaria esse código na pratica, porque é um código de difícil leitura
console.log(nota)

// tem uma leitura mais fácil se aplicar isso a objetos, mas em arrays não

// Esses exemplos foram apenas para aula

// esse tipo de operação é mais rapido acessar pelo indice e fica menos confuso