import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(["Eat", "Study", "Sleep"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
      setTasks([...tasks, newTask]);
      setNewTask('')  //Clear input field after adding item

  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((task, indexOfCurrTask) => indexOfCurrTask !== index);
    setTasks(newTasks)
  };

  return (
    <>
      <div className="to-do-list">
        <h1>To-Do List</h1>
        <input
          type="text"
          placeholder="Enter task ...."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
