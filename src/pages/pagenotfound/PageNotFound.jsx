import React, { Fragment } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HeaderComponent from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const PageNotFound = () => {
  return (
    <Fragment>
        <Navbar />
        <HeaderComponent 
        title="Page Not Found" 
        size='sm'
        textAlign='text-center'
        />
        <Footer />
    </Fragment>
  )
}

export default PageNotFound