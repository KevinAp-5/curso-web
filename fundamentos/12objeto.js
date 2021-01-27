const produto1 = {};

produto1.nome = 'Tv super!';
produto1.preco = 1200.99;
produto1['desconto massa'] = 0.40 // evitar atributos com espaço

console.log(produto1);

const produto2 = { // não é a mesma coisa que um json
    nome: 'celular top',
    preco: 990.90,
    a: {
        x: false,
        b: {
            y: false
        }
    },
}

"{ 'nome': 'foda', 'preco': 20.2} " // isso é um json
console.log(produto2)