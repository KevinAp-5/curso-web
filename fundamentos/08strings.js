const escola = 'cod3r'

console.log(escola.charAt(4)) // retorna o caracter no indice 4 da string
console.log(escola.charAt(5)) /* não vai gerar erro mas vai retornar um valor
vazio */

console.log(escola.charCodeAt(3)) // tabela unicode

console.log(escola.indexOf('c'))

console.log(escola.substring(1)) // foi do 1 até o final
console.log(escola.substring(0, 3)) //  incluindo o indice 0 mas foi até o 3

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')

console.log(escola.replace(3, 'e')) // primeiro param: index or regex
console.log(escola.replace(/\d/, 'e')) // com regex

console.log('kevin, aparecido, moraes, santos'.split(', ')) /* converte para
array. Aceita uso de regex também */

console.log('kevin, aparecido, moraes, santos'.split(/./)) // regex