import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './view/countrytable.css';

export default function Countrydetail({ countries }) {
  console.log(countries.countryCode);
  const { countryCode } = useParams();
  const filteredCountries = countries.filter((country) =>country.countryCode === countryCode);
  const country = filteredCountries.length > 0 ? filteredCountries[0] : null
  console.log(country);

  if (!country) {
    return <div>Country bulunamadı</div>;
  }

  return (
    <table className="country-table">
      <thead>
        <tr>
          <th>Flag</th>
          <th>Name</th>
          <th>Native Name</th>
          <th>Phone</th>
          <th>Continent</th>
          <th>Capital</th>
          <th>Currency</th>
          <th>Languages</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={country.flag} alt={country.name} />
          </td>
          <td>{country.name}</td>
          <td>{country.nativeName}</td>
          <td>{country.phone}</td>
          <td>{country.continent}</td>
          <td>{country.capital}</td>
          <td>{country.currency}</td>
          <td>{country.languages.join(', ')}</td>
        </tr>
      </tbody>
    </table>
  );
}
