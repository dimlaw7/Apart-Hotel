import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item : { id, image, title}}) => {
  return (
    <>
        <div className="items">
            <div className="img">
                <img src={image} alt=""/>
                <Link to={`/singlepage/${id}`} className='blogItem-link'>
                    <i className="fas fa-external-link-alt"></i>
                </Link>
            </div>
            <div className="title">
                <h3>{title}</h3>
            </div>
        </div>
    </>
  )
}

export default Card