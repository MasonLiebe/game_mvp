import React from 'react';
import { buildings } from '../../data/buildings/building_data';
import './Store.css';

const Store = () => {
  // For now, we'll use huts (id: 1) for all slots
  const buildingSlots = [1, 1, 1];

  const handleDragStart = (e, buildingId) => {
    e.dataTransfer.setData('buildingId', buildingId);
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="store">
      <h2>Store</h2>
      <div className="store-slots">
        {buildingSlots.map((buildingId, index) => {
          const building = buildings.find(b => b.id === buildingId);
          return (
            <div 
              key={index} 
              className="store-slot"
              draggable
              onDragStart={(e) => handleDragStart(e, buildingId)}
            >
              <img 
                src={`/src/assets/buildings/${building.sprite_file}`}
                alt={building.name}
                className="building-sprite"
                draggable={false}
              />
              <div className="building-info">
                <h3>{building.name}</h3>
                <p>Cost: {building.base_cost} divinity</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Store; 