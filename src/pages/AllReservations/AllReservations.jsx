import React, { Fragment } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HeaderComponent from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import ReservationData from '../../Components/ReservationData/ReservationData'
import './AllReservations.css'

const AllReservations = () => {
  return (
    <Fragment>
        <Navbar />
        <HeaderComponent 
        title="All Reservations"
        textAlign="text-center"
        size="sm"
        />
        <ReservationData />
        <Footer />
    </Fragment>
  )
}

export default AllReservations