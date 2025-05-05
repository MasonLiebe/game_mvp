import React from 'react';
import grassTile from '../../assets/tiles/grass.png';

const GRID_SIZE = 7;

const GameBoard = () => {
  const spiralMatrix = [
    [43, 42, 41, 40, 39, 38, 37],
    [44, 21, 20, 19, 18, 17, 36],
    [45, 22,  7,  6,  5, 16, 35],
    [46, 23,  8,  1,  4, 15, 34],
    [47, 24,  9,  2,  3, 14, 33],
    [48, 25, 10, 11, 12, 13, 32],
    [49, 26, 27, 28, 29, 30, 31]
  ];

  return (
    <div className="gameboard">
      <div className="grid-container">
        {spiralMatrix.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((value, colIndex) => (
              <div 
                key={`${rowIndex}-${colIndex}`} 
                className="grid-cell"
                style={{ backgroundImage: `url(${grassTile})` }}
              >
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;