import "../sass/main.scss";
import { showMenu } from "../src/utils/nav";

let tiemporRef = Date.now();
let cronometrar = false;
let acumulado = 0;
let btnIniciar = document.getElementById("start");
let btnPausar = document.getElementById("pause");
let btnReiniciear = document.getElementById("reboot");

btnIniciar.addEventListener("click", () => {
  cronometrar = true;
});

btnPausar.addEventListener("click", () => {
  cronometrar = false;
});

btnReiniciear.addEventListener("click", () => {
  acumulado = 0;
});

setInterval(() => {
  if (cronometrar) {
    let tiempo = document.getElementById("tiempo");
    acumulado += Date.now() - tiemporRef;
    tiempo.innerHTML = formatearMS(acumulado);
  }
  tiemporRef = Date.now();
}, 1000 / 60);

//Función para formatear los milisegundos.
function formatearMS(ms) {
  let MS = ms % 1000;
  let S_total = Math.floor((ms - MS) / 1000);
  let S = S_total % 60;
  let M = Math.floor((S_total / 60) % 60);
  let H = Math.floor(S_total / 3600);
  Number.prototype.ceros = function (n) {
    return (this + "").padStart(n, 0);
  };
  return H.ceros(2) + ":" + M.ceros(2) + ":" + S.ceros(2);
}

showMenu("nav-toggle", "nav-menu");
