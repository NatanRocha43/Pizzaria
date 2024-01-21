// Massa.jsx
import React, { useState, useEffect } from 'react';
import { fetchMassas } from '../../../API/apiService'; 
import '../Index.scss';

const Massa = ({ handleNextStep }) => {
  const [massas, setMassas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const massasData = await fetchMassas();
        setMassas(massasData);
      } catch (error) {
        console.error('Erro ao buscar massas:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='divStep'>
      {massas.map((massa) => (
        <div key={massa.id} className="card">
          <img className="img" src={massa.image} alt={massa.title} />
          <h2 className="titulo">{massa.title}</h2>
          <p className="sub-titulo">{massa.description}</p>
          <button className='button' onClick={() => handleNextStep(massa)}>Selecionar</button>
        </div>
      ))}
    </div>
  );
};

export default Massa;
