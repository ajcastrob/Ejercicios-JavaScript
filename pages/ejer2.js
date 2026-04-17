import "../sass/main.scss";
import { showMenu } from "../src/utils/nav";

function getClicks() {
  let btn = document.getElementById("btn-clics");
  let badgeClics = document.getElementById("numero-clics");
  let counter = 0;

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    badgeClics.textContent = counter++;
  });
}

showMenu("nav-toggle", "nav-menu");
getClicks();
