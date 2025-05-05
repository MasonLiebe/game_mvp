import React from 'react';
import MainLayout from './components/Layout/MainLayout';
import { GameProvider } from './state/GameProvider';

function App() {
  return (
    <GameProvider>
      <MainLayout />
    </GameProvider>
  );
}

export default App;
