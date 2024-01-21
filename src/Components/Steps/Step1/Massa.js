import React from 'react';
import { fetchMassas } from '../../../API/apiService';
import useFetchData from '../FetchData/FetchData'; 
import Card from '../Card/Card';

const Massa = ({ handleNextStep }) => {

  const dados = useFetchData(fetchMassas);

  return (
    <div className="divStep">
      {dados.map((dado) => (
        <Card key={dado.id} id={dado.id} image={dado.image} title={dado.title} description={dado.description} onSelect={handleNextStep} />
      ))}
    </div>
  );
};

export default Massa;