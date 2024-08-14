import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [listTask, setListTask] = useState<string[]>([]);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setListTask((taskFormer) => [...taskFormer, newTask]);
    setNewTask("");
  };

  const handleDeleteTask = (index: number) => {
    setListTask((task) => task.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div className="containerB">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva Tarea"
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>
      <ListaTareas
        listTask={listTask}
        deleteTask={handleDeleteTask}
      ></ListaTareas>
    </div>
  );
};
