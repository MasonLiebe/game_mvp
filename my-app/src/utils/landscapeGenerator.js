import { 
  mountainRangeCountProbability, 
  mountainRangeLengthProbability,
  lakeCountProbability,
  swampCountProbability 
} from '../state/gameReducer';
import { generateSpiralMatrix } from './spiralMatrix';

// Helper function to choose a value based on probability distribution
const chooseFromProbability = (probabilityMap) => {
  const random = Math.random();
  let cumulativeProbability = 0;
  
  for (const [value, probability] of Object.entries(probabilityMap)) {
    cumulativeProbability += probability;
    if (random <= cumulativeProbability) {
      return parseInt(value);
    }
  }
  
  return 0;
};

// Generate mountain ranges
const generateMountainRanges = (gridSize) => {
  const ranges = [];
  const rangeCount = chooseFromProbability(mountainRangeCountProbability);
  
  for (let i = 0; i < rangeCount; i++) {
    const length = chooseFromProbability(mountainRangeLengthProbability);
    const startX = Math.floor(Math.random() * gridSize);
    const startY = Math.floor(Math.random() * gridSize);
    const direction = Math.floor(Math.random() * 4); // 0: right, 1: down, 2: left, 3: up
    
    const range = [];
    let x = startX;
    let y = startY;
    
    for (let j = 0; j < length; j++) {
      if (x >= 0 && x < gridSize && y >= 0 && y < gridSize) {
        range.push({ x, y });
      }
      
      switch (direction) {
        case 0: x++; break;
        case 1: y++; break;
        case 2: x--; break;
        case 3: y--; break;
      }
    }
    
    ranges.push(range);
  }
  
  return ranges;
};

// Generate lakes
const generateLakes = (gridSize) => {
  const lakes = [];
  const lakeCount = chooseFromProbability(lakeCountProbability);
  
  for (let i = 0; i < lakeCount; i++) {
    const x = Math.floor(Math.random() * gridSize);
    const y = Math.floor(Math.random() * gridSize);
    lakes.push({ x, y });
  }
  
  return lakes;
};

// Generate swamps
const generateSwamps = (gridSize) => {
  const swamps = [];
  const swampCount = chooseFromProbability(swampCountProbability);
  
  for (let i = 0; i < swampCount; i++) {
    const x = Math.floor(Math.random() * gridSize);
    const y = Math.floor(Math.random() * gridSize);
    swamps.push({ x, y });
  }
  
  return swamps;
};

// Generate random tile properties
const generateTileProperties = (tileNumber, type) => {
  const landscapeTypes = {
    1: "Grass",
    2: "Lake",
    3: "Mountain",
    4: "Swamp"
  };

  return {
    tile_number: tileNumber,
    type: type,
    landscape: landscapeTypes[type],
    citizens: 0,
    vitality_add: "0.00",
    civics_add: "0.00",
    enlightenment_add: "0.00",
    defense_add: "0.00",
    industry_add: "0.00",
    vitality_mult: "1.00",
    civics_mult: "1.00",
    enlightenment_mult: "1.00",
    defense_mult: "1.00",
    industry_mult: "1.00",
    building_id: 0,
    building_level: 0,
    tile_buff: "None"
  };
};

// Main function to generate landscape
export const generateLandscape = (gridSize) => {
  const mountainRanges = generateMountainRanges(gridSize);
  const lakes = generateLakes(gridSize);
  const swamps = generateSwamps(gridSize);
  const spiralMatrix = generateSpiralMatrix(gridSize);
  
  // Create a grid to store tile objects
  const grid = Array(gridSize).fill().map(() => Array(gridSize).fill(null));
  
  // Initialize all tiles with grass type and properties
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      grid[y][x] = {
        type: 1, // 1 = grass
        ...generateTileProperties(spiralMatrix[y][x], 1)
      };
    }
  }
  
  // Place mountain ranges
  mountainRanges.forEach(range => {
    range.forEach(({ x, y }) => {
      if (x >= 0 && x < gridSize && y >= 0 && y < gridSize) {
        grid[y][x] = {
          type: 3, // 3 = mountain
          ...generateTileProperties(grid[y][x].tile_number, 3)
        };
      }
    });
  });
  
  // Place lakes
  lakes.forEach(({ x, y }) => {
    if (x >= 0 && x < gridSize && y >= 0 && y < gridSize) {
      grid[y][x] = {
        type: 2, // 2 = lake
        ...generateTileProperties(grid[y][x].tile_number, 2)
      };
    }
  });
  
  // Place swamps
  swamps.forEach(({ x, y }) => {
    if (x >= 0 && x < gridSize && y >= 0 && y < gridSize) {
      grid[y][x] = {
        type: 4, // 4 = swamp
        ...generateTileProperties(grid[y][x].tile_number, 4)
      };
    }
  });
  
  return grid;
}; 