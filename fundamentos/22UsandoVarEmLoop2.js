const funcoes = []

for (var x = 0; x < 10; x++) {
    funcoes.push(function () {
        console.log(x)
    })
}
funcoes[2]() /* Vai acontecer um bug muito conhecido do javascript por conta
da variavel ter sido declarada com var. Ao invés de mostrar o número que foi
adicionado ao array, ela está mostrando o valor 10 */
funcoes[8]()
