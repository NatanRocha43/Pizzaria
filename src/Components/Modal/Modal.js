// Modal.js
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { SlClose } from "react-icons/sl";
import { IoArrowBack } from "react-icons/io5";
import StepIndicator from '../StepIndicator/StepIndicator';

import Step1 from '../Steps/Step1/Massa';
import Step2 from '../Steps/Step2/Tamanho';
import Step3 from '../Steps/Step3/Recheio';

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

          
          <div className='divStepModal'>
                {currentStep === 0 && (
                  <div>
                    <div className='tituloCard'>1 - Inicie sua jornada, escolha sua massa:</div>
                      <Step1 handleNextStep={handleNextStep} />
                  </div>
                        
                )}

                {currentStep === 1 && (
                  <div>
                    <div className='tituloCard'>2 - Escolha o tamanho da sua pizza perfeita:</div>
                    <Step2 handleNextStep={handleNextStep} />
                </div>
                )}

                {currentStep === 2 && (
                <div>
                  <div className='tituloCard'>3 - Crie sua obra-prima escolhendo os ingredientes:</div>
                  <Step3 handleNextStep={handleNextStep} />
                </div>
                )}

                {currentStep === 3 && (
                  <div>
                    <div className='tituloCard'><p></p></div>
                    <div className='card'>
                    <img  alt='Pedido Feito'/>
                    <p className='titulo-modal'>Pedido Feito</p>
                    <p className='sub-titulo'>Seu pedido foi concluído com sucesso!</p>
                    <button className='button' onClick={() => {
                      setCurrentStep(0);
                      setCompletedSteps([]);
                      onClose();
                    }}>Fechar</button>
                  </div>
                </div>
                  
                )}
              </div>
        </animated.div>
      </>
    )
  );
};

export default Modal;
