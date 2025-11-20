 let condicao = true 

 if (condicao) {
    // como o valor da condição é true 
    // o codigo desse bloco  é executado
    console.log(` entrei no f1`)

 }

 let condicao2 = false

 if (condicao2) {
    // como o valor da condição é false 
    // o codigo desse bloco Não é executado
    console;console.log(` entrei no if 2 !`)

    
 }

 const num1 = Number(prompt("digite um numero 1"))
const num2 = Number(prompt("digite um numero 2 "))
num1===num2
if(num1===num2){
    console.log("Sucesso")
}


let condicao3 = false
 if (condicao3) {
    console.log(`entrei no if !`)

    
 } else{
    console.log(` entrei no else!`)

 }

 const num3 = Number(prompt("Digite o número 1"))
const num4 = Number(prompt("Digite o número 2"))
num3===num4
if(num3 === num4){
    console.log("Os números são iguais!")
    }else{
    console.log("Os números são diferentes!")
    }


    let condicao4 = false
    let condicao5 = true
    if (condicao4) {
         console.log("entrei no if 4!")
    } else {
         
    }if (condicao5) {
        console.log("entrei no if 5!")
    }

    if (condicao4) {
        console.log(" entrei no f4 !")
        
    } else if ( condicao5){
        console.log("entrei  no if 5")

        
    }

    if (condicao4) {
        console.log("entrei no if 4 !")
    } else  if (condicao5){
        console.log("entreu no if 5 !")
    } else{
        console.log(" entrei no else")
    }

    if(num1 === num2){ console.log("Os números são iguais")}
else if (num1 >num2){console.log("O num1 é maior que o num")}
else{console.log("O num1 é menor que o num2")}

let paisOrigem
if (paisOrigem === 'brasil') {
    console.log("brasileiro")

    
} else if (paisOrigem=== 'EUA'){
    console.log("norte americano")
}else if (paisOrigem=== ' Inglaterra') {
    console.log(" ingles")
    
}else if (paisOrigem=== 'frança') {
    console.log("fances")
    
} else if (paisOrigem=== 'italia') {
    console.log("italiano")
    
} else if (paisOrigem=== Canada) {
    console.log(" canadense")
    
} else{
    console.log(" nacionalidade não encontrada")
}

switch (paisOrigem) {
    case 'brasil':
        console.log("brasileiro")
        break;
    
        case 'EUA':
            console.log("norte americano")
            break;

            case ' Inglaterra':
                console.log(" ingles")
            break;
    default:
        console.log(" nacionalidade não encontrada")
        break;
}


