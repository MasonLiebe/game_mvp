import React from 'react';
import { useGame } from '../../state/GameProvider';
import styles from './UIContainer.module.css';

const Essences = () => {
  const { state, actions } = useGame();
  const { essences } = state;

  const handleIncrementEssence = (type) => {
    actions.updateEssences({
      [type]: essences[type] + 1
    });
  };

  return (
    <div className="essences">
      <h2>Essences</h2>
      <div className={styles.content}>
        {Object.entries(essences).map(([type, amount]) => (
          <div key={type} className={styles.container}>
            <span>{type}: {amount}</span>
            <button onClick={() => handleIncrementEssence(type)}>
              +1 {type}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Essences; 