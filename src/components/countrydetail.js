import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './view/countrytable.css';
import { deleteCountryApi } from "../services/services.js";

export default function Countrydetail({ countries }) {
  console.log(countries.countryCode);
  const { countryCode } = useParams();
  const navigate = useNavigate();
  const filteredCountries = countries.filter((country) => country.countryCode === countryCode);
  const country = filteredCountries.length > 0 ? filteredCountries[0] : null
  console.log(country);

  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    try {
      await  deleteCountryApi(country.countryCode);
      navigate('/'); // Silme işlemi tamamlandıktan sonra anasayfaya yönlendirme
    } 
   catch (error) {
      console.log('Silme işlemi başarısız:', error);
      // Hata durumunda gerekli işlemler yapılabilir
    }
  };

  const handleConfirmDelete = () => {
    setShowModal(false);
    handleDelete();
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  if (!country) {
    return <div>Country bulunamadı</div>;
  }

  return (
    <div>
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
      <button onClick={() => setShowModal(true)}>Sil</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Ülke Silme Onayı</h3>
            <p>Ülkeyi silmek istediğinizden emin misiniz?</p>
            <div className="modal-buttons">
              <button onClick={handleConfirmDelete}>Evet</button>
              <button onClick={handleCancelDelete}>Hayır</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
