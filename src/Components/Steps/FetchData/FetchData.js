import { useState, useEffect } from 'react';

const useFetchData = (fetchFunction) => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dadosData = await fetchFunction(); 
        setDados(dadosData);
      } catch (error) {
        console.error('Erro', error);
      }
    };

    fetchData();
  }, [fetchFunction]);

  return dados;
};

export default useFetchData;
