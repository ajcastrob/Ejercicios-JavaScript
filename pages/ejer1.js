import "../sass/main.scss";
import { showMenu } from "../src/utils/nav";

//Generar un color random.
const createRandomColor = () => {
  //Escoger el color aleatorio.
  let rojo = Math.floor(Math.random() * 255);
  let verde = Math.floor(Math.random() * 255);
  let azul = Math.floor(Math.random() * 255);

  return `rgb(${rojo},${verde},${azul})`;
};

//Actalizar etiqueta de color.
function changeTagColor(color) {
  let badge = document.querySelector(".color");

  badge.textContent = color;
}

//Cambiar el color del body con un color random y actualizar la etiqueta que marca el color.
const createTagColor = (btnId) => {
  //Seleccionar las etiquetas y el botón.
  const btn = document.getElementById(btnId);
  const body = document.querySelector("body");

  btn.addEventListener("click", (e) => {
    //Evitar la propagación hacia el div padre.
    e.stopPropagation();
    let color = createRandomColor();
    body.style.backgroundColor = `${color}`;
    changeTagColor(color);
  });
};

showMenu("nav-toggle", "nav-menu");
createTagColor("btn-color");
