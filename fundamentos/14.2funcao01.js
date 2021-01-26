// Funcao sem retorno

/*
 * A função executa um processo baseado nas sentenãs de código
 * ela define bloco, que é delimitado por chaves
 * ex: {
   ...
   } // isso é um bloco

 * Uma função é um trecho de código que possui um nome(fora funções anônimas)
 * e você pode reutilizar esse trecho de código diversas vezes apenas
 * invocando a funcão com o seu nome.
 
 * Função como uma receita de bolo:
 * os parametros são os ingredientes, e dentro da função vai ter o trecho que
 * vai fazer o bolo
 
 * Uma função pode não receber nenhum parametro, pode não retornar dado,
 * pode receber, pode não retornar dados e pode retornar dados.
*/

function mostraSoma(a, b) {
    console.log(a + b)
}

mostraSoma(2, 10)
mostraSoma(1) /* é possível passar apenas um valor, o segundo valor(b) é
definido como undefined. number + undefine >>> NaN */

mostraSoma(1, 2, 3, 4, 5, 6, 7) /* vai somar apenas os 2 parâmetros e o resto
será ignorado */

mostraSoma() // >>> NaN. undefined + undefined == NaN

// Funcao com retorno

function soma(a, b=0) { // b está com um número por padrão: 0
    return a + b
}

console.log(soma(20, 40)) // console.log necessário porque a função retorna