import React, { createContext, useState } from "react";

// İlk değerleri burada tanımladım
const defaultCurrency = "";
const defaultPhone = "";
const defaultContinent = "";

// Context'i oluşturdum
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Durumları tanımladım 
  const [selectedCurrency, setSelectedCurrency] = useState(defaultCurrency);
  const [selectedPhone, setSelectedPhone] = useState(defaultPhone);
  const [selectedContinent, setSelectedContinent] = useState(defaultContinent);

  

  // Context değerlerini paketledim kullanmak için
  const contextValues = {
    selectedCurrency,
    setSelectedCurrency,
    selectedPhone,
    setSelectedPhone,
    selectedContinent,
    setSelectedContinent,
  };

  // Çocuk bileşenlere context değerlerini aktardım
  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};
