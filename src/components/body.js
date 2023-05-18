import React from 'react';

export default function Body({ countries, searchText }) {
  return (
    <div className="grid-container">
    {
      countries.filter( item => item.name.toLowerCase().includes(searchText.toLowerCase())).length > 0 ? 
      countries.filter( item => item.name.toLowerCase().includes(searchText.toLowerCase())).map((item, index) => {
        return (
          <div className="grid-item" key={index}>
            <img className="grid-item-image" src={item.flag} alt="{country.name}" />
            <div className="grid-item">Country Code:{item.countryCode}</div>
            <div className="grid-item">Country Name:{item.name}</div>
          </div>
          );
      })
      :
      <h1>Eşleşen Sonuç Yok</h1>
    }
    </div>
  );
}
