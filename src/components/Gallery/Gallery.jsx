import React from 'react'
import HeadTitle from '../../semantics/HeadTitle/HeadTitle'
import Card from './Card'
import galleryData from './Data'
import './Gallery.css'

const Gallery = () => {
  return (
    <>
        <HeadTitle />
        <section className='gallery top'>
            <div className='container grid gallery-grid'>
                {galleryData.map((value) => {
                   return <Card images={value.images} title={value.title}/>
                })}
            </div>
        </section>
    </>
  )
}

export default Gallery