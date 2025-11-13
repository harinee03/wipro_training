// App.js
import React, { Suspense, useState } from 'react';
import Dashboard from './components/Dashboard';
import ProductShowcase from './components/ProductShowcase';
import PortalDemo from './components/PortalDemo';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

// Lazy loaded components
const CourseDetails = React.lazy(() => import('./components/CourseDetails'));
const InstructorProfile = React.lazy(() => import('./components/InstructorProfile'));

function App() {
  const [activeTab, setActiveTab] = useState('lazy');

  const renderContent = () => {
    switch (activeTab) {
      case 'lazy':
        return <LazyLoadingDemo />;
      case 'pure':
        return <Dashboard />;
      case 'error':
        return <ProductShowcase />;
      case 'portal':
        return <PortalDemo />;
      default:
        return <LazyLoadingDemo />;
    }
  };

  const LazyLoadingDemo = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    return (
      <div>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">MERN Stack Course</h5>
                <button 
                  className="btn btn-primary"
                  onClick={() => setActiveComponent('course')}
                >
                  View Course Details
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Parth</h5>
                <button 
                  className="btn btn-primary"
                  onClick={() => setActiveComponent('instructor')}
                >
                  View Instructor Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Suspense fallback={
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }>
            {activeComponent === 'course' && <CourseDetails />}
            {activeComponent === 'instructor' && <InstructorProfile />}
          </Suspense>
        </div>
      </div>
    );
  };

  return (
    <ErrorBoundary>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <span className="navbar-brand">React Advanced Demo</span>
            <div className="navbar-nav">
              {['lazy', 'pure', 'error', 'portal'].map(tab => (
                <button
                  key={tab}
                  className={`nav-link btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <h1 className="text-center mb-4">
            React Advanced Concepts - Day 14
          </h1>
          {renderContent()}
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;