import React from 'react';

export default function Body({ countries, searchText ,sortOrder  }) {
  const sortedCountries = countries
    .filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder=== 'asc') {
        console.log(sortOrder);
        return a.countryCode.localeCompare(b.countryCode);
      } else {
        console.log(sortOrder);
        return b.countryCode.localeCompare(a.countryCode);
      }
    });

  return (
    <div className="grid-container">
      {sortedCountries.length > 0 ? (
        sortedCountries.map((item, index) => {
          return (
            
            <div className="grid-item" key={index}>
              <img className="grid-item-image" src={item.flag} alt="{country.name}" />
              <div className="grid-item">Country Code: {item.countryCode}</div>
              <div className="grid-item">Country Name: {item.name}</div>
            </div>
          );
        })
      ) : (
        <h1>Eşleşen Sonuç Yok</h1>
      )}
    </div>
  );
}
