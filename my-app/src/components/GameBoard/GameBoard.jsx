import React, { useEffect, useState, useRef } from 'react';
import grassTile from '../../assets/tiles/grass.jpg';
import lakeTile from '../../assets/tiles/lake.jpg';
import mountainTile from '../../assets/tiles/mountain.jpg';
import swampTile from '../../assets/tiles/swamp.jpg';
import { generateLandscape } from '../../utils/landscapeGenerator';
import styles from './GameBoard.module.css';
import TilePopup from './TilePopup';

const GRID_SIZE = 7;

const GameBoard = () => {
  const [landscapeGrid, setLandscapeGrid] = useState(null);
  const [selectedTile, setSelectedTile] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [error, setError] = useState(null);
  const gameboardRef = useRef(null);

  useEffect(() => {
    try {
      const grid = generateLandscape(GRID_SIZE);
      setLandscapeGrid(grid);
    } catch (err) {
      console.error('Error generating landscape:', err);
      setError(err.message);
    }
  }, []);

  const getTileImage = (typeID) => {
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
  };

  const handleTileClick = (tile, event) => {
    if (selectedTile === tile) {
      setSelectedTile(null);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    setPopupPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    });
    setSelectedTile(tile);
  };

  const handleClosePopup = () => {
    setSelectedTile(null);
  };

  const renderProperty = (label, value, condition = true) => {
    if (!condition) return null;
    return (
      <div className={styles.property}>
        <span className={styles.label}>{label}:</span>
        <span className={styles.value}>{value}</span>
      </div>
    );
  };

  const renderTileInfo = (tile) => {
    if (!tile) return null;

    return (
      <div className={styles.tileInfo}>
        <h3>Tile {tile.tile_number}</h3>
        <div className={styles.tileProperties}>
          {renderProperty('Landscape', tile.landscape)}
          {renderProperty('Citizens', tile.citizens, tile.citizens > 0)}
          {renderProperty('Vitality Add', tile.vitality_add, parseFloat(tile.vitality_add) !== 0)}
          {renderProperty('Civics Add', tile.civics_add, parseFloat(tile.civics_add) !== 0)}
          {renderProperty('Enlightenment Add', tile.enlightenment_add, parseFloat(tile.enlightenment_add) !== 0)}
          {renderProperty('Defense Add', tile.defense_add, parseFloat(tile.defense_add) !== 0)}
          {renderProperty('Industry Add', tile.industry_add, parseFloat(tile.industry_add) !== 0)}
          {renderProperty('Vitality Mult', tile.vitality_mult, parseFloat(tile.vitality_mult) !== 1)}
          {renderProperty('Civics Mult', tile.civics_mult, parseFloat(tile.civics_mult) !== 1)}
          {renderProperty('Enlightenment Mult', tile.enlightenment_mult, parseFloat(tile.enlightenment_mult) !== 1)}
          {renderProperty('Defense Mult', tile.defense_mult, parseFloat(tile.defense_mult) !== 1)}
          {renderProperty('Industry Mult', tile.industry_mult, parseFloat(tile.industry_mult) !== 1)}
          {renderProperty('Building', tile.building_id === 0 ? 'Empty' : `ID: ${tile.building_id}`)}
          {renderProperty('Building Level', tile.building_level, tile.building_id !== 0)}
          {renderProperty('Tile Buff', tile.tile_buff, tile.tile_buff !== 'None')}
        </div>
      </div>
    );
  };

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!landscapeGrid) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.gameboard} ref={gameboardRef}>
      <div className={styles.gridContainer}>
        {landscapeGrid.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.gridRow}>
            {row.map((tile, colIndex) => (
              <div 
                key={`${rowIndex}-${colIndex}`} 
                className={`${styles.gridCell} ${selectedTile === tile ? styles.selected : ''}`}
                style={{ 
                  backgroundImage: `url(${getTileImage(tile.type)})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                onClick={(e) => handleTileClick(tile, e)}
              >
                <span className={styles.tileNumber}>{tile.tile_number}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {selectedTile && (
        <TilePopup 
          tile={selectedTile}
          position={popupPosition}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default GameBoard;