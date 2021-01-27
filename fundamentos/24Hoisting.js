var a /* jogou a variavel para cima, por isso tem valor
undefined. Em outras linguagens isso daria erro por conta de não ter
essa funcionalidade */
console.log('a =', a) // undefined, mas isso mostra que a variavel existe
// var a = 10 /* oque aconteceu foi o hoisting(jogar pra cima, içar) */
a = 10 // é isso que a funcionalidade hoisting faz
console.log('a =', a)

function testando (a) {
    console.log('a =', a)
    var a = 10 // dentro função acontece o mesmo efeito
    console.log('a =', a)
}
// testando()
/*
não tem motivos para usar isso. Declare suas variaveis antes de usar.
è apenas uma curiosidade da linguagem, e ter conhecimento disso para você ter
ciencia do que está acontecendo com seu código caso você não obtenha
o resultado esperado no seu código e a causa disso é o hoisting
*/

// tentando a mesma coisa mas com let
console.log('b =', b) // com o let o efeito de içamento(hoisting) não ocorre
let b = 10
console.log('b =', b)
/* Hoisting é um comportamento padrão do javascript de mover a declaração
para o topo */