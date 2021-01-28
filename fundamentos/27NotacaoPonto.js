console.log(); /* aqui você já pode perceber a notação ponto
entre 'console' e 'log'. Para acessar a função log de console.*/

console.log(Math.ceil(6.1)); /* Para arredondar para cima... Vimos que
Math é um objeto no js. Usamos a notação ponto para acessar uma função
definida dentro desse objeto*/

const objeto1 = {};
objeto1.nome = "Garfo"; /* Notamos também a notação ponto ao criar uma
chave/valor dentro de um objeto */

/* objeto1['nome'] = 'Garfo'; as duas linhas são equivalentes e você
obtem o mesmo resultado */

console.log(objeto1.nome)

function Objeto (name) {
    this.name = name; /* ao fazer isso, você está fazendo 'name' ficar vísivel
    para quem instanciar esse objeto, assim tendo a this.name a seu dispor.
    Equivalente de self do Python. Construtores*/
    this.exec = function () {
        console.log('Exec...')
    }
}

const objeto2 = new Objeto('Edinaldo Pereira'); // instanciando
console.log(objeto2.name)

const objeto3 = new Objeto('Cleiton'); // outras instancia
console.log(objeto3.name)
objeto3.exec()

/* Assim você pode ver o uso da notação ponto na sua jornada como dev */