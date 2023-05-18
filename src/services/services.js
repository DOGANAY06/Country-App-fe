import axios from 'axios';

const getAllCountriesApi =async()=>{

   let response = null 
   await axios.get("http://localhost:8080/countries/all")
   .then(res=>{response = res.data})
   .catch(e=>console.log(e))
   return response
}

export {
    getAllCountriesApi
}
