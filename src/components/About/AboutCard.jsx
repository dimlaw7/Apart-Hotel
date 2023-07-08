import React from 'react'
import './About.css'
import Data from '../HomeSection/Data'

const AboutCard = () => {
  return (
    <>
        <div className='about-card mtop flex_space'>
            <div className='row row1'>
                <h4>About</h4>
                <h1>We <span>provide exceptional</span> accomodation services</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatum cupiditate quam qui, repellat quasi, dolore labore eius sunt quibusdam tempora possimus. Cupiditate, hic repellat quia earum ad delectus obcaecati.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatum cupiditate quam qui, repellat quasi, dolore labore eius sunt quibusdam tempora possimus. Cupiditate, hic repellat quia earum ad delectus obcaecati.</p>
                <button className='secondary-btn'>Explore More <i className='fas fa-long-arrow-alt-right'></i></button>
            </div>
            <div className='row image'>
                <img src={`/${Data[1].images}`} alt='' />
                <div className='control-btn'>
                    <button className='prev'>
                        <i className='fas fa-play'></i>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutCard