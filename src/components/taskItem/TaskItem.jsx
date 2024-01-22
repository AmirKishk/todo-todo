import { MdDeleteSweep } from "react-icons/md";
import "./taskItem.scss";

const TaskItem = ({ task, deleteTask, toggleCheck }) => {
  return (
    <li className="items">
      <div className="items-text">
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => toggleCheck(task.id)}
        />
        <p className={task.checked ? "isChecked" : ""}>{task.taskName}</p>
      </div>
      <MdDeleteSweep
        className="delete-icon"
        onClick={() => deleteTask(task.id)}
      />
    </li>
  );
};

export default TaskItem;
