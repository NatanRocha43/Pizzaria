// Steps/Step4/RevisaoPedido.js
import React from 'react';
import '../Card/Card.scss'
import Gif from '../../../assets/realizado.gif'

const RevisaoPedido = ({ handleNextStep }) => {
  // const { massa, tamanho, recheio } = useData();

  // Lógica de exibição da revisão do pedido

  return (
    <div  className="divStep">
      <div className='card'>
        <img src={Gif} alt='Pedido Feito' />
        <p className='titulo-modal'>Pedido enviado</p>
        <p className='sub-titulo'>Seu pedido foi concluído com sucesso!</p>
        <button className='button' onClick={handleNextStep}>Fechar</button>
      </div>
    </div>
  );
};

export default RevisaoPedido;
