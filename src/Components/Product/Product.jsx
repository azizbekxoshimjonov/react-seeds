import React, { useEffect, useState } from 'react';
// import React from 'react'
import bac from '../../Assets/Img/bak.png';
import cart from '../../Assets/Img/cart.png';
import caram from '../../Assets/Img/caram.png';
import tomat from '../../Assets/Img/toamt.png';
import qulp from '../../Assets/Img/qulp.png';
import sanchiq from '../../Assets/Img/sanchiq.png';
import gul from '../../Assets/Img/gul.png';
import savat from '../../Assets/Img/savatchab.png';
import './Product.scss'

import { products as initialProducts } from './Data';
function Product() {
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
      
    </div>
  )
}

export default Product
