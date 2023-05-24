import { Icon } from "@iconify/react";
import { countBy, debounce } from "lodash";
import React, { useContext, useState } from "react";
import { AppContext } from "../context/appContext";

const Header = ({ setSearchText, searchText }) => {
  return (
    <div className="header">
      <div className="logo">
        <h1>COUNTRIES</h1>
      </div>
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Enter country name"
        />
      </div>
    </div>
  );
};

export const Alt_Header = ({
  sortOrder,
  setSortOrder,
  isGridView,
  setIsGridView,
  countries,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const {
    selectedCurrency,
    setSelectedCurrency,
    selectedPhone,
    setSelectedPhone,
    selectedContinent,
    setSelectedContinent,
  } = useContext(AppContext);

  const handleViewToggle = () => {
    setIsGridView(!isGridView);
  };

  const handleFilterToggle = () => {
    setShowFilters(!showFilters);
  };

  const handleCurrencyChange = (value) => {
    setSelectedCurrency(value);
  };

  const handlePhoneChange = (value) => {
    setSelectedPhone(value);
  };

  const handleContinentChange = (value) => {
    setSelectedContinent(value);
  };

  return (
    <div className="panel">
      <div className="icon-container">
        {isGridView ? (
          <Icon icon="dashicons:list-view" onClick={handleViewToggle} />
        ) : (
          <Icon icon="dashicons:grid-view" onClick={handleViewToggle} />
        )}
      </div>
      <div className="icon-container">
        <Icon
          icon="mdi:sort"
          style={{ cursor: "pointer" }}
          onClick={() => {
            const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
            setSortOrder(newSortOrder);
          }}
        />
        <h6 className="icon-text">Sort</h6>
      </div>
      <div className="icon-container">
        <Icon
          icon="material-symbols:filter-alt"
          onClick={handleFilterToggle}
        />
        <h6 className="icon-text">Filter</h6>
      </div>
      {showFilters && (
        <div className="dropdown">
          <select value={selectedCurrency} onChange={handleCurrencyChange}>
            <option value="">Tüm Para Birimleri</option>
            {Array.from(
              new Set(countries.map((country) => country.currency))
            ).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <select value={selectedPhone} onChange={handlePhoneChange}>
            <option value="">Tüm Telefon Kodları</option>
            {Array.from(new Set(countries.map((country) => country.phone))).map(
              (phoneCode) => (
                <option key={phoneCode} value={phoneCode}>
                  {phoneCode}
                </option>
              )
            )}
          </select>
          <select value={selectedContinent} onChange={handleContinentChange}>
            <option value="">Tüm Kıtalar</option>
            {Array.from(
              new Set(countries.map((country) => country.continent))
            ).map((continent) => (
              <option key={continent} value={continent}>
                {continent}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Header;
