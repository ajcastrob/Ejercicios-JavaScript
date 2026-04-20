import "../sass/main.scss";
import { showMenu } from "../src/utils/nav";

let content = document.getElementById("content");
let char = document.getElementById("char");
let word = document.getElementById("word");

content.addEventListener("input", (event) => {
  let content = event.target.value;
  //Contar los caracteres
  char.textContent = content.length;

  //Aplicar trim para quitar los carecteres adicionales.
  content.trim();

  //convertir en lista. Aplicara para dejar sin espacios.
  let listWord = content.split(/\s+/);

  //Para asegurarse de no contar los espacios, aplicar filter.
  let listWordFinal = listWord.filter((word) => {
    return word !== "";
  });

  word.textContent = listWordFinal.length;
});

showMenu("nav-toggle", "nav-menu");
