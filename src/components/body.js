import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { PaginationContext } from "../context/PaginationContext";


export default function Body({
  countries,
  searchText,
  sortOrder,
  isGridView,
  selectedCurrency,
  selectedPhone,
  selectedContinent,
}) {
  const selectedPhoneInt = parseInt(selectedPhone); //seçtiğimiz phone bilgisi veritabanında integer olarak kayıtlı
  //bu yüzden bizde integer çevirdik 

   const { currentPage, totalPages, nextPage, prevPage } = useContext(PaginationContext);
  //sayfa değiştirme pagination işlemleriyle alakalı kısım 

  const filteredCountries = countries.filter((item) => {
    //FİLTRELEME İŞLEMLERİ 5 AYRI KISIMDAN OLUŞUYOR 
    //1,2-) Ülke adı ve ülke koduna göre arama bu search text üzerinden yapılıyor
    //3,4,5-)Ülke para birimi, ülke kıtası, ülke telefon koduna göre yapılıyor 
    const includesSearchText =
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.countryCode.toLowerCase().includes(searchText.toLowerCase());
      
      //3,4,5 filtreleme özellikleri eşleşiyor mu ? 
    const matchesCurrency = selectedCurrency && item.currency === selectedCurrency;
 
    const matchesPhone = selectedPhoneInt && item.phone === selectedPhoneInt;

    const matchesContinent = selectedContinent && item.continent === selectedContinent;

      //burada ki seçili bilgiler eşleşiyorsa true dönecek 

    return (
      includesSearchText &&
      (selectedCurrency ? matchesCurrency : true) &&
      (selectedPhoneInt ? matchesPhone : true) &&
      (selectedContinent ? matchesContinent : true)
    );
  });
  //Burada herhangi bir filtreleme işlemi uygulanmıssa anlamına gelir

  const sortedCountries = filteredCountries.sort((a, b) => {
    const phoneA = parseInt(a.phone);
    const phoneB = parseInt(b.phone);

    if (sortOrder === "asc") {
      return phoneA - phoneB;
    } else {
      return phoneB - phoneA;
    }
  });

 

  return (
    <div className={isGridView ? "grid-container" : "list-container"}>
      {sortedCountries.length > 0 ? (
        sortedCountries.map((item, index) => (
          <Link
            to={`country/${item.countryCode}`}
            key={index}
            className={isGridView ? "grid-item" : "list-item"}
          >
            {isGridView ? (
              <>
                <img
                  className="grid-item-image"
                  src={item.flag}
                  alt="{country.name}"
                />
                <div className="grid-item">Country Code: {item.countryCode}</div>
                <div className="grid-item">Phone Code: {item.phone}</div>
                <div className="grid-item">Country Name: {item.name}</div>
              </>
            ) : (
              <div>
                <img
                  className="list-item-image"
                  src={item.flag}
                  alt="{country.name}"
                />
                <div className="list-item-details">
                  <div>Country Code: {item.countryCode}</div>
                  <div>Phone Code: {item.phone}</div>
                  <div>Country Name: {item.name}</div>
                </div>
              </div>
            )}
          </Link>
        ))
      ) : (
        <h1>Eşleşen Sonuç Yok</h1>
      )}
       {/* Pagination kontrollerini burada yapıyorum */}
       <div>
        <button disabled={currentPage === 1} onClick={() => prevPage()}>
          Önceki Sayfa
        </button>
        <span>
          Sayfa {currentPage} / {totalPages}
        </span>
        <button disabled={currentPage === totalPages} onClick={() => nextPage()}>
          Sonraki Sayfa
        </button>
      </div>
    </div>
  );
}
