import React from 'react'
import Hero from '../HomeSection/Hero'
import '../HomeSection/Home.css'
import HomeAbout from '../HomeSection/HomeAbout'
import HomeDestination from '../HomeSection/HomeDestination'
import MostPopular from '../HomeSection/popular/MostPopular'

const Home = () => {
  return (
    <>
        <Hero/>
        <HomeAbout />
        <HomeDestination />
        <MostPopular />
    </>
  )
}

export default Home