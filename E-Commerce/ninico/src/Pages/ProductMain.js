import React from 'react'
import { HeaderTop } from '../Components/HeaderTop/HeaderTop'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import { Pro_Details } from '../Components/ProductDetail/Product_Details'

export const ProductMain = () => {
  return (
    <div>
        <HeaderTop/>
        <Header/>
        <Pro_Details/>
        <Footer/>
    </div>
  )
}
