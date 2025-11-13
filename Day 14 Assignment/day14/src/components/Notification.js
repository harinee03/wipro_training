import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Notification.css';

const Notification = ({ message, type = 'info', onClose, duration = 5000 }) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return ReactDOM.createPortal(
    <div className={`notification notification-${type}`}>
      <div className="notification-content">
        <span>{message}</span>
        <button className="notification-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>,
    document.getElementById('notification-root')
  );
};

export default Notification;