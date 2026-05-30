import "../sass/main.scss";
import { showMenu } from "../src/utils/nav";

class EventControl {
  constructor(btnId) {
    this.btn = document.getElementById(btnId);
    this.body = document.querySelector("body");

    this.btn.addEventListener("click", this);
  }

  handleEvent(event) {
    if (event.type === "click") {
      //Evitar la propagación hacia el div padre.
      event.stopPropagation();
      let color = createRandomColor();
      this.body.setAttribute("style", `background-color: ${color}`);
      changeTagColor(color);
    }
  }
}

//Generar un color random.
const createRandomColor = () => {
  //Escoger el color aleatorio.
  let rojo = Math.floor(Math.random() * 255);
  let verde = Math.floor(Math.random() * 255);
  let azul = Math.floor(Math.random() * 255);
  let alphaChannel = Math.random();

  return `rgb(${rojo} ${verde} ${azul} / ${alphaChannel.toFixed(1)})`;
};

//Actalizar etiqueta de color.
function changeTagColor(color) {
  let badge = document.querySelector(".color");

  badge.textContent = color;
}

showMenu("nav-toggle", "nav-menu");
const changeColorBackground = new EventControl("btn-color");
