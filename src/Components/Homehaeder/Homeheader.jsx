import React from 'react'
import { Link } from 'react-router-dom';
import './Home.scss'
import logo from '../../Assets/Img/logo.svg';
import insta from '../../Assets/Img/ant-design_instagram-filled.png';
import face from '../../Assets/Img/akar-icons_facebook-fill.png';
import loop from '../../Assets/Img/Vector (5).png';
import yurak from '../../Assets/Img/Vector (6).png';
import savat from '../../Assets/Img/savatchab.png';


function Homeheader() {
  return (
    <div>
            <header>
                <div className="container">
                    <nav className='nav'>
                        <ul className='nav__left'>
                            <li>
                                <img className='logo' src={logo} alt="" />
                            </li>
                        </ul>
                        <ul className='nav__list'>
                            <li className='nav__item'>
                                <Link className='nav__item' to='/Abaut'>ALL PRODUCTS</Link>
                            </li>
                            <li className='nav__item'>
                                <Link className='nav__item' to='/Abaut'>ABOUT SEEDRA</Link>
                            </li>
                            <li className='nav__item'>
                                <Link className='nav__item' to='/'>OUR BLOG</Link>
                            </li>
                            <li className='nav__item'>
                                <Link className='nav__item' to='/'>CONTACTS</Link>
                            </li>
                        </ul>
                        <img className='insta' src={insta} alt="" />
                        <img className='face' src={face} alt="" />
                        <div className='inp__box'>
                            <img src={loop} alt="" />
                            <input type="text" placeholder='Search' />
                        </div>
                        <button className='yurak___btn'><img src={yurak} alt="" /></button>
                        <img className='savat' src={savat} alt="" />
                    </nav>
                </div>
            </header>

      
    </div>
  )
}

export default Homeheader
