const a = true
const b = false
const c = true

console.log( a && b)

console.log( b && c)
console.log(a && c)
console.log(a && b && c)

console.log( a || b)

console.log( b || c)
console.log(a || c)
console.log(a || b || c)

console.log( ! a  ,!b)

console.log( !b ,! c)
console.log(!a ,! c)
console.log(!a ,! b ,!c)


nome =prompt("qual seu nome")
anoDeNacimento =prompt("qual foi o ano q vc nasceu")
anoAtual = prompt("em que ano estamos")
idade =   anoAtual - anoDeNacimento 
idadeEmDoisMilECinquenta = 2050 - anoDeNacimento
maiorDeIdade = idade >= 18

console.log("seu nome é",nome ," voce  tem " ,idade," anos",
" voce é  maior de idade", maiorDeIdade," em 2050 voce vai  ter",idadeEmDoisMilECinquenta)


 const bool1 = true
 const bool2 =  false
 const boll3 = !bool2 // aqui vai ficar true

 let resultado = bool1 && bool2
 console.log("a",resultado)
  resultado = bool1 && bool2 && boll3
  console.log("b", resultado)
  resultado = !resultado && (bool1 || bool2)
  console.log("c",resultado)
  console.log("d",typeof resultado)
  
/* o console.log("a") vai imprimir  a,  false console.log("b") vai imprimir  b ,false 
console.log("c") vai imprimir c, true console.log("d") vai imprimir d, boolean */  


  
let primeiroNumero =prompt(" digite um numero !")
let segundoNumero =prompt(" digite outro numero !")
primeiroNumero = Number(primeiroNumero)
segundoNumero = Number(segundoNumero)

 const soma= primeiroNumero+segundoNumero
 console.log(soma)



  /*o  prompt let primeiroNumero  vai perguntar um numero e o outro 
 prompt do segundoNumero vai perguntar outro numero
   o const soma vai  somar o primeiro numero e o segundo 
    o console.log(soma) vai imprimir a soma do  primeiro numero 
    + o segundo numero  */ 



     idade = Number(prompt(" qual sua idade"))
     idadeDoAmigo = Number(prompt)("qual a idade d seu amigo(a)")
  maiorOuMenor= idade > idadeDoAmigo
  console.log("sua idade é maior do que a do seu melhor amigo", maiorOuMenor)
 console.log("a diferencia de idade é de",idade  - idadeDoAmigo)

 numeroPar=prompt(" me de um numero par")
 console.log(numeroPar % 2)
  // Quando colocamos um numero par sempre da 0
  //Quando colocamos impar  da  sempre 1


  idadeEmAnos= prompt("qual sua idade em anos")

  idadeEmMeses= idadeEmAnos * 12
  idadeEmDias = idadeEmAnos * 365
  idadeEmHoras = idadeEmAnos * 24
   idadeEmdias1 = idadeEmMeses *idadeEmDias
   idadeEmHoras1 = idadeEmdias1* idadeEmHoras
 
  console.log("A idade do usuário em meses;", idadeEmMeses  )
  console.log("A idade do usuário em dias;",idadeEmdias1)
  console.log("A idade do usuário em horas;",idadeEmHoras1 ) 
 

