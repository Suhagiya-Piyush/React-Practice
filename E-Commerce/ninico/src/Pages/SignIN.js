import React from 'react'
import { HeaderTop } from '../Components/HeaderTop/HeaderTop'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import { SignIn } from '../Components/SignIn/SignIn'


export const SignIN = () => {
  return (
    <div>
        <HeaderTop/>
        <Header/>
        <SignIn/>
        <Footer/>
    </div>
  )
}
