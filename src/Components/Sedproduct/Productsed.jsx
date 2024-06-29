import React, { useContext } from 'react';
import './Sedproduct.scss';
import { Context } from "../../Contex/Context";
import savat from '../../Assets/Img/savatchab.png';

function Productsed() {
    const {
        filteredProducts,
        handleLove,
        localData,
        handleLove2,
    } = useContext(Context);

    // Filtered productsni uchtaga qisqartirish
    const limitedProducts = filteredProducts.slice(0, 3);

    return (
        <div>
            <div className="container">
                <h1 className='pr__title'>Related products.</h1>
                <div className="product">
                    {limitedProducts.map((item) => (
                        <div key={item.id} className="cart__container">
                            <img className='rek__img' src={item.image} alt={item.title} />
                            <div>
                                <button className='yurak__btn2' onClick={() => handleLove(item)}>
                                    <i className={`yurakcha bi bi-heart${localData.find((product) => product.id === item.id) ? '-fill' : ''}`}></i>
                                </button>
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
                                <button className='savat__btn2' onClick={() => handleLove2(item)}><img src={savat} alt="" /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Productsed;
