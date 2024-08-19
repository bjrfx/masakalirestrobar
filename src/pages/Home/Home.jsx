import React, { Fragment } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import PopularDishes from '../../Components/PopularDishes/PopularDishes'
import HeaderComponent from '../../Components/Header/Header'
import OurServices from '../../Components/Services/OurServices'
import Quote from '../../Components/Quote/Quote'
import FunFacts from '../../Components/FunFacts/FunFacts'
import SubscribeForm from '../../Components/SubscribeForm/SubscribeForm'
import Footer from '../../Components/Footer/Footer'
import ReservationForm from '../../Components/ReservationForm/ReservationForm'
const Home = () => {
    const unsplachUrl = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const bgimg = 'https://lh3.googleusercontent.com/p/AF1QipNQrKjzaikXB-mLOh8aLy4f8GPF1x8Fj06P6T5w=s1360-w1360-h1020'
    return (
        <Fragment>
            {/* <div className="gtco-loader"></div> */}
            <div id="page">
                {/* <TestNavbar />
                <TestHeader /> */}
                <Navbar />
               <HeaderComponent 
               size = "md"
               textAlign= "text-center"
                title="Taste all our menu"
                headerClass= "col-md-7 mt-text"
                headerImg={bgimg}
                children={<ReservationForm />}
               />
                <PopularDishes />
                <OurServices />
                <Quote />
                <FunFacts />
                <SubscribeForm />
                <Footer />
            </div>
        </Fragment>
    )
}

export default Home