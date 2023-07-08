import React, {useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const openMobileMenu = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
  return (
    <>
        <nav className='navbar'>
            <div className='container flex_space'>
                <div className='menu-icon'  onClick={openMobileMenu}>
                    <i className={ click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to='/Apart-Hotel' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to='about' onClick={closeMobileMenu}>About</Link>
                    </li>
                    <li>
                        <Link to='/gallery' onClick={closeMobileMenu}>Gallery</Link>
                    </li>
                    <li>
                        <Link to='/destination' onClick={closeMobileMenu}>Destination</Link>
                    </li>
                    <li>
                        <Link to='/blog' onClick={closeMobileMenu}>Blog</Link>
                    </li>
                    <li>
                        <Link to='/testimonial' onClick={closeMobileMenu}>Testimonial</Link>
                    </li>
                    <li>
                        <Link to='/contact' onClick={closeMobileMenu}>Contact</Link>
                    </li>
                </ul>
                <div className='login-area flex'>
                    <li>
                        <Link to='/sign-in'>
                            <i className='fa fa-chevron-right'></i>Sign In
                        </Link>
                    </li>
                    <li>
                        <Link to='/register'>
                            <i className='fa fa-chevron-right'></i>Register
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact'>
                            <button className='primary-btn'>Request a Quote</button>
                        </Link>
                    </li>
                </div>
            </div>
        </nav>
        <header>
            <div className='container flex_space'>
                <div className='logo'>
                    <img src='/Apart-Hotel/images/aparthotel-logo.svg' alt='logo'></img>
                </div>
                <div className='contact flex_space'>
                    <div className='box flex_space'>
                        <div className='icons'>
                            <i className='fa fa-clock'></i>
                        </div>
                        <div className='text'>
                            <h4>Working Hours</h4>
                            <Link to='/contact'>Monday - Sunday: 9:00am - 6:00pm</Link>
                        </div>
                    </div>
                    <div className='box flex_space'>
                        <div className='icons'>
                            <i className='fas fa-phone-volume'></i>
                        </div>
                        <div className='text'>
                            <h4>Call Us</h4>
                            <Link to='/contact'>+234 901 549 1581</Link>
                        </div>
                    </div>
                    <div className='box flex_space'>
                        <div className='icons'>
                            <i className='far fa-envelope'></i>
                        </div>
                        <div className='text'>
                            <h4>Mail Us</h4>
                            <Link to='/contact'>Dimlaw7@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </header>
        <Outlet />
    </>
        
  )
}

export default Navbar