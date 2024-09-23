import React from 'react'
import { useParams } from 'react-router-dom'

const CoinDetailsPage = () => {

  const {coinId} = useParams();

  //TODO , MAKE THE API CALL AND FETCH COIN DATA

  return (
    <div>
      coin details page {coinId}
    </div>
  )
}

export default CoinDetailsPage
