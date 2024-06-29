import React from 'react'
import './Footer.scss'
import line from '../../Assets/Img/Line 1.png'
import line3 from '../../Assets/Img/Line 3.png'
import fotinsta from '../../Assets/Img/footface.png'
import fotface from '../../Assets/Img/footinsta.png'
import logo from '../../Assets/Img/logo.svg';
function Footer() {
  return (
    <div>
       
            <section className='footer'>
                <div className="container">
                    <nav className='footer__nav'>
                        <ul className='footer__list'>
                            <li className='nav__items' >
                                <a href="#">ALL PRODUCTS</a>
                            </li>
                            <li>
                            <img className='ustun' src={line} alt="" />
                            </li>
                            <li className='nav__item2'>
                                <a href="#">ABOUT SEEDRA</a>
                            </li>
                            <li>
                                <img className='ustun' src={line} alt="" />
                            </li>
                            <li className='nav__item2'>
                                <a href="#">OUR BLOG</a>
                                
                            </li>
                            <li>
                                <img className='logo__foot' src={logo} alt="" />
                            </li>
                            <li className='nav__item3'>
                                <a href="#">Terms&Conditions</a>
                               
                            </li>
                            <li>
                            <img className='ustun' src={line} alt="" />
                            </li>
                            <li className='nav__item2'>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                        <img className='line3' src={line3} alt="" />
                        <div className='foot__box'>
                        <img className='fot__insta' src={fotinsta} alt="" />
                        <img className='fot__face' src={fotface} alt="" />
                        <h1 className='foot__title'>All rights reserved</h1>
                    </div>
                    </nav>
                    
                </div>
            </section>
      
    </div>
  )
}

export default Footer
