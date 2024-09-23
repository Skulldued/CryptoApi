import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import CoinDetailsPage from "../pages/CoinDetailsPage"
import Layout from '../pages/Layout'
const Routing = () => {
  return (
    <>
      <Routes>
       <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />  {/* index means this is the main page when the website is render */}
        <Route path='/details/:coinId' element={<CoinDetailsPage/>} />
       </Route>
      </Routes>
    </>
  )
}

export default Routing
