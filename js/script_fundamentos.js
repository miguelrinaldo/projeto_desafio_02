//Comentário de uma linha 

/*
Comentário de múltiplas linhas 
É possível ter várias 
linhas
*/

//COMANDO DE SAÍDA
console.log("Olá mundo!!")

//DECLARAÇÃO DE VARIÁVEL
let num = 10 
var num2 = 50
const num3 = 100

console.log(num)
console.log(num2)
console.log(num3)

if (true){
    let num4 = 250
console.log(num4)

var num5 = 140
}

console.log(num5)

num=1882

console.log(num)

num2 = 58

console.log(num2)

//num3 = 77

console.log(num3)

//CONCATENÇÃO

console.log('Valor da variável num3 é '+ num3)
console.log("Valor da variável num3 é" + num3)
console.log('Valor da variável num3 ${num3}')


//OPERADORES MATEMÁTICOS 
/*
+ soma
- subtração
* mutiplicação
/ divisão
*/

console.log('A subtração entre as variáveis:')
console.log('A soma dos números é:' , 12 + 8)
console.log('A subtração entre as variáveis: ' , num2 - num3)
console.log('A multiplicação dos números: ' , num2 * 5)
console.log('A divisão entre os valores:' , num3 / num2)
console.log('O resto da divisão entre 10 e 2 é: ${10 % 2}' )
//OPERADORES RELACIONAIS
/*
   > MAIOR
   < MENOR
   >= MAIOR IGUAL
   <= MENOR IGUAL 
   != DIFERENTE
   */

   //OPERADORES LÓGICO
   /*
        && E    
        || OU   
   */

//TESTE LÓGICO (SELEÇÃO)
let idade = 50

if(idade){
    console.log("Maior de idade")
    console.log("Menor de idade")
}


idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade")
/**
      Renovação de CNH
      18 até 49 -> 10 anos
      50 até 69 -> 5 anos 
      70 acima -> 3 anos
 */

//ALINAMENTO DE IF
if (idade < 18){
    console.log('COM $ {idade}, NÃO É PERMITIDO POSSUIR CNH')
}  else if(idade < 50){
        console.log('COM ${idade}, O TEMPO PARA RENOVAÇÃO É DE 10 ANOS ')
}else if (idade < 70){
    console.log('COM ${idade}, O TEMPO PARA RENOVAÇÃO É DE 5 ANOS ') 
}else{
    console.log('COM ${idade}, O TEMPO PARA RENOVAÇÃO É DE 3 ANOS ')      
}
