import React from 'react'
import Hero from '../HomeSection/Hero'
import '../HomeSection/Home.css'
import HomeAbout from '../HomeSection/HomeAbout'
import HomeDestination from '../HomeSection/HomeDestination'

const Home = () => {
  return (
    <>
        <Hero/>
        <HomeAbout />
        <HomeDestination />
    </>
  )
}

export default Home