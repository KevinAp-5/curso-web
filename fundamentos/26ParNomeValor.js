// nome/valor
const saudacao = 'Eae!' // contexto léxico 1

/*
 * É o local no qual a sua váriavel foi definida fisicamente no código.
 * léxico tem haver com palavra, então em que local físico ela(chave/valor)
 * foi definida. Nesse exemplo ela foi definida no arquivo que estamos
 * trabalhando(ParNomeValor.js); poderia ter sido definida no browser
 * no contexto global, window
*/

function exec() {
    const saudacao = "falaaa" // contexto léxico 2
    return saudacao
}

const saudacao = "De boa?" /* se termarmos rodar isso, vai dar error porque
já declaramos nesse contexto lexo a constante saudacao.
Se fosse var, funcionaria, mas o valor seria sobrescrito */

// Objetos são grupos aninhados de pares nome/valor
const cliente1 = {
    nome: 'João',
    idade: 20,
    peso: 90,
    endereço: {
        logradouro: "Rua incrível",
        numero: 321
    }
}

console.log(saudacao)
console.log(exec()) /* como são contextos lexico diferentes, vai mostrar
outro valor */
console.log(cliente1)


/*
 * chave/valor é algo muito recorrente nas linguagens de programação.
 * entender escopo, o local em que a variavel foi definida tem um escopo
 * que ela está visivel.
 * Você pode ter uma chave e o valor ser uma chave com valores...
 * ex: {pessoa: {nome: 'joao', idade: 20}}
*/