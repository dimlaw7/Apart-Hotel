import React from 'react'
import AboutCard from '../About/AboutCard'
import Data from '../HomeSection/Data'
import HeadTitle from '../../semantics/HeadTitle/HeadTitle'

const About = () => {
  return (
    <>
        <HeadTitle />
        <section className='about top'>
            <div className='container'>
                <AboutCard />
            </div>
        </section>

        <section className="features top">
            <div className="container about-card flex_space">
                <div className="row row1">
                    <h1>Our <span>Services</span></h1>
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
        </section>
    </>
  )
}

export default About