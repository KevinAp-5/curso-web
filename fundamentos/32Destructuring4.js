function random_number([min = 0, max = 1000]) { // mesma ideia, mas com colchete
    if (min > max) [min, max] = [max, min] /* invertendo valores das vars com
    destructors. Criando um array e pegando seus items mas invertidos, assim,
    invertendo os valores */
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(random_number([10, 20])) /* Como estamos usando arrays, passamos
apenas os items, já no objeto é mais claro a leitura por conta das chaves */

// não vou colocar muitos exemplos pois ja vimos isso no arquivo anterior
console.log(random_number([, 300])) // apenas passando o max
console.log(random_number([200, ])) // apenas passando o min
console.log(random_number([])) // passando um array vazio
console.log(random_number()) // erro porque não tem array por padrão na func