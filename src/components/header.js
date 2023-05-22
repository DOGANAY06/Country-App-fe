import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { debounce } from "lodash";

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

export const Alt_Header = ({ sortOrder, setSortOrder, isGridView, setIsGridView }) => {
  const handleViewToggle = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div className="panel">
       {isGridView ? (
        <Icon icon="dashicons:list-view" onClick={handleViewToggle} />
      ) : (
        <Icon icon="dashicons:grid-view" onClick={handleViewToggle} />
      )}
      <Icon
          icon="mdi:sort"
          style={{ marginLeft: "500px", cursor: "pointer" }}
          onClick={() => {
            // Toggle the sort order
            const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
            setSortOrder(newSortOrder);
          }}
        />
      <h6 style={{ marginRight: "50px" }}>Sort</h6>
      <Icon icon="material-symbols:filter-alt" />
      <h6 style={{ marginRight: "50px" }}>Filter</h6>
    </div>
  );
};

export default Header;