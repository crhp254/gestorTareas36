// Lista de tareas
let task = JSON.parse(localStorage.getItem("tasks")) || [];

// Funcion para llevar las tareas
export const getTasks = () => getTasks;

// Funcion para agregar una tarea
export const addTask = (task) => {
   const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
   };
   getTasks.push(newTask);
   localStorage.setItem("tasks", JSON.stringify(tasks)); 
};