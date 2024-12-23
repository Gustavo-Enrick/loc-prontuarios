import { useState } from 'react';
import '../Style/NavigatioButtons.sass';

export default function NavigationButtons() {
  const [activeButton, setActiveButton] = useState('Coordenação');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className='container-fluid mt-1 d-flex justify-content-between navigatioButtons'>
      <button
        type='button'
        className={`btn coordination ${activeButton === 'Coordenação' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Coordenação')}
      >
        Coordenação
      </button>
      <button
        type='button'
        className={`btn nursing ${activeButton === 'Enfermaria' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Enfermaria')}
      >
        Enfermaria
      </button>
      <button
        type='button'
        className={`btn pharmacy ${activeButton === 'Farmácia' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Farmácia')}
      >
        Farmácia
      </button>
      <button
        type='button'
        className={`btn doctor ${activeButton === 'Médico' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Médico')}
      >
        Médico
      </button>
      <button
        type='button'
        className={`btn technicians ${activeButton === 'Técnicos' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Técnicos')}
      >
        Técnicos
      </button>
    </div>
  );
}