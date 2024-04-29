import React from 'react';
import { HeaderTop } from '../HeaderTop/HeaderTop';
import { Header } from '../Header/Header';
import { Slider } from '../Slider/Slider';
import { TopCategory } from '../TopCategories/TopCategory';
import { Product } from '../Product/Product';
import { Abstract } from '../Abstract/Abstract';
import { NinicoShop } from '../Ninico-shop/NinicoShop';
import { Footer } from '../Footer/Footer';

export const Home = () => {
  return (
    <div>
        <HeaderTop/>
        <Header/>
        <Slider/>
        <TopCategory/>
        <Product/>
        <Abstract/>
        <NinicoShop/>
        <Footer/>
    </div>
  )
}
