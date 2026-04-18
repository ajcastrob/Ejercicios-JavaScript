import "../sass/main.scss";
import { showMenu } from "../src/utils/nav";

//Función para añadir elemenos de forma dinámica al DOM.
function addElementList(elementID, btnId, inputId) {
  let ulList = document.getElementById(elementID);
  let btn = document.getElementById(btnId);
  let inputUser = document.getElementById(inputId);

  btn.addEventListener("click", () => {
    let contentInput = inputUser.value;
    //Si está vacío el campo pero el usuario pulsa el botón regresar:
    if (!contentInput) return;

    let newLi = document.createElement("li");
    //Crear el ancla que luego servirá para eleminar el elemento.
    newLi.textContent = contentInput;
    newLi.innerHTML += ` <i class="ri-close-line"></i>`;
    ulList.append(newLi);
    inputUser.value = "";
  });
}

//Borrar elementos de forma dinámica.
function deleteElementList(spanId, listID) {
  let ul = document.getElementById(listID);
  console.log(ul);

  ul.addEventListener("click", (event) => {
    if (event.target.classList.contains(spanId)) {
      event.target.closest("li").remove();
    }
  });
}

showMenu("nav-toggle", "nav-menu");
addElementList("elements-list", "btn-lista", "inputUser");
deleteElementList("ri-close-line", "elements-list");
