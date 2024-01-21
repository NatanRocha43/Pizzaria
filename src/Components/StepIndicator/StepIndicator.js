// StepIndicator.js
import React from 'react';
import PropTypes from 'prop-types';
import './StepIndicator.scss';

const StepIndicator = ({ steps, currentStep, completedSteps }) => {
  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <div key={index} className={`step ${completedSteps.includes(index) ? 'completed' : ''} ${index === currentStep ? 'active' : ''}`}>
          {step}
        </div>
      ))}
    </div>
  );
};

StepIndicator.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number.isRequired,
  completedSteps: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default StepIndicator;
