import React from 'react';
import '../../styles/global.css';
import TopBar from '../TopBar/TopBar';
import GameplayRow from './GameplayRow';

const MainLayout = () => {
  return (
    <div className="game-container">
      <TopBar />
      <GameplayRow />
    </div>
  );
};

export default MainLayout; 