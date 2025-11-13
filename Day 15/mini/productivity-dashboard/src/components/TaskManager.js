import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, toggleTask, deleteTask, setTasks } from '../store/tasksSlice';
import './TaskManager.css';

const TaskManager = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.items);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      dispatch(setTasks(JSON.parse(savedTasks)));
    }
  }, [dispatch]);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch(addTask(taskText.trim()));
      setTaskText('');
    }
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="task-manager">
      <h2>Daily Tasks</h2>
      
      <form onSubmit={handleAddTask} className="task-form">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a new task..."
          className="task-input"
        />
        <button type="submit" className="add-task-btn">Add Task</button>
      </form>

      <div className="tasks-list">
        {tasks.map(task => (
          <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
              className="task-checkbox"
            />
            <span className="task-text">{task.text}</span>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="delete-task-btn"
              aria-label="Delete task"
            >
              🗑️
            </button>
          </div>
        ))}
        
        {tasks.length === 0 && (
          <p className="no-tasks">No tasks yet. Add your first task above!</p>
        )}
      </div>
    </div>
  );
};

export default TaskManager;
