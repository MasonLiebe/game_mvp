import React from 'react';
import styles from './GameBoard.module.css';

const TilePopup = ({ tile, position, onClose, isHovered }) => {
  if (!tile) return null;

  const renderProperty = (label, value, condition = true) => {
    if (!condition) return null;
    return (
      <div className={styles.property}>
        <span className={styles.label}>{label}:</span>
        <span className={styles.value}>{value}</span>
      </div>
    );
  };

  return (
    <div 
      className={`${styles.tilePopup} ${isHovered ? styles.hovered : ''}`}
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translateY(-50%)'
      }}
    >
      {!isHovered && <button className={styles.closeButton} onClick={onClose}>×</button>}
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
    </div>
  );
};

export default TilePopup; 