import React from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';

import OfflineBanner from './components/OfflineBanner';
import WorkoutTracker from './components/WorkoutTracker';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <OfflineBanner />
        <Header />
          <div className="challenges-container">
  
            <section className="challenge-section">
              <WorkoutTracker />
            </section>


            <section className="challenge-section">
              <ProductForm />
              <ProductList />
            </section>
          </div>
       
      </div>
    </ThemeProvider>
  );
}

export default App;
