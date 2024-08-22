// Lista de tareas
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Función para obtener las tareas
export const getTasks = () => tasks;

// Función para agregar una tarea
export const addTask = (taskText) => {
   const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
   };
   tasks.push(newTask);
   localStorage.setItem("tasks", JSON.stringify(tasks)); 
};

// Función para eliminar una tarea
export const deleteTask = (id) => {
   tasks = tasks.filter((task) => task.id !== parseInt(id));
   localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Función para actualizar una tarea
export const toggleTask = (id) => {
   tasks = tasks.map((task) => {
      if(task.id === parseInt(id)) {
         task.completed = !task.completed;
      }
      return task;
   });
   localStorage.setItem("tasks", JSON.stringify(tasks));
};
