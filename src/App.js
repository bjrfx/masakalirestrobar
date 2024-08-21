import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import Contact from './pages/Contact/Contact'
import AllReservations from './pages/AllReservations/AllReservations'
import SubscriptionList from './Components/SubscriptionList/SubscriptionList'
import PageNotFound from './pages/pagenotfound/PageNotFound'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/allReservations" element={<AllReservations />} />
      <Route path="/subscriptionList" element={<SubscriptionList />} />
      <Route path="*" element={<PageNotFound />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  )
}

export default App