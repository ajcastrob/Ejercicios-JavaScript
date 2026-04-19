import "../sass/main.scss";
import { showMenu } from "../src/utils/nav";

class Calculadora {
  constructor() {
    //Elemenos del DOM.
    this.num1 = document.getElementById("number-1");
    this.num2 = document.getElementById("number-2");
    this.badgeResulado = document.getElementById("resul");
    this.titles = document.querySelector("h2");
    this.buttons = document.querySelectorAll("button");
    //Estado.
    this.state = {};

    //Elementos reutilizables
    this.message = document.createElement("p");

    //eventos
    this.initEvents();
  }

  //Evento de los botones.
  initEvents() {
    this.num1.addEventListener("input", this.handleInput);
    this.num2.addEventListener("input", this.handleInput);

    this.buttons.forEach((btn) => {
      btn.addEventListener("click", this.handleOperation);
    });
  }

  handleInput = (event) => {
    this.state[event.target.id] = event.target.value;
  };

  handleOperation = (event) => {
    const btn = event.currentTarget;

    const { "number-1": number1, "number-2": number2 } = this.state;

    if (!this.state["number-1"] || !this.state["number-2"]) {
      this.showError("Opción inválida");
      return;
    }

    this.clearError();

    const a = parseFloat(this.state["number-1"]);
    const b = parseFloat(this.state["number-2"]);

    if (btn.classList.contains("sumar")) {
      this.updateResult(a + b);
    }

    if (btn.classList.contains("restar")) {
      this.updateResult(a - b);
    }

    if (btn.classList.contains("multiplicar")) {
      this.updateResult(a * b);
    }

    if (btn.classList.contains("dividir")) {
      if (b === 0) {
        this.updateResult("Error");
      } else {
        this.updateResult((a / b).toFixed(2));
      }
    }
  };

  //Manejar UI.
  updateResult(value) {
    this.badgeResulado.textContent = value;
  }

  showError(text) {
    this.message.textContent = text;
    this.titles.append(this.message);
  }

  clearError() {
    this.message.textContent = "";
  }
}

let calculadora = new Calculadora();
calculadora;
showMenu("nav-toggle", "nav-menu");
