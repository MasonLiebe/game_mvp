import React, { useEffect, useState, useRef } from 'react';
import grassTile from '../../assets/tiles/grass.jpg';
import lakeTile from '../../assets/tiles/lake.jpg';
import mountainTile from '../../assets/tiles/mountain.jpg';
import swampTile from '../../assets/tiles/swamp.jpg';
import { generateLandscape } from '../../utils/landscapeGenerator';
import { buildings } from '../../data/buildings/building_data';
import styles from './GameBoard.module.css';
import TilePopup from './TilePopup';

const GRID_SIZE = 7;
const HOVER_DELAY = 200; // 2 seconds

const GameBoard = () => {
  const [landscapeGrid, setLandscapeGrid] = useState(null);
  const [selectedTile, setSelectedTile] = useState(null);
  const [hoveredTile, setHoveredTile] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [error, setError] = useState(null);
  const gameboardRef = useRef(null);
  const hoverTimerRef = useRef(null);

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

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, tile) => {
    e.preventDefault();
    const buildingId = parseInt(e.dataTransfer.getData('buildingId'));
    
    // Update the landscape grid with the new building
    setLandscapeGrid(prevGrid => {
      const newGrid = prevGrid.map(row => 
        row.map(t => {
          if (t === tile) {
            return {
              ...t,
              building_id: buildingId,
              building_level: 1
            };
          }
          return t;
        })
      );
      return newGrid;
    });
  };

  const updatePopupPosition = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPopupPosition({
      x: rect.right + 20,
      y: rect.top + rect.height / 2
    });
  };

  const handleTileClick = (tile, event) => {
    updatePopupPosition(event);

    // Set a new timer for hover delay
    hoverTimerRef.current = setTimeout(() => {
      if (!selectedTile) { // Only show hover popup if no tile is selected
        setHoveredTile(tile);
      }
    }, HOVER_DELAY);
  };

  const handleTileHover = (tile, event) => {
    updatePopupPosition(event);
    
    // Clear any existing timer
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }

    // Set a new timer for hover delay
    hoverTimerRef.current = setTimeout(() => {
      if (!selectedTile) { // Only show hover popup if no tile is selected
        setHoveredTile(tile);
      }
    }, HOVER_DELAY);
  };

  const handleTileLeave = () => {
    // Clear the hover timer
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    
    // Only clear hovered tile if no tile is selected
    if (!selectedTile) {
      setHoveredTile(null);
    }
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
                onMouseEnter={(e) => handleTileHover(tile, e)}
                onMouseLeave={handleTileLeave}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, tile)}
              >
                {/* <span className={styles.tileNumber}>{tile.tile_number}</span> */}
                {tile.building_id !== 0 && (
                  <img 
                    src={`/src/assets/buildings/${buildings.find(b => b.id === tile.building_id).sprite_file}`}
                    alt="Building"
                    className={styles.buildingSprite}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {(selectedTile || hoveredTile) && (
        <TilePopup 
          tile={selectedTile || hoveredTile}
          position={popupPosition}
          onClose={handleClosePopup}
          isHovered={!!hoveredTile}
        />
      )}
    </div>
  );
};

export default GameBoard;