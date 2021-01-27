// Armazenando uma função em uma variavel
const mostraSoma = function (a, b) {
    console.log(a + b)
}

mostraSoma(10, 20)

/* Uns dos benefícios de ter uma arrow function é ter uma forma reduzida
de uma função */

// Armazenando uma função arrow em uma variavel
const x = (a, b) => {
    return a + b
}

console.log(x(17, 59))

// função arrow com retorno implícito
const subtra = (a, b) => a - b

/* Quando a função arrow tiver um retorno implícito, significa que a função
vai ter apenas um linha */

console.log(subtra(10, 2))

/* se a função recebe apenas um parametro, pode reduzir mais ainda a função
tirando o parenteses. Ex: */

const saudacao = a => `Olá, ${a}.`
console.log(saudacao("Kevin"))

