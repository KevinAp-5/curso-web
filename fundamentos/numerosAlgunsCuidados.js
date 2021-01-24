console.log(7 / 0) // retorna o tipo Infinity

console.log("10" / 2) // ocorre por conta de javascript ter tipagem fraca

console.log("10,3" / 2) // retorna NaN por conta da virgula

console.log("Massa!" * 2) /* em outras linguagens essa operação pode funcionar
mas em js esse não é o caso. retorna NaN(not a number) */

console.log(0.1 + 0.7) /* retorna 0.799999999. Essa expecificação é muito
utilizada por outras linguagens, se fosse 100% preciso, o tempo de execução
seria maior */

// console.log(10.toString()) // Invalid or unexpected token
console.log((10.245).toString())
console.log((10.245).toFixed(1))