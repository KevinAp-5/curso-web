var number = 1
{
    var number = 2
    console.log('dentro = ', number)
}
console.log('fora = ', number)
/* É possível ter variaveis com o mesmo nome desde que estejam em
escopos diferentes */

/* "FUJA DO ESCOPO GLOBAL" - é muito mais crítico quando você está
trabalhando com javascript no front end do que no backend*/