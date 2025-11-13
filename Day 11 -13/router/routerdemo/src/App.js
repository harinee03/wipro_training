
import './App.css';
import Notfound from './pages/notfound.js';
import {Routes, Route, NavLink } from 'react-router-dom';
import About from './pages/about.js';
import Home from './pages/home.js';
import Contactus from './pages/contactus.js';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
 <div className="app">
      <nav style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
        <NavLink to="/" end style={({isActive})=>({marginRight:12, color: isActive? 'blue':'black'})}>Home</NavLink>
        <NavLink to="/about" style={({isActive})=>({marginRight:12, color: isActive? 'blue':'black'})}>About</NavLink>
        <NavLink to="/contactus" style={({isActive})=>({color: isActive? 'blue':'black'})}>contact</NavLink>
      </nav>

      <main style={{ padding: 12 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
