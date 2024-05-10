import React from 'react'
import { Header } from '../Components/Header/Header'
import { HeaderTop } from '../Components/HeaderTop/HeaderTop'
import { Footer } from '../Components/Footer/Footer'
import { PageHeading } from '../Components/PageHeading/PageHeading'
import { Product } from '../Components/Product/Product'

export const Shop = () => {
  return (
    <>
    <HeaderTop/>
    <Header/>
    <PageHeading goBacklink="Home" pageTitle="Shop" />
    <Product/>
    <Footer/>
    </>
  )
}
