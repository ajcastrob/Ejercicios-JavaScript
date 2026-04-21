import "../sass/main.scss";
import { showMenu } from "../src/utils/nav";

class TODO {
  constructor() {
    this.btn = document.getElementById("agregar-tarea");
    this.ulList = document.getElementById("tareas");
    this.limpiarList = document.getElementById("btn-limpiar");

    //Definir el array para almacenar las tareas. Restaurar datos si hay.
    this.allTasks = this.getData();

    //eventos.
    this.initEvents();

    //Restaurar sessión si hay datos.
    this.restoreData();
  }

  initEvents() {
    this.btn.addEventListener("click", this.addTask.bind(this));
    this.limpiarList.addEventListener("click", this.cleanList.bind(this));
  }

  addTask() {
    let inputUser = document.getElementById("user-input");
    let valueUser = inputUser.value.trim();

    //SI NO HAY NADA EN EL INPUT REGRESAR.
    if (!valueUser) return;

    let task = valueUser;
    inputUser.value = "";

    //Crear la tarea y agregarla al array.
    let tarea = {
      id: Date.now(),
      description: task,
      state: false,
    };

    //Llamar a la función que comprueba el botón
    this.allTasks.push(tarea);
    //Mostar las tareas en el DOM
    this.renderTask();
    this.saveData();
  }

  renderTask() {
    let newLi = document.createElement("li");
    let checkboxTask = document.createElement("input");

    checkboxTask.type = "checkbox";
    //Guardar el id del checkboxTask
    checkboxTask.dataset.id = this.allTasks[this.allTasks.length - 1].id;

    checkboxTask.addEventListener("change", this.checkedState.bind(this));

    newLi.textContent = this.allTasks[this.allTasks.length - 1].description;
    checkboxTask.checked = this.allTasks[this.allTasks.length - 1].state;
    newLi.append(checkboxTask);

    //Agregar al ul
    this.ulList.append(newLi);
  }

  cleanList() {
    this.allTasks = [];

    this.saveData();
    //Limipiar el DOM.
    this.ulList.replaceChildren();
  }

  saveData() {
    localStorage.setItem("data", JSON.stringify(this.allTasks));
  }

  getData() {
    const tareas = localStorage.getItem("data");
    return tareas ? JSON.parse(tareas) : []; //Devolver la lista de tareas o un array vacío si no hay tareas.
  }

  restoreData() {
    this.allTasks.forEach((tarea) => {
      const newLi = document.createElement("li");
      const checkboxTask = document.createElement("input");
      checkboxTask.type = "checkbox";

      checkboxTask.dataset.id = tarea.id;
      checkboxTask.addEventListener("change", this.checkedState.bind(this));

      newLi.textContent = tarea.description;
      checkboxTask.checked = tarea.state;
      newLi.append(checkboxTask);

      this.ulList.append(newLi);
    });
  }

  checkedState(e) {
    const id = Number(e.target.dataset.id);
    const checked = e.target.checked;

    const tarea = this.allTasks.find((tarea) => tarea.id === id);

    if (tarea) {
      tarea.state = checked;
    }

    this.saveData();
  }
}

new TODO();

showMenu("nav-toggle", "nav-menu");
