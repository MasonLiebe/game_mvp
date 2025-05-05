import React, { useEffect, useState } from 'react';
import grassTile from '../../assets/tiles/grass.jpg';
import lakeTile from '../../assets/tiles/lake.jpg';
import mountainTile from '../../assets/tiles/mountain.jpg';
import swampTile from '../../assets/tiles/swamp.jpg';
import { generateLandscape } from '../../utils/landscapeGenerator';

const GRID_SIZE = 7;

const GameBoard = () => {
  const [landscapeGrid, setLandscapeGrid] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      console.log('Generating landscape...');
      const grid = generateLandscape(GRID_SIZE);
      console.log('Generated grid:', grid);
      setLandscapeGrid(grid);
    } catch (err) {
      console.error('Error generating landscape:', err);
      setError(err.message);
    }
  }, []);

  const getTileImage = (typeID) => {
    try {
      console.log('Getting tile image for type:', typeID);
      switch (typeID) {
        case 1:
          return grassTile;
        case 2:
          return lakeTile;
        case 3:
          return mountainTile;
        case 4:
          return swampTile;
        default:
          return grassTile;
      }
    } catch (err) {
      console.error('Error getting tile image:', err);
      return grassTile;
    }
  };

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!landscapeGrid) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="gameboard">
      <div className="grid-container">
        {landscapeGrid.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((tileType, colIndex) => {
              const tileImage = getTileImage(tileType);
              return (
                <div 
                  key={`${rowIndex}-${colIndex}`} 
                  className="grid-cell"
                  style={{ 
                    backgroundImage: `url(${tileImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <span className="tile-number">{rowIndex * GRID_SIZE + colIndex + 1}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;