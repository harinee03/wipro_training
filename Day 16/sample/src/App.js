
import React from 'react';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
// import TaskList from './context/TaskList';
// import AddTask from './components/AddTask';
import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';
import { TaskProvider } from './context/TaskContext';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <TaskProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}


export default App;
