// GridView.js

import React from 'react';


const GridView = ({ countries }) => {
  return (
    <div className="grid-container">
      {countries.map((country) => (
        <div className="grid-item" key={country.code}>
          <div className="grid-item-image">
            <img src={country.flag} alt={country.name} />
          </div>
          <div className="grid-item-text">
            <div>Country Code: {country.code}</div>
            <div>Country Name: {country.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridView;
