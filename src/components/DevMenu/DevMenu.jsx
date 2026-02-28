import React, { useState } from "react";
import "./DevMenu.css";

const DevMenu = ({ setSeasonOverride }) => {
  const [isOpen, setIsOpen] = useState(false);

  const seasons = [
    { id: "spring", label: "Spring 🌸", icon: "🌸" },
    { id: "summer", label: "Summer ☀️", icon: "☀️" },
    { id: "fall", label: "Fall 🍂", icon: "🍂" },
    { id: "winter", label: "Winter ❄️", icon: "❄️" },
    { id: null, label: "Auto (Sync)", icon: "🔄" },
  ];

  return (
    <div className={`dev-menu ${isOpen ? "dev-menu--open" : ""}`}>
      <button 
        className="dev-menu__toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Dev Menu"
      >
        🛠️
      </button>
      
      <div className="dev-menu__content">
        <h4 className="dev-menu__title">Season Controls</h4>
        <div className="dev-menu__grid">
          {seasons.map((season) => (
            <button
              key={season.id}
              className={`dev-menu__btn ${season.id === null ? "dev-menu__btn--reset" : ""}`}
              onClick={() => setSeasonOverride(season.id)}
            >
              <span className="dev-menu__btn-icon">{season.icon}</span>
              <span className="dev-menu__btn-label">{season.label.split(" ")[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevMenu;
