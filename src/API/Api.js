import Massa from '../Json/massas.json'
import Tamanho from '../Json/tamanhos.json'
import Recheios from '../Json/recheios.json'

export const fetchMassasData = async () => {
    try {
      const response = await fetch(Massa); 
      const data = await response.json();
      return data.steps[0].options;
    } catch (error) {
      console.error('Erro ao buscar dados de massas:', error);
      return [];
    }
  };
  
  export const fetchTamanhosData = async () => {
    try {
      const response = await fetch(Tamanho); 
      const data = await response.json();
      return data.steps[1].options;
    } catch (error) {
      console.error('Erro ao buscar dados de tamanhos:', error);
      return [];
    }
  };
  
  export const fetchRecheiosData = async () => {
    try {
      const response = await fetch(Recheios);
      const data = await response.json();
      return data.steps[2].options;
    } catch (error) {
      console.error('Erro ao buscar dados de recheios:', error);
      return [];
    }
  };
  