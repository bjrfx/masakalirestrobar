import React, { Fragment } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HeaderComponent from '../../Components/Header/Header'
import PopularDishes from '../../Components/PopularDishes/PopularDishes'
import Quote from '../../Components/Quote/Quote'
import SubscribeForm from '../../Components/SubscribeForm/SubscribeForm'
import Footer from '../../Components/Footer/Footer'

const Menu = () => {
  return (
    <Fragment>
        <Navbar />
        <HeaderComponent 
        textAlign="text-center"
        title="Taste all our menu!"
        size="sm"
        />
        <PopularDishes />
        <Quote />
        <SubscribeForm />
        <Footer />
    </Fragment>
  )
}

export default Menu