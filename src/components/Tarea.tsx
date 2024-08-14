type Task = {
  task: string;
  deleteTask: () => void;
};

export const Tarea = ({ task, deleteTask }: Task) => {
  return (
    <div className="task">
      <span>{task}</span>
      <button onClick={deleteTask}>borrar Tarea</button>
    </div>
  );
};
