import React from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
// import Content from './components/Content';
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
            {/* Challenge 7: Workout Tracker */}
            <section className="challenge-section">
              <WorkoutTracker />
            </section>

            {/* Challenge 8: Redux Product Management */}
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
