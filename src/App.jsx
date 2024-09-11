import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import CoinTable from './components/coinTable/CoinTable'

const App = () => {
  const [currency, setCurrency] = useState("usd");
  return (
    <>
      <Navbar setCurrency={setCurrency}  />
      <Banner/>
      <CoinTable currency={currency} />
      
    </>
  )
}

export default App
