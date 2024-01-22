import { useState } from "react";
import "./app.scss";
import TaskInput from "./components/taskInput/TaskInput";
import TaskItem from "./components/taskItem/TaskItem";
import Stats from "./components/stats/Stats";
import { v4 as uuidv4 } from "uuid";
uuidv4();

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (userInput) => {
    const newTask = { id: uuidv4(), taskName: userInput, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  const deleteTask = (deleteTaskName) => {
    setToDoList(toDoList.filter((task) => task.id !== deleteTaskName));
  };

  const toggleCheck = (id) => {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <div>
      <div className="container">
        <h1>
          Now or Later: Spoiler <br />
          It's probably later.
        </h1>
        <TaskInput addTask={addTask} />
        <div className="toDoList">
          <ul className="list-items">
            {toDoList.map((task, index) => {
              return (
                <TaskItem
                  task={task}
                  key={index}
                  deleteTask={deleteTask}
                  toggleCheck={toggleCheck}
                />
              );
            })}
          </ul>
          {toDoList.length === 0 ? (
            <p className="notify">You are Done!</p>
          ) : null}
        </div>
      </div>
      <Stats toDoList={toDoList} />
    </div>
  );
}

export default App;
