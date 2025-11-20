let link = {
    nome : "link",
    hp :  100,
    rupees : 300 , 
    armaEquipada : "Master Sword ", 
    inventario : ["Bumerangue","Bomba"," Escudo Hylian","Arco"],
    historicoDeAcoes : []
}

let danoMasterSword = 70
let  danoBomba = 50
let danoBumerangue = 30

function atacar (inimigoNome, multiplicandorDano) {
    let danoCausado = danoMasterSword *multiplicandorDano
    let mensagem =  ` atacou ${inimigoNome} causando ${danoCausado} de dano .`
    link.historicoDeAcoes.push(mensagem)
    console.log(mensagem)
}


atacar("Octorok",1)
atacar("Bokoblin", 1.5)

function comprar(custo) {
    if(link.rupees >= custo){
        link.rupees-= custo
        link.inventario.push("Poção de Vida ")
        let mensagem = ` Comprou Poção de Vida por ${custo} rupees.`
        console.log(mensagem)
    } else{
        console.log("Link nao tem ruppes suficientes !")
    }   
}
 comprar(120)

 function curar() {
    if (link.inventario.includes("Poção de vida")&& link.hp < 100){
        link.hp += 50
        let remover = link.inventario.indexOf("Poção de vida ")
        if(remover !== - 1){
            link.inventario.splice(remover , 1 )
        }
        let  mensagem = "Curou 50 de HP usando  a Poção de vida "
        link.historicoDeAcoes.push(mensagem)
        console.log(mensagem)
    }else{
        console.log(`Não tem poção  ou HP ja está cheio  !`)
    }
 }
   curar()
 function verificarInventario() {
    for(let i = 0 ; i < link.inventario.length ; i++){
        let item = link.inventario[i]
        console.log(`Item encontrado no inventário : ${item}`)
        if (item === "Bomba"){
            console.log("Cuidado ! Bomba encontrada!")
        }
    }
 }
 verificarInventario()

  function verificarStatus() {
    console.log(`Nome : ${link.nome}`)
    console.log(` HP:${link.hp}`)
    console.log(`rupees : ${link.rupees}`)
    console.log(`Armas equipadas :${link.armaEquipada} `)
    console.log(` Inventário : ${link.inventario.join(",")}`)
    console.log(`Histórico de ações : ${link.historicoDeAcoes.join(",")}`)
  }
  verificarStatus()

  function entrarNaCaverna(nivel)  {
    if(link.armaEquipada === "Master Sword" || nivel >= 5 ){
        console.log(`Acesso liberado á caverna de nível ${nivel}!`)
    } else{
        console.log(`Acesso negado á caverna de nível ${nivel}.`)
    }
  }
   entrarNaCaverna(4)
   entrarNaCaverna(8)