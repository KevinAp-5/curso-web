for (let x = 0; x < 10; x++) { /* x não estará mais disponível no escopo
    global, e sim no escopo de bloco que é o do nosso laço for */
    console.log(x)
}

console.log('x =', x)