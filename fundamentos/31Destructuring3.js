function random_number({min = 0, max = 1000}) { /* Essa operação já vai
    receber um objeto e ja faremos a destructuring nele, assim não precisaremos
    usar a notação ponto, atribuir o valor a uma variavel, etc...*/
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// mas podemos declaras um objeto e passa-lô como parametro também
const min_max = {
    min: 40,
    max: 600
}
console.log(random_number(min_max)) // passando um objeto já definido
console.log(random_number({min:40, max:600})) // passamos objeto como parametro
console.log(random_number({min:400})) // já temos valor padrão, não vai dar erro
console.log(random_number({})) // passamos um objeto vazio
console.log(random_number()) // teremos um erro pois o objeto é undefined
// para esse erro podemos colocar um objeto como padrão na função

function random_number({min = 0, max = 1000} = {}) { /* Essa operação já vai
    receber um objeto e ja faremos a destructuring nele, assim não precisaremos
    usar a notação ponto, atribuir o valor a uma variavel, etc...*/
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
