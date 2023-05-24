import "./App.css";
import React, { useEffect, useState } from "react";
import Body from "./components/body";
import Header, { Alt_Header } from "./components/header";
import { getAllCountriesApi } from "./services/services";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Countrydetail from "./components/countrydetail";


function App() {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState('asc');

  //filter işlemi için kısım 
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [selectedPhone, setSelectedPhone] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('');

  const handleSelect = (selectedValue) => {
    setSelectedCurrency(selectedCurrency);
    setSelectedPhone(selectedPhone);
    setSelectedContinent(selectedContinent);

  };

  const filteredCountries = countries.filter((item) => {
    const currencyMatch = selectedCurrency === '' || item.currency === selectedCurrency;
    const phoneMatch = selectedPhone === '' || item.phone === selectedPhone;
    const continentMatch = selectedContinent === '' || item.continent === selectedContinent;

    return currencyMatch || phoneMatch || continentMatch;
  });

  const [loading, setLoading] = useState(false);

  const [isGridView, setIsGridView] = useState(false);  //grid view mi yoksa listview mi onu anlıyoruz

  const getAllCountries = async () => {
    const response = await getAllCountriesApi();
    setCountries(response);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  useEffect(() => {
    countries.length > 0 && setLoading(true);
  }, [countries]);

  return (
    <BrowserRouter>
    <div className="App">
      <Header setSearchText={setSearchText} searchText={searchText} />
      <Alt_Header sortOrder={sortOrder} setSortOrder={setSortOrder} 
      isGridView={isGridView} setIsGridView={setIsGridView} 
      countries={countries} selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency}
      selectedPhone={selectedPhone} setSelectedPhone={setSelectedPhone} selectedContinent={selectedContinent}
      setSelectedContinent={setSelectedContinent} onSelect={handleSelect}
      />
     {loading ? (
          <Routes>
          <Route path="/" element={<Body countries={countries} 
          isGridView={isGridView} searchText={searchText} sortOrder={sortOrder}
          selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency}
      selectedPhone={selectedPhone} setSelectedPhone={setSelectedPhone} selectedContinent={selectedContinent}
      setSelectedContinent={setSelectedContinent} filteredCountries={filteredCountries} />} />
          <Route path="country/:countryCode" element={<Countrydetail countries={countries}/>} />
        </Routes>
        ) : (
        <div>Yükleniyor</div>
        )}
    </div>
    </BrowserRouter>
  
  );
}
export default App;