import "../sass/main.scss";
import { showMenu } from "../src/utils/nav";

//ELEMENTOS DEL DOM.
let btn = document.getElementById("clave");
let badgeClave = document.createElement("p");
let div = document.querySelector("div.calculadora");

function getPassword() {
  let lower = "abcdefghijklmnñopqrsxyz";
  let uppercase = "ABCDEFGHIJLMNÑOPQRSXYZ";
  let numchars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";
  let chars = "";

  chars += lower;
  chars += uppercase;
  chars += numchars;
  chars += specialChars;

  return chars;
}

function obtainPassword(chars) {
  let longitud = document.getElementById("len").value;
  let letNewPassword = "";
  if (longitud && longitud > 4) {
    longitud = Number(longitud);

    for (let i = 0; i < longitud; i++) {
      const caracter = Math.floor(Math.random() * chars.length);
      letNewPassword += chars[caracter];
    }

    badgeClave.textContent = "Contraseña: " + letNewPassword;

    div.append(badgeClave);
  } else {
    badgeClave.textContent = "La contraseña debe ser mayor a cuatro caracteres";
    div.append(badgeClave);
  }
}

let chars = getPassword();
//Llamar al evento.
btn.addEventListener("click", () => {
  obtainPassword(chars);
});

//Menú en móvil.
showMenu("nav-toggle", "nav-menu");
