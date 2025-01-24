import React, { Fragment } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
// import HeaderComponent from '../../Components/Header/Header'
// import Quote from '../../Components/Quote/Quote'
// import SubscribeForm from '../../Components/SubscribeForm/SubscribeForm'
import Footer from '../../Components/Footer/Footer'
// import AllMenu from '../../Components/AllMenu/AllMenu'
import TestAllMenu from '../../TestComponents/TestAllMenu/TestAllMenu'

const Menu = () => {
  return (
    <Fragment>
        <Navbar />
        {/* <HeaderComponent 
        textAlign="text-center"
        title="Taste all our menu!"
        size="sm"
        /> */}
        {/* <AllMenu /> */}
        <TestAllMenu />
        {/* <Quote /> */}
        {/* <SubscribeForm /> */}
        <Footer />
    </Fragment>
  )
}

export default Menu