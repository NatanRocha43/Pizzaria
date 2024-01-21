import React from 'react';
import { fetchRecheios } from '../../../API/apiService';
import useFetchData from '../FetchData/FetchData'; 
import Card from '../Card/Card';

const Recheio = ({ handleNextStep }) => {

  const dados = useFetchData(fetchRecheios);

  return (
    <div className="divStep">
      {dados.map((dado) => (
        <Card key={dado.id} id={dado.id} image={dado.image} title={dado.title} description={dado.description} onSelect={handleNextStep} />
      ))}
    </div>
  );
};

export default Recheio;