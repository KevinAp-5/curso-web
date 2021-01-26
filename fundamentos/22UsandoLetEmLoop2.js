const funcoes = []

for (let x = 0; x < 10; x++) { // ao usar let não vai acontecer o famoso bug
    funcoes.push(function () {
        console.log(x)
    })
}

funcoes[2]() /* isso tem haver com o conceito de closure*/
funcoes[8]()