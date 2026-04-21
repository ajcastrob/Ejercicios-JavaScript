import "../sass/main.scss";
import { showMenu } from "../src/utils/nav";

let btn = document.getElementById("agregar-tarea");
let ulList = document.getElementById("tareas");
let limpiarList = document.getElementById("btn-limpiar");

//Crear un array vacío para almacenar las tareas.
let allTasks = [];

function createElementsDom() {
  let newLi = document.createElement("li");
  let checkboxTask = document.createElement("input");
  checkboxTask.type = "checkbox";

  return [newLi, checkboxTask];
}

function checkTask(checkboxTask, tarea) {
  checkboxTask.addEventListener("change", () => {
    tarea.state = checkboxTask.checked;
    saveData(allTasks);
  });
}

function addTask() {
  let inputUser = document.getElementById("user-input");

  //Si el input está vacío regresar.
  if (!inputUser.value) return;

  let task = inputUser.value;
  inputUser.value = "";

  let [newLi, checkboxTask] = createElementsDom();

  let tarea = {
    id: Date.now(),
    description: task,
    state: false,
  };

  newLi.textContent = task;
  newLi.append(checkboxTask);
  ulList.append(newLi);

  //Llamar a la fucnión que chekea el botón y cambia el estado de marcado.
  checkTask(checkboxTask, tarea);

  allTasks.push(tarea);
  saveData(allTasks);
}

function saveData(tarea) {
  localStorage.setItem("data", JSON.stringify(tarea));
}

function getData() {
  const tareas = localStorage.getItem("data");
  return tareas ? JSON.parse(tareas) : []; //Devolver la lista de tareas o null si no hay tareas.
}

function restoreData(listTareas) {
  listTareas.forEach((tarea) => {
    let [newLi, checkboxTask] = createElementsDom();
    newLi.textContent = tarea.description;
    checkboxTask.checked = tarea.state;
    newLi.append(checkboxTask);

    ulList.append(newLi);

    //Llamar a la fucnión que chekea el botón y mara el estado de chekeo.
    checkTask(checkboxTask, tarea);
  });
}

function cleanList() {
  allTasks = [];

  saveData(allTasks);
  //Limipiar el DOM.
  ulList.replaceChildren();
}

btn.addEventListener("click", addTask);
limpiarList.addEventListener("click", cleanList);

allTasks = getData();
restoreData(allTasks);

showMenu("nav-toggle", "nav-menu");
