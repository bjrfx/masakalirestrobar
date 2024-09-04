// Modal.jsx
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, imgSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        <img src={imgSrc} alt="Dish" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;