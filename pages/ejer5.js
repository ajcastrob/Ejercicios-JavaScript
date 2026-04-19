import "../sass/main.scss";
import { showMenu } from "../src/utils/nav";

const num1 = document.getElementById("number-1");
const num2 = document.getElementById("number-2");
const badgeResulado = document.getElementById("resul");
const btns = document.querySelector("h2");
const newP = document.createElement("p");

const buttons = document.querySelectorAll("button");

let number1 = "";
let number2 = "";

num1.addEventListener("input", (event) => {
  number1 = event.target.value;
});

num2.addEventListener("input", (event) => {
  number2 = event.target.value;
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!number1 || !number2) {
      newP.textContent = "Opción inválida";
      btns.append(newP);
    } else {
      newP.textContent = "";

      if (btn.classList.contains("sumar")) {
        const resultado = parseFloat(number1) + parseFloat(number2);
        badgeResulado.textContent = resultado;
      }

      if (btn.classList.contains("restar")) {
        const resultado = parseFloat(number1) - parseFloat(number2);
        badgeResulado.textContent = resultado;
      }

      if (btn.classList.contains("multiplicar")) {
        const resultado = parseFloat(number1) * parseFloat(number2);
        badgeResulado.textContent = resultado;
      }

      if (btn.classList.contains("dividir")) {
        if (number2 == 0) {
          badgeResulado.textContent = "Error";
        } else {
          const resultado = parseFloat(number1) / parseFloat(number2);
          badgeResulado.textContent = resultado.toFixed(2);
        }
      }
    }
  });
});

showMenu("nav-toggle", "nav-menu");

class Calculadora {
  constructor(number1, number2) {
    this.number1 = parseFloat(number1);
    this.number2 = parseFloat(number2);
  }

  sumar() {
    console.log(this.number1 + this.number2);
  }
}
