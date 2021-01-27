let number = 1 // var ou let, o resultado vai ser o mesmo por conta do escopo
{
    let number = 2 /* mesmo tendo o mesmo nome, as variaveis estão
    em escopos diferentes, assim  */
    console.log('dentro = ', number) /* A função que está em escopo local
    vai primeiro procurar a variavel no escopo presente, que é local. Se
    não achar, vai procurar no escopo global*/
}
console.log('fora = ', number)
/*
váriaveis declaradas com var tem o escopo global e o escopo de função
variaveis declaradas com let tem o escopo global, de função e de bloco
*/