 /*let numerosPares = 0
     let numeros = [11,15,18,14,12,13]
     for (let i = 0; i < 6; i++) {
        if (numero[i] > numerosPares) {
             soma = numero[i] % numerosPares
            numerosPares = numeros[i]
        }
    
        console.log("A soma dos numeros pares são  ",numerosPares)
        
     } */


     let maiorNumero = 0
     let numeros = [11,15,18,12,13]
     for (let i = 0; i < 6; i++) {
        if (numeros[i]> maiorNumero) {
            maiorNumero = numeros[i]
        }
    
        console.log("O maior numero é ",maiorNumero)
        
     } 



     // atividades de for of 

      // contador simples 
      for (let i = 1 ; i<= 10 ; i++){
        console.log(i)
      }