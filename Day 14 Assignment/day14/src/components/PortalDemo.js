
import React, { useState } from 'react';
import Modal from './Modal';
import Notification from './Notification';

const PortalDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  const showNotification = (type, message) => {
    setNotification({ type, message });
  };

  return (
    <div className="container mt-4">
      <h2>Portals Demo</h2>
      
      <div className="row mt-4">
        <div className="col-md-6">
          <button 
            className="btn btn-primary"
            onClick={() => setIsModalOpen(true)}
          >
            Open Modal
          </button>
        </div>
        
        <div className="col-md-6">
          <div className="btn-group">
            <button 
              className="btn btn-success"
              onClick={() => showNotification('success', 'Operation completed successfully!')}
            >
              Success Notification
            </button>
            <button 
              className="btn btn-warning"
              onClick={() => showNotification('warning', 'Warning: This action requires attention!')}
            >
              Warning Notification
            </button>
            <button 
              className="btn btn-danger"
              onClick={() => showNotification('error', 'Error: Something went wrong!')}
            >
              Error Notification
            </button>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Sample Modal"
      >
        <p>This modal is rendered using React Portals!</p>
        <p>It appears above all other content, even though it's nested in the component hierarchy.</p>
      </Modal>

      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

export default PortalDemo;