import React from 'react';
import '../../styles/global.css';
import TopBar from '../TopBar/TopBar';
import Essences from '../UIContainer/Essences';
import Policies from '../UIContainer/Policies';
import GameBoard from '../GameBoard/GameBoard';
import Stats from '../UIContainer/Stats';
import Consumables from '../UIContainer/Consumables';

const MainLayout = () => {
  return (
    <div className="game-container">
      <TopBar />
      <Essences />
      <Policies />
      <GameBoard />
      <Stats />
      <Consumables />
    </div>
  );
};

export default MainLayout; 