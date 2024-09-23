import React from 'react'
import { useParams } from 'react-router-dom'

const CoinDetailsPage = () => {

  const {coinId} = useParams();

  return (
    <div>
      coin details page {coinId}
    </div>
  )
}

export default CoinDetailsPage
