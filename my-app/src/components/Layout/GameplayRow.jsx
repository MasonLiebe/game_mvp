import React from 'react';
import GameBoard from '../GameBoard/GameBoard';
import Essences from '../UIContainer/Essences';
import Policies from '../UIContainer/Policies';
import Stats from '../UIContainer/Stats';
import Consumables from '../UIContainer/Consumables';
import Store from '../UIContainer/Store';

const GameplayRow = () => {
  return (
    <div className="gameplay-row">
      <div className="left-column">
        <Policies />
        <Essences />
      </div>
      <div className="middle-column">
        <GameBoard />
        <Store />
      </div>
      <div className="right-column">
        <Stats />
        <Consumables />
      </div>
    </div>
  );
};

export default GameplayRow; 