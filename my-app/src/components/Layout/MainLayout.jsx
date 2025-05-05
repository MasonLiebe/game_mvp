import React from 'react';
import '../../styles/global.css';
import TopBar from '../TopBar/TopBar';
import Essences from '../UIContainer/Essences';
import Policies from '../UIContainer/Policies';
import GameBoard from '../GameBoard/GameBoard';
import Stats from '../UIContainer/Stats';
import Consumables from '../UIContainer/Consumables';
import Store from '../UIContainer/Store';

const MainLayout = () => {
  return (
    <div className="game-container">
      <TopBar />
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

export default MainLayout; 