import React, { createContext, useContext, useReducer } from 'react';
import { gameReducer, initialState, ACTIONS } from './gameReducer';

// Create context
const GameContext = createContext();

// Custom hook for using the game context
export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

// Provider component
export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  // Helper functions for updating state
  const updateEssences = (essences) => {
    dispatch({ type: ACTIONS.UPDATE_ESSENCES, payload: essences });
  };

  const updatePolicies = (policies) => {
    dispatch({ type: ACTIONS.UPDATE_POLICIES, payload: policies });
  };

  const updateStats = (stats) => {
    dispatch({ type: ACTIONS.UPDATE_STATS, payload: stats });
  };

  const updateConsumables = (consumables) => {
    dispatch({ type: ACTIONS.UPDATE_CONSUMABLES, payload: consumables });
  };

  const updateGameBoard = (gameBoard) => {
    dispatch({ type: ACTIONS.UPDATE_GAME_BOARD, payload: gameBoard });
  };

  // Value object for the context
  const value = {
    state,
    actions: {
      updateEssences,
      updatePolicies,
      updateStats,
      updateConsumables,
      updateGameBoard
    }
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}; 