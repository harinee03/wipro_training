import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Packages from './pages/Packages/Packages';
import Contact from './pages/Contact/Contact';
import BookingForm from './components/BookingForm/BookingForm';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { BookingProvider } from './context/BookingContext';
import Bookings from './pages/Bookings/Bookings';
import './styles/main.css';

function App() {
  return (
    <ErrorBoundary>
      <BookingProvider>
        <Router>
          <div className="app">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking" element={<BookingForm />} />
                <Route path="/bookings" element={<Bookings />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </BookingProvider>
    </ErrorBoundary>
  );
}

export default App;