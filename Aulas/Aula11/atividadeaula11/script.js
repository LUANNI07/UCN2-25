 /*const numeros = [1,2,3,4,5,6]
 console.log(numeros.length)
 numeros.push(7)
 console.log(numeros)
 numeros.splice(3,1,4,1)*/

 let  array
 console.log('a.',array)
 array = null
 console.log('b.',array)
  array = [3,4,5,6,7,8,9,10,11,12,13]
  console.log('c',array.length)
  let i = 0 
  console.log('d.',array[i])
  array[i+1]= 19
console.log('e.',array)
const valor = array[i+6]
console.log('f',valor)

/* o console.log('a.',array) vai dar indefinida ,  console.log('b.',array) vai dar null ,
 console.log('c',array.length) vai imprimir 11 , console.log('d.',array[i])   vai imprimir 3 ,
 console.log('e.',array) vai imprimir 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13 ,
  console.log('f',valor) vai imprimir 9 */ 
 
  const frase = prompt("digite uma frase")
   console.log(frase.toUpperCase().replaceAll("a","i"),frase.length)
   /* "Subi num ônibus em Marrocos"? */
        /*  o const frase  vai perguntar pra vc digitar uma frase 
        ja o  console.log(frase.toUpperCase().replaceAll("a","i"),frase.length) vai imprimir  SUBI NUM ÔNIBUS EM MARROCOS ?  29  */

        emailDoUsuario = prompt("escreva seu  e-mail") 
        nomeDoUsuario = prompt("qual seu nome")
 console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o),
 ${nomeDoUsuario}`)

  const minhasComidas = [ "Estrogonofe","pizza","acai","xis","melancia"]
  console.log(minhasComidas)
  console.log("Essas são as minhas comidas preferidas")
   console.log(minhasComidas[0])
  console.log(minhasComidas[1])
  console.log(minhasComidas[2])
  console.log(minhasComidas[3])
  console.log(minhasComidas[4])
  comidaDoUsuario = prompt("escreva sua comida favorita") 
  console.log(minhasComidas[3]=comidaDoUsuario)
  console.log(minhasComidas)

let listaDeTarefas = []
const tarefaUsuario1  = prompt("qual sua 1 atividade do seu dia")
novaTarefa1 = tarefaUsuario1
const tarefaUsuario2  = prompt("qual sua 2 atividade do seu dia")
novaTarefa2 = tarefaUsuario2
const tarefaUsuario3  = prompt("qual sua 1 atividade do seu dia")
novaTarefa3 = tarefaUsuario3
console.log(listaDeTarefas[0]= novaTarefa1,listaDeTarefas[1],novaTarefa2,listaDeTarefas[2]=novaTarefa3)
console.log(listaDeTarefas)
const indice = prompt("qual indice da tarefa realizada")
console.log(listaDeTarefas.splice(indice,1))
console.log(listaDeTarefas)