import React, { Fragment } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import HeaderComponent from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import SubscribeForm from '../../Components/SubscribeForm/SubscribeForm';
import ReserveNowForm from './ReserveNowForm';  // Importing new form

const ReserveNow = () => {
  return (
    <Fragment>
      <Navbar />
      {/* <HeaderComponent 
        textAlign="text-center"
        title="Reserve Now!"
        size="sm"
      /> */}
      <ReserveNowForm /> {/* Embed the new reservation form */}
      <SubscribeForm />
      <Footer />
    </Fragment>
  );
};

export default ReserveNow;