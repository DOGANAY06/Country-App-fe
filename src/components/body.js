import React from 'react';
import { Link } from 'react-router-dom';

export default function Body({ countries, searchText, sortOrder,isGridView }) {
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
      <div className={isGridView ? 'grid-container' : 'list-container'}>
        {sortedCountries.length > 0 ? (
          sortedCountries.map((item, index) => (
            <Link to={`${index}`} key={index} className={isGridView ? 'grid-item' : 'list-item'}>
              {isGridView ? (
                <>
                  <img className="grid-item-image" src={item.flag} alt="{country.name}" />
                  <div className="grid-item">Country Code: {item.countryCode}</div>
                  <div className="grid-item">Phone Code: {item.phone}</div>
                  <div className="grid-item">Country Name: {item.name}</div>
                </>
              ) : (
                <div>
                  <img className="list-item-image" src={item.flag} alt="{country.name}" />
                  <div className="list-item-details">
                    <div>Country Code: {item.countryCode}</div>
                    <div>Phone Code: {item.phone}</div>
                    <div>Country Name: {item.name}</div>
                  </div>
                </div>
              )}
            </Link>
          ))
        ) : (
          <h1>Eşleşen Sonuç Yok</h1>
        )}
      </div>
    );
}
