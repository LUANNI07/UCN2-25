const display = document.getElementById("display")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")
const btn8 = document.getElementById("btn8")
const btn9 = document.getElementById("btn9")
const btn10 = document.getElementById("btn10")
const btn11 = document.getElementById("btn11")
const btn12 = document.getElementById("btn12")
const btn13 = document.getElementById("btn13")
const btn14 = document.getElementById("btn14")
const btn15 = document.getElementById("btn15")
const btn16 = document.getElementById("btn16")


btn1.addEventListener("click", function () {
   display.value = display.value + btn1.innerHTML
})
btn2.addEventListener("click", function () {
   display.value = display.value + btn2.innerHTML
})
btn3.addEventListener("click", function () {
   display.value = display.value + btn3.innerHTML
})
btn4.addEventListener("click", function () {
   display.value = display.value + btn4.innerHTML
})
btn5.addEventListener("click", function () {
   display.value = display.value + btn5.innerHTML
})
btn6.addEventListener("click", function () {
   display.value = display.value + btn6.innerHTML
})
btn7.addEventListener("click", function () {
   display.value = display.value + btn7.innerHTML
})
btn8.addEventListener("click", function () {
   display.value = display.value + btn8.innerHTML
})
btn9.addEventListener("click", function () {
   display.value = display.value + btn9.innerHTML
})
btn10.addEventListener("click", function () {
   display.value = display.value + btn10.innerHTML
})
btn11.addEventListener("click", function () {
   display.value = display.value + btn11.innerHTML
})

btn12.addEventListener("click", function () {
   display.value = display.value + btn12.innerHTML
})
btn13.addEventListener("click", function () {
   display.value = display.value + btn13.innerHTML
})
btn14.addEventListener("click", function () {
   display.value = display.value + btn14.innerHTML
})

btn15.addEventListener("click", function () {
   display.value = display.value + btn15.innerHTML
})

btn16.addEventListener("click", function () {
   display.value = display.value + btn16.innerHTML
})

const digitar = (tecla) => {
    display.value = display.value + tecla;
}

const limpar = () => {
    display.value = ""
}
const apagar = () => {
    let number = display.value
    display.value = number.substring(0, (number.length - 1))
}

let operacao = ""
let valor1 = ""

const definirOperacao = (operador) => {
    operacao = operador
    valor1 = display.value
    display.value = ""
}
const calcular = () => {
    switch (operacao) {
      case "+":
        display.value = Number(valor1) + Number(display.value);
        break;
      case "-":
        display.value = Number(valor1) - Number(display.value);
        break;
      case "/":
        display.value = Number(valor1) / Number(display.value);
        break;
      case "*":
        display.value = Number(valor1) * Number(display.value);
        break;
      case "%":
        display.value = Number(valor1) % Number(display.value);
        break;
      default:
        display.volue = display.value;
    }
    operaçao = "";
  };
 /*document.querySelectorAll('button').forEach(button => {
   button.addEventListener('click', function() {
       const value = this.textContent; // Pega o texto do botão (ex: '7', '+', '=')
       
       if (value === 'C') {
           clearDisplay();
       } else if (value === '⌫') {
           deleteLast();
       } else if (value === '=') {
           calculate();
       } else {
           appendToDisplay(value);
       }
   });
}); */
