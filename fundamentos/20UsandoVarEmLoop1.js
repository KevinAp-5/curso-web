for (var x=0; x < 10; x++) { /* o x só sai do laço quando x < 10 for false
    assim, quando ele sair vai ter o valor de 10 por ter sido aumentada.
    o loop não tem continuidade por conta da condição, mas o valor foi até
    10 */
    console.log(x)
}
// se fosse usado let, ja teria erros por conta do escopo
console.log('x =', x) // var é muito bizarro xD