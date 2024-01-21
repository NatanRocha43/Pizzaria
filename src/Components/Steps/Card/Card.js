import React from 'react';
import './Card.scss'

const Card = ({ id, image, title, description, onSelect }) => (
  <div key={id} className="card">
    <img className="img" src={image} alt={title} />
    <h2 className="titulo">{title}</h2>
    <p className="sub-titulo">{description}</p>
    <button className='button' onClick={() => onSelect({ id, image, title, description })}>
      Selecionar
    </button>
  </div>
);

export default Card;
