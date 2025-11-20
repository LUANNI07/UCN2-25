const pokemon = prompt("Qual o pokemon?")
switch(pokemon){
case 'Bulsasaur':
console.log("Bulbasaur(Planta e Veneno)")
break
case 'Charmander':
console.log("Charmander(Fogo)")
break
case 'Squirtle':

console.log("Squirtle(Água)")
break
}


const ensino = prompt("concluiu o ensino médio?").toLowerCase() === 'sim'
const idade = Number(prompt("Digite sua idade")) >= 18
const faculdade = prompt("Você faz faculdade?").toLowerCase() === 'sim'

if(ensino && idade && !faculdade){
    console.log("Você pode estudar nessa faculdade")
    }else{
    console.log("Você não pode estudar nessa faculdade")}

    