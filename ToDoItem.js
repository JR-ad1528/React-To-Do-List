import React from 'react';

function ToDoItem({ task, onToggleComplete, onDelete }) {
  return (
    <li>
      {/* Only the task text gets the completed class */}
      <span className={task.completed ? "completed" : ""}>{task.text}</span>

      <button onClick={() => onToggleComplete(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}

export default ToDoItem;
