import React from 'react';

export default function Toast({ message, isVisible }) {
  return (
    <div className={`toast-notification ${isVisible ? 'active' : ''}`} id="toastNotification">
      <span className="toast-dot"></span>
      <span id="toastMessage">{message || 'Copied to clipboard!'}</span>
    </div>
  );
}
