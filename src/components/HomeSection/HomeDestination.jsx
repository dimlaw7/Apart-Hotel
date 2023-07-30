import React from 'react'
import GaleryItems from '../Destinations/GaleryItems'
import '../HomeSection/popular/MostPopular.css'

const HomeDestination = () => {
  return (
    <>
        <section className="popular top">
            <div className="full_container">
                <div className="heading">
                    <h1>Most Popular Destination</h1>
                    <div className="line"></div>
                </div>
            </div>
            <div className="content">
                <GaleryItems />
            </div>
        </section>
    </>
  )
}

export default HomeDestination