import React from 'react'
import './Footer.scss'
import opa from '../../Assets/Img/opa.png'
import line from '../../Assets/Img/Line 1.png'
import line3 from '../../Assets/Img/Line 3.png'
import fotinsta from '../../Assets/Img/footface.png'
import fotface from '../../Assets/Img/footinsta.png'
import logo from '../../Assets/Img/logo.svg';
function Footer() {
  return (
    <div>
           <section className='helps__seedra'>
                <div className="container" >
                    <div className="helps__box">
                    <div>
                        <h1 className='help__title'>Seedra helps to grow fast and <br /> efficiant</h1>
                        <p className='help__des'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and <br /> professional instructions created by PhD Helga George <br /><br />

                            Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the best <br /> germination ratings. <br />
                            Your easy growing experience is our guarantee <br />
                            Spinach commom culinary uses: salads, soups, smoothies, lasagne, <br /> pizza, pies, risotto, and more <br /><br />

                            Proudly sourced in the USA - our garden seeds are grown,<br /> harvested, and packaged in the USA. We support local farmers <br /> and are happy to produce this American-made product</p>
                    </div>
                    <div>
                        <img className='opa' src={opa} alt="" />
                    </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <nav className='footer'>
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
