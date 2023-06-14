import React from 'react'
import HomeCarousel from '../../components/HomeCarousel'
import Footer from '../../components/Footer'

const HomePage = () => {
  return (
    <div>
        <h1>Event Horizon</h1>
        <p>Your events, on the horizon.</p>
        <HomeCarousel />
        <Footer />
    </div>
  )
}

export default HomePage