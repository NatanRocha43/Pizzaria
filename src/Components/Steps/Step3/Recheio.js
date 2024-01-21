import React, { useState, useEffect } from 'react';
import MassaJson from '../../../Json/recheios.json';
import '../Index.scss';

const Recheios = ({ handleNextStep }) => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    setSteps(MassaJson.steps);
  }, []);

  return (
    <div className='divStep'>
        {steps.map((step) => (
            <div key={step.id} className="card">
              <img className="img recheio" src={step.image} alt={step.title} />
              <h2 className="titulo">{step.title}</h2>
              <p className="sub-titulo">{step.description}</p>
              <button className='button' onClick={() => handleNextStep(step)}>Selecionar</button>
            </div>
        ))}
    </div>
  );
};

export default Recheios;
