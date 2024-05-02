import React from 'react'
import { HeaderTop } from '../Components/HeaderTop/HeaderTop'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import { ContactForm } from '../Components/Contact/ContactForm'

export const Contact = () => {
  return (
    <div>
        <HeaderTop/>
        <Header/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}
