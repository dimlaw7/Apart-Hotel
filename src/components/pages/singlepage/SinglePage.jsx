import React, { useState } from 'react'
import './singlepage.css'
import HeadTitle from '../../../semantics/HeadTitle/HeadTitle'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Data from '../../Destinations/Data'

const SinglePage = () => {
    const { id } =useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        let item = Data.find((item) => item.id === parseInt(id))
        if(item) setItem(item)
    }, [id])
  return (
    <>
        <HeadTitle />
        {item ? (
            <section className="single-page top">
                <div className="container">
                    <Link to='/Apart-Hotel/destination' className='primary-btn back'>
                        <i className="fas fa-long-arrow-alt-left"></i> Go Back
                    </Link>
                    <article className="content flex">
                        <div className="main-content">
                            <img src={item.image} alt="" className="image" />
                            <p>{item.desc}</p>
                            <p>{item.desc}</p>
                            <div className="para flex_space">
                                <p>{item.desc}</p>
                                <p>{item.desc}</p>
                            </div>
                            <h1>What is the {item.title} City?</h1>
                            <p>{item.desc}</p>
                            <div className="image grid1">
                                <img src={item.paraImage_one} alt="" className="image" />
                                <img src={item.paraImage_two} alt="" className="image" />
                            </div>
                            <p>{item.desc}</p>
                        </div>
                        <div className="side-content">
                            <div className="box">
                                <h2>How can we help you</h2>
                                <p>{item.sidepara}</p>
                                <button className="outline-btn">
                                    <i className="fas fa-phone-alt"></i> Contact Us
                                </button>
                            </div>
                            <div className="box2">
                                <p>{item.sidepara}</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        ):(
            <section className="single-page top">
                <div className="container">
                    <Link to='' className='primary-btn back'>
                        <i className="fas fa-long-arrow-alt-left"></i> Go Back
                    </Link>
                    <article className="content flex">
                        <div className="main-content">
                            <img src="" alt="" className="image" />
                        </div>
                    </article>
                </div>
            </section>
        )}
        
    </>
  )
}

export default SinglePage