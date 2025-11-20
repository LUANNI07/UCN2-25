ouroTotal = 7500
menbrosTripulacao = 9 
recompensaBaseluffy = 3000000000
aumentoRecompensa = 150000000
bonusExperecia = 500
forcaTripulacao = 95

 ouroPorMembro = ouroTotal / menbrosTripulacao
 console.log(" O valor total dividido para cada membro é de ",ouroPorMembro)
 restoOuro =  ouroTotal%menbrosTripulacao
 console.log("Apos a divisao sobrou ",restoOuro,"de  ouro para cada menro")
 novaRecompensaLuffy = recompensaBaseluffy + 150000000
 console.log("A soma  da recompensa apos  o aumento foi de ",novaRecompensaLuffy)
 poderLuffy = novaRecompensaLuffy*bonusExperecia
 console.log(" o poder temporario do luffy foi ",poderLuffy)
 aumentoRecompensa -= 50000000
 console.log("A reducao foi de ",aumentoRecompensa)



 forcaInimigo = 120
  chnacheVioria = 0.7
  limiteSeguranca = 0.8
  temAkumaNomi = true
  inimigoTemHaki = true
  combateJusto = "sim"
  combateRapido = "sim"
  console.log(" a forca da tripulacao é maior ou igual", forcaTripulacao>= forcaInimigo, "á forcaInimigo")
  console.log(" a chance vitoria e menor ",chnacheVioria< limiteSeguranca)
  console.log(" O combate justo é igual ao combateRapido",combateJusto === combateRapido)

 
