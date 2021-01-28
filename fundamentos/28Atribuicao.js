const a = 2; /* já começamos com um sinal de atribuição.
Atribuindo o valor 7 a variavel 'a' */

let b = 3;

b += a; /* isso significa que você está fazendo uma atribuição aditiva.
é a mesma coisa que fazer b = b + a. Você está acescentendo o valor de 'a' á
váriavel 'b'*/
console.log(b)

b -= 3; /* Estamos fazendo a mesma coisa mas com subtração. b = b - 3. Estamos
tirando 3 do valor de b. Atribuição subtrativa */
console.log(b)

b *= 7; /* atribuição multiplicativa, vou multiplicar o valor de b pelo valor
ao lado no sinal. b = b * 7*/
console.log(b)

b /= 2; /* Atribuição divisíva. b = b / 2*/
console.log(b)

b %= 2; /* Atribuição modular. b = b % 2. Resto da divisão entre b/2 */
console.log(b)

/* Sempre o simbolo da operação arítimética vem antes e o sinal
de atribuição vem depois +=, -=, *=, /=, %= */