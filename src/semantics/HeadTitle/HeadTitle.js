import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './HeadTitle.css'

const HeadTitle = () => {
    const location = useLocation()
  return (
    <>
        <section className='image-heading'>
            <div className='container'>
                <div className='head-title flex_space'>
                    <h1>{location.pathname.split('/')[2]}</h1>
                    <button>
                        <Link to='/Apart-Hotel'>Home / </Link>
                        <span>{location.pathname.split('/')[2]}</span>
                    </button>
                </div>
            </div>
        </section>
    </>
  )
}

export default HeadTitle