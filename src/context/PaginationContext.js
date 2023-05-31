

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PaginationContext = createContext();

const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1); //mevcut sayfa numarası
  const [totalPages, setTotalPages] = useState(0);   //toplam sayfa numarası
  const [pageSize, setPageSize] = useState(20); // Sayfa başına ürün sayısı
  const [countries, setCountries] = useState([]);  //ülkeleri içeren dizi 

  useEffect(() => {
    fetchData();
  }, [currentPage, pageSize]);

  const fetchData = async () => { //api istek atıyoruz 
    try {
      const response = await axios.get(`countries/all?page=${currentPage}&size=${pageSize}`);
      setCountries(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        totalPages,
        pageSize,
        countries,
        goToPage,
        nextPage,
        prevPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
