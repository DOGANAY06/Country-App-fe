import React from 'react';

export default function Body({ countries, searchText ,sortOrder  }) {
  const sortedCountries = countries
    .filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()))
    .sort((a, b) => {
      const phoneA = parseInt(a.phone);
      const phoneB = parseInt(b.phone);

      if (sortOrder === 'asc') {
        return phoneA - phoneB;
      } else {
        return phoneB - phoneA;
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
              <div className="grid-item">Phone Code: {item.phone}</div>
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
