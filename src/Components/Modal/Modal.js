// Modal.js
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { SlClose } from "react-icons/sl";
import { IoArrowBack } from "react-icons/io5";
import StepIndicator from '../StepIndicator/StepIndicator';
import Step1 from '../Steps/Step1/Massa';
import Step2 from '../Steps/Step2/Tamanho';
import Step3 from '../Steps/Step3/Recheio';
import Step4 from '../Steps/Step4/RevisaoPedido';

import './Modal.scss';

const Modal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.5)',
  });

  const stepAnimations = [
    useSpring({ opacity: currentStep === 0 ? 1 : 0 }),
    useSpring({ opacity: currentStep === 1 ? 1 : 0 }),
    useSpring({ opacity: currentStep === 2 ? 1 : 0 }),
    useSpring({ opacity: currentStep === 3 ? 1 : 0 }),
  ];

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

  const resetAll = () => {
    setCurrentStep(0);
    setCompletedSteps([]);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <>
          <animated.div className="modal-overlay" style={{ opacity: modalAnimation.opacity }} onClick={resetAll} />
          <animated.div className="modal" style={modalAnimation}>
            <p className="close-button" onClick={() => { resetAll() }}><SlClose /></p>
            {currentStep > 0 && currentStep < steps.length - 1 && <p className="back-button" onClick={handlePreviousStep}><IoArrowBack />Voltar</p>}
            <StepIndicator steps={steps} currentStep={currentStep} completedSteps={completedSteps} />
            <div className='divStepModal'>
              {currentStep === 0 && <animated.div className='carrossel-mobile' style={stepAnimations[0]}><div className='tituloCard'>1 - Inicie sua jornada, escolha sua massa:</div><Step1 handleNextStep={handleNextStep} /></animated.div>}
              {currentStep === 1 && <animated.div className='carrossel-mobile' style={stepAnimations[1]}><div className='tituloCard'>2 - Escolha o tamanho da sua pizza perfeita:</div><Step2 handleNextStep={handleNextStep} /></animated.div>}
              {currentStep === 2 && <animated.div className='carrossel-mobile' style={stepAnimations[2]}><div className='tituloCard'>3 - Escolha o seu sabor preferido:</div><Step3 handleNextStep={handleNextStep} /></animated.div>}
              {currentStep === 3 && <animated.div className='carrossel-mobile' style={stepAnimations[3]}><div className='tituloCard'>4 - Pedido Realizado</div><Step4 handleNextStep={resetAll} /></animated.div>}
            </div>
          </animated.div>
        </>
      )}
    </>
  );
};

export default Modal;
