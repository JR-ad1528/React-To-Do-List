import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim() === "") return;

    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h2>This is my To-Do List</h2>

      <input
  type="text"
  placeholder="Enter a task"
  value={taskText}
  onChange={(e) => setTaskText(e.target.value)}
  onKeyPress={(e) => { if (e.key === 'Enter') addTask(); }}
/>

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map(task => (
          <ToDoItem
            key={task.id}
            task={task}
            onToggleComplete={toggleComplete}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
