import React from 'react'
import { useParams } from 'react-router-dom'

export default function Countrydetail() {
    // const params = useParams();
    // const countryId = params.id;

    const {id} = useParams();
  return (
    <div>
        <h1>Hoşgeldiniz sayfaya {id}</h1>
    </div>
  )
}
