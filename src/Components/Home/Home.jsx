import React, { useEffect, useState } from 'react';
import './Home.scss';
import logo from '../../Assets/Img/logo.svg';
import insta from '../../Assets/Img/ant-design_instagram-filled.png';
import face from '../../Assets/Img/akar-icons_facebook-fill.png';
import loop from '../../Assets/Img/Vector (5).png';
import yurak from '../../Assets/Img/Vector (6).png';
import savat from '../../Assets/Img/savatchab.png';
import olov from '../../Assets/Img/olov.png';
import hero from '../../Assets/Img/hero.png';
import bac from '../../Assets/Img/bak.png';
import cart from '../../Assets/Img/cart.png';
import caram from '../../Assets/Img/caram.png';
import tomat from '../../Assets/Img/toamt.png';
import qulp from '../../Assets/Img/qulp.png';
import sanchiq from '../../Assets/Img/sanchiq.png';
import gul from '../../Assets/Img/gul.png';
import soat from '../../Assets/Img/soat.png'
import kbrg from '../../Assets/Img/karambargi.png'
import qulpin from '../../Assets/Img/qulpinoys.png'

import { Link } from 'react-router-dom';
import { products as initialProducts } from './Data';

function Home() {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState('All');

    const handleCart = (product) => {
    };

    const filterProducts = (category) => {
        if (category === 'All') {
            setFilteredProducts(initialProducts.filter(product => product.category === 'All'));
        } else {
            const filtered = initialProducts.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
        setCategory(category);
    };

    useEffect(() => {
        filterProducts('All');
    }, []);

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
            <section className='hero'>
                <div className="container">
                    <div className='seeds'>
                        <div className='avatar'>
                            <div>
                                <h1 className='seeds__title'>SEEDRA Basil Seeds for <br /> Indoor and Outdoor <br /> Planting</h1>
                                <p className='seeds__des'>Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the best <br /> germination ratings. Your easy growing experience is our <br /> guarantee</p>
                                <div className='price'>
                                    <img src={olov} alt="" />
                                    <h1 className='price__title'>$12.56</h1>
                                    <h3 className='price__des'>$15.56</h3>
                                </div>
                                <button className='hero__btn1'>Add to cart</button>
                                <button className='hero__btn2'>Discover</button>
                            </div>
                            <div>
                                <img className='sed' src={hero} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className='well'>
                        <h1 className='well__title'>We sell seeds </h1>
                        <p className='well__des'>that always sprout and gardening supplies which never break</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className='all__box'>
                        <h1 className='all__title'>Our products.</h1>
                        <button className='all__btn'>View all (12)</button>
                    </div>
                    <div className='nav__bar'>
                        <button id='1' onClick={() => filterProducts('All')} className='bar__btn1'>
                            <img src={bac} alt="All" />
                            ALL
                        </button>
                        <button onClick={() => filterProducts('BUNDLES')} className='bar__btn2'>
                            <img src={cart} alt="Bundles" />
                            BUNDLES
                        </button>
                        <button onClick={() => filterProducts('HERBS')} className='bar__btn3'>
                            <img src={caram} alt="Herbs" />
                            HERBS
                        </button>
                        <button onClick={() => filterProducts('VEGETABLES')} className='bar__btn4'>
                            <img src={tomat} alt="Vegetables" />
                            VEGETABLES
                        </button>
                        <button onClick={() => filterProducts('FRUITS')} className='bar__btn5'>
                            <img src={qulp} alt="Fruits" />
                            FRUITS
                        </button>
                        <button onClick={() => filterProducts('SUPPLIES')} className='bar__btn6'>
                            <img src={sanchiq} alt="Supplies" />
                            SUPPLIES
                        </button>
                        <button onClick={() => filterProducts('FLOWERS')} className='bar__btn7'>
                            <img src={gul} alt="Flowers" />
                            FLOWERS
                        </button>
                    </div>
                    <div className="products__product">
                        <div className="product">
                            {filteredProducts.map((item) => (
                                <div key={item.id} className="cart__container" onClick={() => handleCart(item)}>
                                    <img className='rek__img' src={item.image} alt={item.title} />
                                    <div>
                                        <button className='yurak__btn2'><i className=" yurakcha bi bi-heart"></i></button>
                                    </div>
                                    <div className="stars">
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                        <span className="star">&#9733;</span>
                                        <span className="star half">&#9733;</span>
                                        <span className="rating">(123)</span>
                                    </div>
                                    <h4>{item.title}</h4>
                                    <div className='html__btn'>
                                        <h1>${item.price}</h1>
                                        <button><img src={savat} alt="" /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className='our__blog'>
                <div className="container">
                    <div className='our__box'>
                        <h1 className='our__title'>Our blog.</h1>
                        <button className='our__btn2'>Go to our blog</button>
                    </div>
                    <div>
                        <div className='our__box1'>
                        <div className='our__boxs'>
                            <div className='soat__box'>
                                <img src={soat} alt="" />
                                <p>12.09.2021</p>
                            </div>
                            <h1 className='box1__title'>How to plant spinach correctly in winter</h1>
                            <p className='box1__des'>In most areas, successive sowing can be done
                                 from early spring until <br /> early winter, but more often during hotter months...</p>
                                 <button className='box1__btn'>Read</button>
                                 
                        </div>
                        <img src={kbrg} alt="" />
                        </div>
                        <div>
                            <div className='our__box2'>
                            <div className='soat__box'>
                                <img src={soat} alt="" />
                                <p>12.09.2021</p>
                            </div>
                            <h1 className='box2__title'>How to plant spinach correct</h1>
                            <button className='box2__btn'>Read</button>
                            <div className='qlpinoys'>
                            <img className='box1__img' src={qulpin} alt="" />

                            </div>
                            
                            </div>
                            <div className='our__box2'> 
                            <div className='soat__box'>
                                <img src={soat} alt="" />
                                <p>12.09.2021</p>
                            </div>
                            <h1 className='box2__title'>How to plant spinach correct</h1>
                            <button className='box2__btn'>Read</button>
                            <div className='qlpinoys'>
                            <img className='box2__img' src={qulpin} alt="" />

                            </div>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Home;
