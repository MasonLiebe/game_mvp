// Action Types
export const ACTIONS = {
  UPDATE_ESSENCES: 'UPDATE_ESSENCES',
  UPDATE_POLICIES: 'UPDATE_POLICIES',
  UPDATE_STATS: 'UPDATE_STATS',
  UPDATE_CONSUMABLES: 'UPDATE_CONSUMABLES',
  UPDATE_GAME_BOARD: 'UPDATE_GAME_BOARD'
};

// Initial State
export const initialState = {
  essences: {
    // Example essence types
    fire: 0,
    water: 0,
    earth: 0,
    air: 0
  },
  policies: {
    // Example policies
    activePolicies: [],
    availablePolicies: []
  },
  stats: {
    // Example stats
    level: 1,
    experience: 0,
    resources: 0
  },
  consumables: {
    // Example consumables
    potions: 0,
    scrolls: 0
  },
  gameBoard: {
    // Game board state
    cells: [],
    currentTurn: 0
  }
};

// landscape probability constants
export const mountainRangeCountProbability = {
  0: 0.1,
  1: 0.4,
  2: 0.3,
  3: 0.2
};

export const mountainRangeLengthProbability = {
  2: 0.2,
  3: 0.5,
  4: 0.3
};

export const lakeCountProbability = {
  1: 0.2,
  2: 0.3,
  3: 0.25,
  4: 0.15,
  5: 0.1
};

export const swampCountProbability = {
  0: 0.4,
  1: 0.3,
  2: 0.3,
};

// Reducer
export const gameReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_ESSENCES:
      return {
        ...state,
        essences: {
          ...state.essences,
          ...action.payload
        }
      };
    
    case ACTIONS.UPDATE_POLICIES:
      return {
        ...state,
        policies: {
          ...state.policies,
          ...action.payload
        }
      };
    
    case ACTIONS.UPDATE_STATS:
      return {
        ...state,
        stats: {
          ...state.stats,
          ...action.payload
        }
      };
    
    case ACTIONS.UPDATE_CONSUMABLES:
      return {
        ...state,
        consumables: {
          ...state.consumables,
          ...action.payload
        }
      };
    
    case ACTIONS.UPDATE_GAME_BOARD:
      return {
        ...state,
        gameBoard: {
          ...state.gameBoard,
          ...action.payload
        }
      };
    
    default:
      return state;
  }
}; 