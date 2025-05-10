import { useState } from 'react';
import { TShirt } from '../../components/TShirt';
import { TShirtSetup } from '../../components/TShirtSetup';
import './style.css';

export const HomePage = () => {
    const [typ, setTyp] = useState('normalShortSleeve');
    const [barva, setBarva] = useState('yellow');
    const [potisk, setPotisk] = useState('Ahoj Paigee');
  return (
    <div className="container">
      <div className="tshirt-panel">
      <div className="tshirt-panel__tshirt">
          <TShirt type={typ} color={barva} print={potisk} />
        </div>
        <div className="tshirt-panel__setup">
          <h2>Možnosti:</h2>
          <TShirtSetup
            onTypeChange={setTyp}
            onColorChange={setBarva}
            onPrintChange={setPotisk}
            currentType={typ}
            currentColor={barva}
            currentPrint={potisk}
          />
        </div>
      </div>
    </div>
  );
};
