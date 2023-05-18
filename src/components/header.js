import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { debounce } from "lodash";

const Header = ({ setSearchText, searchText }) => {
  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  const handleSearchTextChange = debounce((value) => {
    setSearchText(value);
  }, 500); // Debounce delay (e.g., 500 milliseconds)

  return (
    <div className="header">
      <div className="logo">
        <h1>COUNTRIES</h1>
      </div>
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => handleSearchTextChange(e.target.value)}
          placeholder="Enter country name"
        />
      </div>
    </div>
  );
};

export const Alt_Header = () => {
  return (
    <div className="panel">
      <Icon icon="material-symbols:grid-view" />
      <Icon icon="mdi:sort" style={{ marginLeft: "500px" }} />
      <h6 style={{ marginRight: "50px" }}>Sort</h6>
      <Icon icon="material-symbols:filter-alt" />
      <h6 style={{ marginRight: "50px" }}>Filter</h6>
    </div>
  );
};

export default Header;
