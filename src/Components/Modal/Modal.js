// Modal.js
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { SlClose } from "react-icons/sl";
import { IoArrowBack } from "react-icons/io5";
import PizzaFina from '../../assets/pizzaFina.svg';
import StepIndicator from '../StepIndicator/StepIndicator';
import './Modal.scss';

const Modal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.5)',
  });

  const steps = ['1', '2', '3', '4'];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setCompletedSteps([...completedSteps, currentStep]);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCompletedSteps(completedSteps.filter(step => step !== currentStep));
    }
  };

  return (
    isOpen && (
      <>
        <animated.div className="modal-overlay" style={{ opacity: modalAnimation.opacity }} onClick={onClose}></animated.div>
        <animated.div className="modal" style={modalAnimation}>
          <p className="close-button" onClick={() => {
            setCurrentStep(0);
            setCompletedSteps([]);
            onClose();
          }}><SlClose /></p>

          {currentStep > 0 && currentStep < steps.length - 1 && (
            <p className="back-button" onClick={handlePreviousStep}>
              <IoArrowBack />
              Voltar
            </p>
          )}

          <StepIndicator steps={steps} currentStep={currentStep} completedSteps={completedSteps} />

          <div className="modal-container">
            <div className='modal-content'>
              <div className='modal-card'>
                {currentStep === 0 && (
                  <div className='card'>
                    <img src={PizzaFina} alt='Massa Fina'/>
                    <p className='titulo-modal'>Escolha a Massa</p>
                    <p className='sub-titulo'>Escolha entre as opções de massa disponíveis.</p>
                    <button className='button' onClick={handleNextStep}>Próximo</button>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className='card'>
                    <img src={PizzaFina} alt='Escolha os Ingredientes'/>
                    <p className='titulo-modal'>Escolha os Ingredientes</p>
                    <p className='sub-titulo'>Escolha os ingredientes desejados para sua pizza.</p>
                    <button className='button' onClick={handleNextStep}>Próximo</button>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className='card'>
                    <img src={PizzaFina} alt='Escolha o Tamanho'/>
                    <p className='titulo-modal'>Escolha o Tamanho</p>
                    <p className='sub-titulo'>Escolha o tamanho da sua pizza.</p>
                    <button className='button' onClick={handleNextStep}>Próximo</button>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className='card'>
                    <img src={PizzaFina} alt='Pedido Feito'/>
                    <p className='titulo-modal'>Pedido Feito</p>
                    <p className='sub-titulo'>Seu pedido foi concluído com sucesso!</p>
                    <button className='button' onClick={() => {
                      setCurrentStep(0);
                      setCompletedSteps([]);
                      onClose();
                    }}>Fechar</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </animated.div>
      </>
    )
  );
};

export default Modal;

