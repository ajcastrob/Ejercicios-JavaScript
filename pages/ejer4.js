import "../sass/main.scss";
import { showMenu } from "../src/utils/nav";

//Función para generar una lista dinámica.
function getEventInput() {
  let listItems = document.querySelectorAll("#element-ul li");
  let inputUser = document.getElementById("input-user");

  inputUser.addEventListener("input", (event) => {
    const texto = event.target.value.toLowerCase();

    listItems.forEach((item) => {
      const visible = item.textContent.toLowerCase().includes(texto);
      //Usar el operador ternario para devolver si se encuentra el elemento en la lista.
      item.style.display = visible ? "" : "none";
    });
  });
}

getEventInput();

showMenu("nav-toggle", "nav-menu");
