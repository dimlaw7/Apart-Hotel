import React from 'react'
import Card from './Card'
import Data from './Data'
import './destinations.css'

const GaleryItems = () => {
  return (
    <section className='gallery destination top'>
        <div className="container">
            <div className="content grid">
              {Data.map((item) => {
                return <Card item={item}/>
              })}
            </div>
        </div>
    </section>
  )
}

export default GaleryItems