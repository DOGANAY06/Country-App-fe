import "./App.css";
import React, { useEffect, useState } from "react";
import Body from "./components/body";
import Header, { Alt_Header } from "./components/header";
import { getAllCountriesApi } from "./services/services";
import axios from "axios";


function App() {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState('asc');

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
    //proje açıldığında dönecek kısım
    <div className="App">
      <Header setSearchText={setSearchText} searchText={searchText} />
      <Alt_Header sortOrder={sortOrder} setSortOrder={setSortOrder} 
      isGridView={isGridView} setIsGridView={setIsGridView}  />
      {loading ? <Body countries={countries} isGridView={isGridView} searchText={searchText} sortOrder={sortOrder}/> :
       <div>Yükleniyor</div>}
    </div>
  );
}
export default App;