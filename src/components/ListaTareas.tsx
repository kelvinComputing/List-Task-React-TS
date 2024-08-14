import { Tarea } from "./Tarea";

type ListTask = {
  listTask: string[];
  deleteTask: (index: number) => void;
};

export const ListaTareas = ({ listTask, deleteTask }: ListTask) => {
  return (
    <div className="taskList">
      {listTask.map((task, index) => (
        <Tarea
          key={index}
          task={task}
          deleteTask={() => deleteTask(index)}
        ></Tarea>
      ))}
    </div>
  );
};
