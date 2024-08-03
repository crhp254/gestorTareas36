// Importar la funcion para traer las tareas de localStorage
import { getTask } from "./task";

// Funcion para vizualizar las tareas
export const renderTasks = () => {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    const tasks = getTasks();
    tasks.forEach((task) => {
        const Li = document.createElement("li");
        library.setAttribute("data-id", task.id)

        if(task.completed === true) {
            Li.classList.add("completed")
        }

        library.innerHTML = `
            ${task.text}
            <button class="delete"> Borrar </button>
            <button class="toggle"> ${task.completed === true ? "Regresar" : "Completado "} </button>
        `;
        taskList.appendChild(li);
    });
};