
// src/components/TaskList.js
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskList = () => {
  const { tasks, toggleComplete, deleteTask } = useContext(TaskContext);
  
  return (

    <ul className="list-group">
      {tasks.map(task => (
        <li key={task.id} className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-success' : ''}`}>
          <span onClick={() => toggleComplete(task.id)} style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}>
            {task.text}
          </span>
          <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;