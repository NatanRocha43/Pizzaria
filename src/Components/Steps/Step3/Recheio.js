// tamanho.jsx
import React, { useState, useEffect } from 'react';
import { fetchRecheios } from '../../../API/apiService'; 

const Recheio = ({ handleNextStep }) => {
  const [recheio, setrecheio] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recheioData = await fetchRecheios();
        setrecheio(recheioData);
      } catch (error) {
        console.error('Erro ao buscar recheio:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='divStep'>
      {recheio.map((tamanho) => (
        <div key={tamanho.id} className="card">
          <img className="img" src={tamanho.image} alt={tamanho.title} />
          <h2 className="titulo">{tamanho.title}</h2>
          <p className="sub-titulo">{tamanho.description}</p>
          <button className='button' onClick={() => handleNextStep(tamanho)}>Selecionar</button>
        </div>
      ))}
    </div>
  );
};

export default Recheio;
