import React from 'react'
import { HeaderTop } from '../Components/HeaderTop/HeaderTop'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import { Wishlist } from '../Components/Wishlist/Wishlist'

export const WishlistPage = () => {
  return (
    <div>
        <HeaderTop/>
        <Header/>
        <Wishlist/>
        <Footer/>
    </div>
  )
}
