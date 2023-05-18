import "./App.css";
import React, { useEffect, useState } from "react";
import Body from "./components/body";
import Header, { Alt_Header } from "./components/header";
import { getAllCountriesApi } from "./services/services";
import axios from "axios";




function App() {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [loading, setLoading] = useState(false);

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
    //proje açıldığında dönecek kısım
    <div className="App">
      <Header setSearchText={setSearchText} searchText={searchText} />
      <Alt_Header />
      {loading ? <Body countries={countries}  searchText={searchText}/> : <div>Yükleniyor</div>}
    </div>
  );
}

export default App;
