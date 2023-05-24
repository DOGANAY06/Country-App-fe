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

  // Durumları güncellemek için fonksiyonları tanımladım
  const handleCurrencyChange = (value) => {
    setSelectedCurrency(value);
  };

  const handlePhoneChange = (value) => {
    setSelectedPhone(value);
  };

  const handleContinentChange = (value) => {
    setSelectedContinent(value);
  };

  // Context değerlerini paketledim kullanmak için
  const contextValues = {
    selectedCurrency,
    handleCurrencyChange,
    selectedPhone,
    handlePhoneChange,
    selectedContinent,
    handleContinentChange,
  };

  // Çocuk bileşenlere context değerlerini aktardım
  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};
