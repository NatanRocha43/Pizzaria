// tamanho.jsx
import React, { useState, useEffect } from 'react';
import { fetchTamanhos } from '../../../API/apiService';
import '../Index.scss';

const Tamanho = ({ handleNextStep }) => {
  const [tamanhos, settamanhos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tamanhosData = await fetchTamanhos();
        settamanhos(tamanhosData);
      } catch (error) {
        console.error('Erro ao buscar tamanhos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='divStep'>
      {tamanhos.map((tamanho) => (
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

export default Tamanho;
