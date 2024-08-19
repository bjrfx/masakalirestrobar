import React, { Fragment } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HeaderComponent from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import InformationSection from './InformationSection/InformationSection'

const Contact = () => {
  return (
    <Fragment>
        <Navbar />
        <HeaderComponent 
        title="Say hello!"
        textAlign="text-center"
        size="sm"
        />
        <InformationSection />
        <Footer />
    </Fragment>
  )
}

export default Contact