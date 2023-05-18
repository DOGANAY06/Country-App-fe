// ListView.js

import React from 'react';



const ListView = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>
          <div>Country Code: {country.code}</div>
          <div>Country Name: {country.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ListView;
