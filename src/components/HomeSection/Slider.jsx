import React, { useState } from 'react'
import Data from './Data'

const Slider = ({slides}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const length = slides.length

    const nextSlide = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
    }
    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
  return (
    <>
        <section className='slider'>
            <div className='control-btn'>
                <button className='prev' onClick={prevSlide}>
                    <i className='fas fa-caret-left'></i>
                </button>
                <button className='next' onClick={nextSlide}>
                    <i className='fas fa-caret-right'></i>
                </button>
            </div>
            {Data.map((slide,index) => {
                return (
                    <div className={index === currentImage ? 'slide active' : 'slide'} key={index}>
                        {index === currentImage && <img src={`/${slide.images}`} alt='Home'></img> }
                    </div>
                )
            })}
        </section>
        
        <section className='slide-form'>
            <div className='container'>
                <h2>Enjoy Your Holiday</h2>
                <span>Search and Book Hotel</span>

                <form action=''>
                    <input type='text' name='' id='' placeholder='Search City' />
                    <div className='flex_space'>
                        <input type='date' placeholder='Check In'/>
                        <input type='date'  placeholder='Check Out' />
                    </div>
                    <div className='flex_space'>
                        <input type='number' placeholder='Adults(+18)'/>
                        <input type='number' placeholder='Children(0 - 17)'/>
                    </div>
                    <input type='number' placeholder='Rooms' />
                    <input type="submit" value="submit" className='submit'/>
                </form>
            </div>
        </section>
    </>
  )
}

export default Slider