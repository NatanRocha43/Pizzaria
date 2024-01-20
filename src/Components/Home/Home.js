import React, { useState } from 'react';
import './Home.scss';
import CustomModal from '../Modal/Modal.js';

const HomePage = () => {
  const [isModalVisible, setModalVisibility] = useState(false);

  const openModal = () => {
    setModalVisibility(true);
  };

  const closeModal = () => {
    setModalVisibility(false);
  };

  return (
    <div className="home-background-container">
      <div className="home-container">
        <div className='home-content'>
          <div className='home-title-container'>
            <h1 className='home-title'>PizzaTech</h1>
          </div>
          <div className='home-text-container'>
            <p className='home-subtitle'>
              Comece a criar sua obra-prima culinária!<br/>
              Personalize sua pizza perfeita agora.
            </p>
          </div>
          <div className='home-button-container'>
            <button className='home-start-button' onClick={openModal}>
              Começar agora!
            </button>
          </div>
        </div>
        
        <CustomModal isOpen={isModalVisible} onClose={closeModal} />
      </div>
    </div>
  );
};

export default HomePage;
