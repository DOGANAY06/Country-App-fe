import axios from 'axios';

const getAllCountriesApi =async()=>{

   let response = null 
   await axios.get("http://localhost:8080/countries/all")
   .then(res=>{response = res.data})
   .catch(e=>console.log(e))
   return response
}

const deleteCountryApi = async (countryCode) => {
    try {
      const response = await axios.delete(`http://localhost:8080/countries/countrycode/${countryCode}`);
      return response.data;
    } catch (error) {
      console.log('Silme işlemi başarısız:', error);
      throw new Error('Silme işlemi başarısız');
    }
  };

export {
    getAllCountriesApi, deleteCountryApi
}
