import React from 'react'
import BannerImage from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <>
      <div className='w-full h-full relative'>
       <img src={BannerImage} className='min-w-full' alt="@dued" />
      </div>
    </>
  )
}

export default Banner
