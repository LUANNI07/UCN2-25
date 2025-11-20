/*let numero 
let soma = 0 
 while (numero!== 0 ) {
    numero = Number (prompt(" digite  um numero"))
    soma+= numero
    
 }
 console.log(`o resultado é : ${soma}`)

 let c = 1 
 do {
    console.log("O valor de C é",c)
    c++
 } while (c <= 6);

 for (let i = 0; i<= 9  ; i++) {
  console.log("o valor de i é ",i)
     }
 let meuArray = [10,4,7,8,200,77]
     for (let i = 0; i <6 ; i++) {
        console.log(meuArray[i])
       // const element = array[i];
        
     }
let maiorNumero = 0
     let numeros = [11,15,18,14,12,13]
     for (let i = 0; i < 6; i++) {
        if (numero[i]> maiorNumero) {
            maiorNumero = numeros[i]
        }
    
        
     }
     console.log("O maior numero é ",maiorNumero)

     let numerosPares = 0
     let numeros1 = [11,15,18,14,12,13]
     for (let i = 0; i <= 5; i++) {
        if (numeros1[i]%2===0) {
            numerosPares += numeros1[i]
        }
    
     } 
     console.log("A soma dos numeros pares é  ",numerosPares)

 const meuArray2 = [100,7,4,8,10,3,20,777,2000,1000]
 for (const numero of meuArray2) {
   console.log("O numero é:",numero)
 } 
 
  const arrayEx = ["oi","sumido","tudo","bem?","saudades"]
  var frase = ""
  for (const string of arrayEx) {
   frase+=arrayEx
   
 }

 console.log(frase) */


 let numerosPares = 0
 let numeros1 = [11,15,18,14,12,13]


for (const numero1 of numeros1) {
   if (numeros1%2===0) {
      numerosPares += numeros1
}}

console.log("A soma dos numeros pares é  ",numeros1)

let palavraMaior = 0 
let frase = ["O sucesso é a soma de pequenos esforços repetidos todos os dias e Ser corajoso não é não ter medo, é avançar apesar dele"]
for (const palavra of frase) {
    if (palavra.length > palavraMaior) {
        palavraMaior = palavra.length;
    }
}
const palavrasMaisLongas = []
for (const palavra of frase) {
    if (palavra.length === palavraMaior) {
        palavrasMaisLongas.push(frase);
    }
}
console.log("Palavras mais longas:", palavrasMaisLongas) 
   
