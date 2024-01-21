const apiEndpoint = 'http://localhost:3001/';

const fetchData = async (resource) => {
  const url = `${apiEndpoint}${resource}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error(`Erro ao buscar ${resource.toLowerCase()}:`, error);
    return [];
  }
};

export const fetchMassas = async () => fetchData('Massas');
export const fetchTamanhos = async () => fetchData('Tamanho');
export const fetchRecheios = async () => fetchData('Recheios');
