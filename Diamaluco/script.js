 acessorios = prompt(" uma nota de 0 a 10   para acessórios ")
 cores = prompt(" uma nota de 0 a 10   para cores")
 fatorBrilho = prompt(" uma nota de 0 a 10   para fator brilho")

  pontuacao = (acessorios*5)+(cores*3)+(fatorBrilho*10) 
   metaPontuacao = 80
    pontuacaoTotal =   metaPontuacao <= pontuacao
     if (pontuacaoTotal === true) {
         console.log("sucesso")
     } else {
        console.log( metaPontuacao- pontuacaoTotal)
     }

     look= prompt(" descreva seu look")
     corPincipal= prompt(" qual a cor do seu look")
     console.log(look.length)
     var  temTamnhoAduequado = 20 >= look
      console.log( look.toLowerCase())
      console.log(look.indexOf("brilho","listras") !== -1)
      aprovacao = temTamnhoAduequado &&(temBrilho || temlistras)
      console.log(" sua aprovação deu",aprovacao)
  
  
  