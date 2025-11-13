// src/components/AddTask.js
import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const AddTask = () => {
  const [text, setText] = useState('');
  const { addTask } = useContext(TaskContext);
  
  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  }

  return (
    <form onSubmit={onSubmit} className="mb-3">
      <div className="input-group">
        <input 

          type="text"
          className="form-control"
          placeholder="Add new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="submit">Add Task</button>
        </div>

      </div>
    </form>
  );
}

export default AddTask;