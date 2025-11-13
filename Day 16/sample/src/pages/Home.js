// src/pages/Home.js
import React from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../context/TaskList';

const Home = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Task Tracker</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default Home;
