import React from 'react';
import './Stats.css';
import vitalityIcon from '../../assets/stats/vitality.png';
import industryIcon from '../../assets/stats/industry.png';
import enlightenmentIcon from '../../assets/stats/enlightenment.png';
import defenseIcon from '../../assets/stats/defense.png';
import civicsIcon from '../../assets/stats/civics.png';
import civiliansIcon from '../../assets/stats/civilians.png';
import divinityIcon from '../../assets/stats/divinity.png';

const Stats = ({ gameState }) => {
  // Default values if gameState is not provided
  const stats = {
    civilians: gameState?.civilians || 5,
    divinity: gameState?.divinity || 10,
    vitality: gameState?.vitality || 50,
    industry: gameState?.industry || 50,
    enlightenment: gameState?.enlightenment || 50,
    defense: gameState?.defense || 50,
    civics: gameState?.civics || 50
  };

  // Find the maximum value among the stats (excluding civilians and divinity)
  const maxStat = Math.max(
    stats.vitality,
    stats.industry,
    stats.enlightenment,
    stats.defense,
    stats.civics
  );

  return (
    <div className="stats-container">
      <div className="stats-header">
        <div className="stat-display">
          <img src={civiliansIcon} alt="Civilians" className="stat-icon" />
          <span className="stat-value">{stats.civilians}</span>
        </div>
        <div className="stat-display">
          <img src={divinityIcon} alt="Divinity" className="stat-icon" />
          <span className="stat-value">{stats.divinity}</span>
        </div>
      </div>
      
      <div className="stats-bars">
        <div className="stat-bar-container">
          <img src={vitalityIcon} alt="Vitality" className="stat-icon" />
          <div className="stat-bar">
            <div 
              className="stat-bar-fill vitality"
              style={{ width: `${(stats.vitality / maxStat) * 100}%` }}
            />
          </div>
          <span className="stat-value">{stats.vitality}</span>
        </div>

        <div className="stat-bar-container">
          <img src={industryIcon} alt="Industry" className="stat-icon" />
          <div className="stat-bar">
            <div 
              className="stat-bar-fill industry"
              style={{ width: `${(stats.industry / maxStat) * 100}%` }}
            />
          </div>
          <span className="stat-value">{stats.industry}</span>
        </div>

        <div className="stat-bar-container">
          <img src={enlightenmentIcon} alt="Enlightenment" className="stat-icon" />
          <div className="stat-bar">
            <div 
              className="stat-bar-fill enlightenment"
              style={{ width: `${(stats.enlightenment / maxStat) * 100}%` }}
            />
          </div>
          <span className="stat-value">{stats.enlightenment}</span>
        </div>

        <div className="stat-bar-container">
          <img src={defenseIcon} alt="Defense" className="stat-icon" />
          <div className="stat-bar">
            <div 
              className="stat-bar-fill defense"
              style={{ width: `${(stats.defense / maxStat) * 100}%` }}
            />
          </div>
          <span className="stat-value">{stats.defense}</span>
        </div>

        <div className="stat-bar-container">
          <img src={civicsIcon} alt="Civics" className="stat-icon" />
          <div className="stat-bar">
            <div 
              className="stat-bar-fill civics"
              style={{ width: `${(stats.civics / maxStat) * 100}%` }}
            />
          </div>
          <span className="stat-value">{stats.civics}</span>
        </div>
      </div>
    </div>
  );
};

export default Stats; 