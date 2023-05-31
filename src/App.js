import "./App.css";
import React, { useEffect, useState } from "react";
import Body from "./components/body";
import Header, { Alt_Header } from "./components/header";
//import { getAllCountriesApi } from "./services/services";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Countrydetail from "./components/countrydetail";
import PaginationProvider, { PaginationContext } from "./context/PaginationContext";
import { useContext } from "react";
import { getAllCountriesApi } from "./services/services";



function App() {
  const [countries, setCountries] = useState([]); //ülkeleri apidan getiriyor
  const [searchText, setSearchText] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');


  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  const [filteredCountries, setFilteredCountries] = useState([]);


  //filter işlemi için kısım 
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [selectedPhone, setSelectedPhone] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('');

  const [loading, setLoading] = useState(false);

  const [isGridView, setIsGridView] = useState(true);  //grid view mi yoksa listview mi onu anlıyoruz


  const getAllCountries = async () => { //asenkron olarak apidan tüm ülkelerin gelme işlevi
    const response = await getAllCountriesApi();
    setCountries(response);
  };

  

  useEffect(() => {
    getAllCountries();
  }, []);

  useEffect(() => { //ülkeler geldi mi yani uzunluğu 0 dan büyük olmalı geldiyse gelmediyse yükleniyor yazıcak
    countries.length > 0 && setLoading(true);
  }, [countries]);

  return (
    <BrowserRouter>
    <PaginationProvider>
    <div className="App">
      <Header setSearchText={setSearchText} searchText={searchText} />
      <Alt_Header sortOrder={sortOrder} setSortOrder={setSortOrder} 
      isGridView={isGridView} setIsGridView={setIsGridView} 
      //countries={countries} 
      selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency}
      selectedPhone={selectedPhone} setSelectedPhone={setSelectedPhone} selectedContinent={selectedContinent}
      setSelectedContinent={setSelectedContinent} filteredCountries={filteredCountries} setFilteredCountries={setFilteredCountries}
      />
     {loading ? (
          <Routes>
          <Route path="/" element={<Body 
          countries={countries} 
          selectedCurrency={selectedCurrency}
          selectedPhone={selectedPhone}
          selectedContinent={selectedContinent} 
          isGridView={isGridView} searchText={searchText} 
          sortOrder={sortOrder} />} />
          <Route path="country/:countryCode" element={<Countrydetail 
          //countries={countries}
          />} />
        </Routes>
        ) : (
        <div>Yükleniyor</div>
        )}
    </div>
    </PaginationProvider>
    </BrowserRouter>
  
  );
}
export default App;