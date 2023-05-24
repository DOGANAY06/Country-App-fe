import { Link,Outlet } from 'react-router-dom';
import React, { useContext} from "react";

export default function Body({ countries, searchText, sortOrder,isGridView,selectedCurrency,
  selectedPhone,selectedContinent
}) {
 
  const sortedCountries = countries
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.countryCode.toLowerCase().includes(searchText.toLowerCase()) 
        //selectedCurrency ? item.currency === selectedCurrency : true ||
        //selectedPhone ? item.phone === selectedPhone : true ||
        //selectedContinent ? item.continent === selectedContinent : true
        
    )
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
        {sortedCountries.length > 0 || countries ?  (
          sortedCountries.map((item, index) => ( // Dizideki her bir öğe için bir döngü oluşturulur
            <Link to={`country/${item.countryCode}`} key={index} className={isGridView ? 'grid-item' : 'list-item'}>
              {isGridView ? ( // Eğer görünüm ızgara ise
                <>
                  <img className="grid-item-image" src={item.flag} alt="{country.name}" />
                  <div className="grid-item">Country Code: {item.countryCode}</div>
                  <div className="grid-item">Phone Code: {item.phone}</div>
                  <div className="grid-item">Country Name: {item.name}</div>
                </>
              ) : ( // Eğer görünüm liste ise
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
        ) : ( // Eşleşen ülke yoksa
          <h1>Eşleşen Sonuç Yok</h1>
        )}
      </div>
    );
}