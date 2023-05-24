import "./App.css";
import React, { useEffect, useState } from "react";
import Body from "./components/body";
import Header, { Alt_Header } from "./components/header";
import { getAllCountriesApi } from "./services/services";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Countrydetail from "./components/countrydetail";
import { AppProvider } from "./context/appContext";



function App() {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState('asc');

 const [filteredCountries, setFilteredCountries] = useState(countries); // State to store the filtered countries
 
   //filter işlemi için kısım 
   const [selectedCurrency, setSelectedCurrency] = useState('');
   const [selectedPhone, setSelectedPhone] = useState('');
   const [selectedContinent, setSelectedContinent] = useState('');

  const [loading, setLoading] = useState(false);

  const [isGridView, setIsGridView] = useState(true);  //grid view mi yoksa listview mi onu anlıyoruz

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
    <AppProvider>
    <div className="App">
      <Header setSearchText={setSearchText} searchText={searchText} />
      <Alt_Header sortOrder={sortOrder} setSortOrder={setSortOrder} 
      isGridView={isGridView} setIsGridView={setIsGridView} 
      countries={countries} selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency}
      selectedPhone={selectedPhone} setSelectedPhone={setSelectedPhone} selectedContinent={selectedContinent}
      setSelectedContinent={setSelectedContinent} filteredCountries={filteredCountries} setFilteredCountries={setFilteredCountries}
      />
     {loading ? (
          <Routes>
          <Route path="/" element={<Body 
          countries={countries} selectedCurrency={selectedCurrency}
          selectedPhone={selectedPhone}
          selectedContinent={selectedContinent} 
          isGridView={isGridView} searchText={searchText} 
          sortOrder={sortOrder} />} />
          <Route path="country/:countryCode" element={<Countrydetail 
          countries={countries}/>} />
        </Routes>
        ) : (
        <div>Yükleniyor</div>
        )}
    </div>
    </AppProvider>
    </BrowserRouter>
  
  );
}
export default App;