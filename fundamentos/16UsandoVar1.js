{
    {
        {
            {
                var analise = "analise?";
            }
        }
    }
}

console.log(analise)
/* mesmo a variavel analise estando dentro de blocos de código, o escopo
dela continua "visível" fora do bloco. Em outras linguagens isso
não aconteceria*/

function testando() {
    var local_var = 123
    console.log(local_var) // a variavel está vísivel nesse escopo
    /* ela está em um escopo local, ou seja, está com acesso disponível
    apenas nesse bloco */
}

testando()
console.log(local_var) // mas ela não está nesse escopo(escopo global)