/* let valor = 0 
    for (let i =0 ; i < 5 ; i++){
      valor+=i
    }
    console.log(valor)*/

   /*  esse for esta calculando a soma dos números
    inteiros  do 0 a 4 no  console.log(valor)  vai ser impirmir 10 .*/


     /*const lista = [10,11,12,15,18,19,21,23,25,27,30]
     for (let numero of lista){
      if (numero > 18) {
         console.log(numero)
      }
     }
       o  for esta pedindo  para ele escolher somente
      os numeros maiores que 18 
      a) O que vai ser impresso no console? 
      no console.log(numero) vai imprimir  19, 21, 23, 25, 27, 30  
       b) Se eu quisesse acessar o índice de cada elemento dessa
lista, o for...of... é suficiente? Se sim, o que poderia ser
usado para fazer isso?  não vai precisar do indexOf lista .indexOf (valor(15))*/

 /*const qunatidadeTotal = Number(prompt("digite a quantidade de linhas ?"))
let qunatidadeAtual = 0 
while (qunatidadeAtual < qunatidadeTotal) {
   let = ""
   for (let asteriscos = 0 ; asteriscos < qunatidadeAtual + 1 ; asteriscos++){
   linha +="*"
   }
   console.log(linha)
   qunatidadeAtual++ 
}
3. Qual seria o resultado impresso no console, se o usuário
digitasse o número 4  ? * ** *** **** 
 

const quantidadePets = Number(prompt("Quantos bichinhos de estimação você tem?"));

if (quantidadePets === 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else if (quantidadePets > 0) {
    const nomesPets = [] 
    for (let i = 0; i < quantidadePets; i++) {
        const nome = prompt(`Digite o nome do pet ${i + 1}:`)
        nomesPets.push(nome)  
    }
    console.log("Nomes dos seus bichinhos de estimação são ", nomesPets)
} /*  else {
    console.log("Por favor, digite um número válido (0 ou maior).")
}

const arrayOriginal = [10, 20, 30, 40, 50]
let maior = arrayOriginal[0]
let menor = arrayOriginal[0]
const arrayPares = []
console.log(" Valores do array original")
for (let numero of arrayOriginal) {
    console.log(numero)
}
console.log(" Valores divididos por 10")
for (let numero of arrayOriginal) {
    console.log(numero / 10)
}
for (let numero of arrayOriginal) {
    if (numero % 2 === 0) {
        arrayPares.push(numero)
    }
}
console.log(arrayPares)

console.log(" Novo array com strings")
const arrayStrings = []
for (let i = 0; i < arrayOriginal.length; i++) {
    arrayStrings.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
}
console.log(arrayStrings)


for (let numero of arrayOriginal) {
    if (numero > maior) maior = numero
    if (numero < menor) menor = numero
}
console.log(`Maior: ${maior}, Menor: ${menor}`)

// desafio 1 
let numeroSecreto = Number(prompt("Primeiro jogador, digite o número secreto:"))
console.log("Vamos jogar!")
let tentativas = 0
let chute
do {
    chute = Number(prompt("Segundo jogador, chute um número:"))
    tentativas++
    console.log(`O número chutado foi: ${chute}`)
    if (chute === numeroSecreto) {
        console.log("Acertou!!")
        console.log(`O número de tentativas foi: ${tentativas}`)
    } else if (chute < numeroSecreto) {
        console.log("Errrrrrrrou, é maior!")
    } else {
        console.log("Errrrrrrrou, é menor!")
    }
} while (chute !== numeroSecreto)

// desafio 2 

let numeroSecreto1 = Math.floor(Math.random() * 100) + 1;


console.log("Vamos jogar!");
do {
    
    chute = Number(prompt("Chute um número entre 1 e 100:"))
    tentativas++
    console.log(`O número chutado foi: ${chute}`)
    if (chute === numeroSecreto1) {
        console.log("Acertou!!")
        console.log(`O número de tentativas foi: ${tentativas}`)
    } else if (chute < numeroSecreto1) {
        console.log("Errrrrrrrou, é maior!")
    } else {
        console.log("Errrrrrrrou, é menor!")
    }
} while (chute !== numeroSecreto1) 

/*Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta
alteração?
 sim  O que você poderia ter feito para que fosse mais fácil? nao sei 
  Deixe
comentários no seu código sobre esta reflexão. mas achei bem facil pois era so colocar a dica  q vc deu, e despois tiar o segundo jogador  


let vida = 1
let recursos = 0
let rodadasExploradas = 0

console.log("Jogo iniciado! Vida: 1, Recursos: 0")

while (recursos < 10 && vida > 0) {
   
    rodadasExploradas++
    
    let chance = Math.random() 
    
    if (chance < 0.5) {
        
        recursos++
        console.log(`Rodada ${rodadasExploradas}: Encontrou um recurso! Recursos totais: ${recursos}`)
    } else if (chance < 0.75) {
   
        console.log(`Rodada ${rodadasExploradas}: Encontrou um perigo! Vida permanece: ${vida}`)
    } else {
       
        vida--
        console.log(`Rodada ${rodadasExploradas}: Encontrou  um  Gamemaker ! vida reduzida para ${vida}`)
        if (vida <= 0 ){
         console.log("Os gamemakers acabaram com o jogo !")

        }}}
         console.log("jogo terminado!")
         console.log(`recursos  coletados ${recursos}`)
         console.log(` Rodadas exploradas${rodadasExploradas}`)
         if (vida <= 0 ){
            console.log("voce morreu!")
         } else{
            console.log(" voce sobreviveu !")
        }







    // atividades de for of 

      // contador simples 
      for (let i = 1 ; i<= 10 ; i++){
        console.log(i)
      }
// contador de pares 
 for(let i = 2 ; i <= 20 ;i += 2  ){
    console.log(i)
 }


 // Tabuada 
  let numero 
  Number(prompt(" Digite um numero para aparecer a tabuada "))
  for(let i = 1 ; i <= 10 ; i++){
    console.log(`${numero} X ${i} = ${numero* i}`)
  } 

  // soma de numeros 
  let soma = 0 
  for ( let i = 0 ; i<5 ; i++){
    let numero 
    Number(prompt(`Digite o ${i +1}ºnumero`))
    soma+= numero
  }
  console.log(`A soma  dos  numeros  é ${soma}`)

  // media de notas 
  let somaNotas = 0 
  for (let i= 0 ;  i > 5 ; i++){
    let nota 
    Number(prompt(`Digite a nota do ${i+1}ºaluno`))
  }
  let media = somaNotas / 5 
  console.log(` A media das notas é ${media}`)

  // Jogo da força
const palavras  = [ kawazaki,BMW,DogRam,Koenigsegg,GTR35 ]
let palavra = palavras[Math.random()* palavras.length]
let palavraOculta = "GTR35"
let tentativas = 6 
let letrasTentadas = []

 while(tentativas > 0){
    
    console.log(`Palavra ${palavraOculta}`)
    console.log(`Tentativas restantes ${tentativas}`)
    console.log(` letras tentadas ${letrasTentadas(",")}`)
 }
let letra = prompt("Digite uma letra ").toLowerCase()*/


function nomeDaTurma() {
    console.log("Bem vindos turma UC25-2N")
}
function somar() {
    soma =10+30
    console.log("a soma é ", soma)
}

function dobrarNumeros() {
    dobro = 10*2
    console.log(" o dorbro de 10 é",dobro)
}

nomeDaTurma()
somar()
dobrarNumeros()


nomeDaTurma()
somar()
dobrarNumeros()

function nomes(nome) {
    console.log(`Ola ${nome}`)
}
 function parametros(num1,num2) {
    soma = num1+num2
    console.log(` a soma é ${soma}`)
 }
 nomes("luanni")
 nomes("lucas")
 nomes("leandra")
 parametros(7,3)

 const a  = 1
 function imprimiVriavel() {
    const b = 2 
    
console.log("a variavel a :",a)
console.log(" a varivael b : ", b )    
 } 
 imprimiVriavel()
 console.log("a variavel a :",a)
  
 function calcularArea(altura,largura) {
    let area = altura*largura 
    return area
    
 }

 const somaDaArea= calcularArea(2,3)
 console.log(somaDaArea)
 console.log(calcularArea(2,3))

 function somaDeDoisNumeros() {
    let soma  =10 + 30
    return soma
 }
 const resultado = somaDeDoisNumeros()
 console.log(somaDeDoisNumeros)
 
 const numeros = [10,20,30,40,50]
  function numerosDaArray() {
     return numeros = [60,70]
    
  }
  const final = numerosDaArray()
  console.log([i=0] % [i=6])