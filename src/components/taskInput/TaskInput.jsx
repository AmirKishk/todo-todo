import { useState } from "react";
import "./taskInput.scss";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleChane = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    addTask(task);
    setTask("");
  };

  return (
    <div>
      <form action="" className="inputField" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add New Item..."
          value={task}
          onChange={handleChane}
        />
        <button>+</button>
      </form>
    </div>
  );
};

export default TaskInput;
