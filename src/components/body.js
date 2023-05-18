import React from 'react';

export default function Body({ countries }) {
  
  return (
    <div className="grid-container">
    {Object.keys(countries).map((countryCode) => {
      const country = countries[countryCode];
      return (
        <div className="grid-item" key={countryCode}>
          <img className="grid-item-image" src={country.flag} alt="{country.name}" />
          <div className="grid-item">Country Code:{country.countryCode}</div>
          <div className="grid-item">Country Name:{country.name}</div>
        </div>
        );
      })}
    </div>
  );
}
