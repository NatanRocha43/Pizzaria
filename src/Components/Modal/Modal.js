// Modal.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { SlClose } from "react-icons/sl";
import './Modal.scss';

const Modal = ({ isOpen, onClose }) => {
  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.5)',
  });

  return (
    isOpen && (
      <>
        <animated.div className="modal-overlay" style={{ opacity: modalAnimation.opacity }} onClick={onClose}></animated.div>
        <animated.div className="modal" style={modalAnimation}>
          <p className="close-button" onClick={onClose}><SlClose /></p>
          <div className="modal-content">
            {/* Conteúdo do seu modal aqui */}
          </div>
        </animated.div>
      </>
    )
  );
};

export default Modal;
