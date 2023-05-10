import { Icon } from "@iconify/react";
import React from 'react'
  
 const Header=()=> {
    return (
        <div className='header'>
        <div className='logo'>
            <h1>COUNTRIES</h1>
        </div>
        <div className="search">
            <input type="text" placeholder="Search..."/>
        </div>
    </div>
    )
  }


  export const Alt_Header = () => {
    return (
      <div className="panel">
        <Icon icon="material-symbols:grid-view" />
        <Icon icon="mdi:sort" style={{marginLeft: "500px"}} />
        <h6>Sort</h6>
        <Icon icon="material-symbols:filter-alt" />
        <h6>Filter</h6>
      </div>
    );
  };
  

export default Header;


  



