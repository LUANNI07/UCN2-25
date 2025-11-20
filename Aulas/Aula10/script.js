 const nome = "  luanni Gabriely Da Silva Nunes  "
 const idade = 18
 console.log(` me chamo `+nome+` e tho `+idade+` anos`)
 console.log(` me chamo ${nome} e tenho ${idade} anos`)
 console.log(typeof(` me chamo `+nome+` e tenho `+idade+`anos`))
 console.log(typeof(` me chamo ${nome} e tenho ${idade} anos`))

 console.log(nome.length)
 const fraseMaiscula = "oieeeEEeeEE"
   const fraseMinuscula = fraseMaiscula.toLowerCase()
 console.log(fraseMaiscula,fraseMinuscula)
 const fraseMinuscul2 =  fraseMaiscula.toUpperCase()
 console.log(fraseMaiscula,fraseMinuscul2)
 console.log(nome.trim())
  const caracters = " Hoje eu comi cenoura ,adoro cenoura"
  console.log(caracters.includes("cenoura"))
  console.log(caracters.includes("batata"))
    const  novaFrase = caracters.replaceAll("cenoura", " batata")
    console.log(novaFrase)

  
