import React, { useContext, useState } from 'react';
import bac from '../../Assets/Img/bak.png';
import cart from '../../Assets/Img/cart.png';
import caram from '../../Assets/Img/caram.png';
import tomat from '../../Assets/Img/toamt.png';
import qulp from '../../Assets/Img/qulp.png';
import sanchiq from '../../Assets/Img/sanchiq.png';
import gul from '../../Assets/Img/gul.png';
import savat from '../../Assets/Img/savatchab.png';
import linemodal from '../../Assets/Img/modalline.png'
import './Product.scss';
import { Context } from "../../Contex/Context";

function Product() {
    const [modalInfo, setModalInfo] = useState({ text: '', top: 0, left: 0, isVisible: false, id: null });

    const {
        filteredProducts,
        clearLocalData,
        handleLove,
        localData,
        handleLove2,
        filterProducts
    } = useContext(Context);

    const showModal = (text, id, event) => {
        const buttonRect = event.target.getBoundingClientRect();
        setModalInfo({
            text,
            top: buttonRect.bottom + 15,
            left: buttonRect.left,
            isVisible: true,
            id
        });
    };

    const hideModal = () => {
        setModalInfo({ ...modalInfo, isVisible: false, id: null });
    };

    return (
        <div>
            <section>
                <div className="container">
                    <div className="all__box">
                        <h1>Our products.</h1>
                        <button>View all (12)</button>
                    </div>

                    <div className="nav__bar">
                        <button id="1" onClick={() =>   filterProducts('All')}  className="bar__btn1">
                            <img onMouseEnter={(e) => showModal('All', 1, e)} onMouseLeave={hideModal} src={bac} alt="All" />
                            ALL
                        </button>
                        <button id="2" onClick={() =>   filterProducts('BUNDLES')}  className="bar__btn2">
                            <img onMouseEnter={(e) => showModal('BUNDLES', 2, e)} onMouseLeave={hideModal} src={cart} alt="Bundles" />
                            BUNDLES
                        </button>
                        <button id="3" onClick={() =>   filterProducts('HERBS')} className="bar__btn3">
                            <img onMouseEnter={(e) => showModal('HERBS', 3, e)} onMouseLeave={hideModal}  src={caram} alt="Herbs" />
                            HERBS
                        </button>
                        <button id="4" onClick={() =>   filterProducts('VEGETABLES')}  className="bar__btn4">
                            <img onMouseEnter={(e) => showModal('VEGETABLES', 4, e)} onMouseLeave={hideModal} src={tomat} alt="Vegetables" />
                            VEGETABLES
                        </button>
                        <button id="5" onClick={() =>   filterProducts('FRUITS')} className="bar__btn5">
                            <img  onMouseEnter={(e) => showModal('FRUITS', 5, e)} onMouseLeave={hideModal} src={qulp} alt="Fruits" />
                            FRUITS
                        </button>
                        <button id="6" onClick={() =>   filterProducts('SUPPLIES')}  className="bar__btn6">
                            <img onMouseEnter={(e) => showModal('SUPPLIES', 6, e)} onMouseLeave={hideModal} src={sanchiq} alt="Supplies" />
                            SUPPLIES
                        </button>
                        <button id="7" onClick={() =>   filterProducts('FLOWERS')}   className="bar__btn7">
                            <img onMouseEnter={(e) => showModal('FLOWERS', 7, e)} onMouseLeave={hideModal} src={gul} alt="Flowers" />
                            FLOWERS
                        </button>
                    </div>

                    {modalInfo.isVisible && (
                        <div id="modal" className="modal__modal" style={{ top: modalInfo.top, left: modalInfo.left }}>
                            <div className="modal-content">
                                <p id="modal-text">{modalInfo.text}</p>
                                <div className='modal__texts'>
                                    <div className='modal__ich1'>
                                        <p>Angelica</p>
                                        <p>Anise</p>
                                        <p>Anise Hyssop</p>
                                        <p>Asclepias (Bu</p>
                                        <p>Basil</p>
                                        <p>Bee Balm</p>
                                        <p>Borage</p>
                                    </div>
                                    <div className='modal__ich2'>
                                        <h2>Calendula</h2>
                                        <h2>Caraway</h2>
                                        <h2>Catmint</h2>
                                        <h2>Catnip</h2>
                                        <h2>Chamomile</h2>
                                        <h2>Chervil</h2>
                                    </div>
                                    <div className='modal__ich3'>
                                        <p>Calendula</p>
                                        <p>Caraway</p>
                                        <p>Catmint</p>
                                        <p>Catnip</p>
                                        <p>Chamomile</p>
                                        <p>Chervil</p>
                                    </div>

                                </div>
                                <img className='linemod' src={linemodal} alt="" />
                                <h3 className='all__herbis'>View all Herbs</h3>
                                
                            </div>
                        </div>
                    )}

                    <div className="products__product">
                        <div className="product">
                            {filteredProducts.map((item) => (
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
            </section>
        </div>
    );
}

export default Product;
