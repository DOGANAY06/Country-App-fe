import React from 'react';

export default function Body({ countries, searchText }) {
  
  const [result, setResult] = React.useState(countries);
  console.log('bodyde result', result)
  React.useEffect( () => {
    
    if(searchText !== ''){
      const filteredCountries = countries.filter( item => item.name.toLowerCase().includes(searchText.toLowerCase()))
      setResult(filteredCountries)
    }
    // setResult()
  }, [searchText])

  return (
    <div className="grid-container">
    {
      result.length > 0 ? 
      result.map((item, index) => {
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
