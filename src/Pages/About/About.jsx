import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Img/logo.svg';
import insta from '../../Assets/Img/ant-design_instagram-filled.png';
import face from '../../Assets/Img/akar-icons_facebook-fill.png';
import loop from '../../Assets/Img/Vector (5).png';
import yurak from '../../Assets/Img/Vector (6).png';
import savat from '../../Assets/Img/savatchab.png';
import bac from '../../Assets/Img/bak.png';
import cart from '../../Assets/Img/cart.png';
import caram from '../../Assets/Img/caram.png';
import tomat from '../../Assets/Img/toamt.png';
import qulp from '../../Assets/Img/qulp.png';
import sanchiq from '../../Assets/Img/sanchiq.png';
import gul from '../../Assets/Img/gul.png';
import line from '../../Assets/Img/Line 1.png'
import line3 from '../../Assets/Img/Line 3.png'
import fotinsta from '../../Assets/Img/footface.png'
import fotface from '../../Assets/Img/footinsta.png'
import linemodal from '../../Assets/Img/modalline.png'
import { Context } from "../../Contex/Context";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import modalch from '../../Assets/Img/modalchiz.png'
import './About.scss'
function About() {
  const { filterProducts, filteredProducts, handleSearch, handleCart, clearLocalData, handleLove, localData, localData2, handleLove2, clearLocalData2 } = useContext(Context);
  const [heartModalOpen, setHeartModalOpen] = useState(false);
  const [heartModalOpen2, setHeartModalOpen2] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductCount, setSelectedProductCount] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [modalInfo, setModalInfo] = useState({ text: '', top: 0, left: 0, isVisible: false, id: null });
  const handleOpenModal = () => {
    setHeartModalOpen(true);
    setHeartModalOpen2(false);
  };

  const handleCloseModal = () => {
    setHeartModalOpen(false);
  };




  const handleCloseModal2 = () => {
    setHeartModalOpen2(false);
  };
  const handleAddToCart = () => {
    const existingProduct = selectedProducts.find(item => item.id === selectedProduct.id);
    if (existingProduct) {
      const updatedProducts = selectedProducts.map(item => {
        if (item.id === selectedProduct.id) {
          return { ...item, quantity: item.quantity + selectedProductCount[selectedProduct.id] };
        }
        return item;
      });
      setSelectedProducts(updatedProducts);
    } else {
      setSelectedProducts([...selectedProducts, { ...selectedProduct, quantity: selectedProductCount[selectedProduct.id] }]);
    }
    setHeartModalOpen(false);
    setSelectedProduct(null);
    setSelectedProductCount({});
  };

  const handleIncrement = (productId) => {
    setSelectedProductCount(prevCounts => ({ ...prevCounts, [productId]: (prevCounts[productId] || 0) + 1 }));
  };

  const handleDecrement = (productId) => {
    if (selectedProductCount[productId] && selectedProductCount[productId] > 1) {
      setSelectedProductCount(prevCounts => ({ ...prevCounts, [productId]: prevCounts[productId] - 1 }));
    }
  };
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



  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '529px',
    height: '383px',
    backgroundColor: 'rgb(255, 255, 255)',
    border: '1px solid white',
    borderRadius: '12px',
    boxShadow: '0px 14px 26px 0px rgba(0, 0, 0, 0.11)',
    marginTop: '95px',
    marginLeft: '950px',
    marginRight: '167px',
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
    scrollbarWidth: 'none',
  };

  return (
    <div>
      <header>
        <div className="container">
          <nav className='nav'>
            <ul className='nav__left'>
              <li>
                <img className='logo' src={logo} alt="Logo" />
              </li>
            </ul>
            <ul className='nav__list'>
              <li className='nav__item'>
                <Link className='nav__item' to='/'>Home</Link>
              </li>
              <li className='nav__item'>
                <Link className='nav__item' to='/About'>ALL PRODUCTS</Link>
              </li>
              <li className='nav__item'>
                <Link className='nav__item' to='/Seedraall'>ABOUT SEEDRA</Link>
              </li>
              <li className='nav__item'>
                <Link className='nav__item' to='/Ourblog'>OUR BLOG</Link>
              </li>
              <li className='nav__item'>
                <Link className='nav__item' to='/Contact'>CONTACTS</Link>
              </li>
            </ul>
            <img className='insta' src={insta} alt="Instagram" />
            <img className='face' src={face} alt="Facebook" />
            <div className='inp__box'>
              <img src={loop} alt="Search" />
              <input type="text" placeholder='Search' />
            </div>
            <button className='yurak___btn' onClick={handleOpenModal}>
              <img src={yurak} alt="Heart" />
            </button>
            <button onClick={setHeartModalOpen2} className='savat__btn' >
              <img src={savat} alt="" />
            </button>
          </nav>
        </div>
      </header>
      <section>
        <div className="container">
          <div className='search__inp'>
            <img src={loop} alt="" />
            <input type="text" placeholder='Search' onChange={(e) => handleSearch(e.target.value)} />

          </div>

          <div className='all__box'>
            <h1 className='all__title'>Our products.</h1>
            <button className='all__btn'>Clear all</button>
          </div>
          <div className='nav__bar'>
            <button id="1" onClick={() => filterProducts('All')} className="bar__btn1">
              <img onMouseEnter={(e) => showModal('All', 1, e)} onMouseLeave={hideModal} src={bac} alt="All" />
              ALL
            </button>
            <button id="2" onClick={() => filterProducts('BUNDLES')} className="bar__btn2">
              <img onMouseEnter={(e) => showModal('BUNDLES', 2, e)} onMouseLeave={hideModal} src={cart} alt="Bundles" />
              BUNDLES
            </button>
            <button id="3" onClick={() => filterProducts('HERBS')} className="bar__btn3">
              <img onMouseEnter={(e) => showModal('HERBS', 3, e)} onMouseLeave={hideModal} src={caram} alt="Herbs" />
              HERBS
            </button>
            <button id="4" onClick={() => filterProducts('VEGETABLES')} className="bar__btn4">
              <img onMouseEnter={(e) => showModal('VEGETABLES', 4, e)} onMouseLeave={hideModal} src={tomat} alt="Vegetables" />
              VEGETABLES
            </button>
            <button id="5" onClick={() => filterProducts('FRUITS')} className="bar__btn5">
              <img onMouseEnter={(e) => showModal('FRUITS', 5, e)} onMouseLeave={hideModal} src={qulp} alt="Fruits" />
              FRUITS
            </button>
            <button id="6" onClick={() => filterProducts('SUPPLIES')} className="bar__btn6">
              <img onMouseEnter={(e) => showModal('SUPPLIES', 6, e)} onMouseLeave={hideModal} src={sanchiq} alt="Supplies" />
              SUPPLIES
            </button>
            <button id="7" onClick={() => filterProducts('FLOWERS')} className="bar__btn7">
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
                    <button className='savat__btn2' onClick={() => handleLove2(item)}
                    >
                      <img src={savat} alt="" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
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
      <Modal
        className='modal'
        open={heartModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div id="modal-modal-description" className="loved-products">
            <button onClick={handleCloseModal} className='x__btn'>X</button>
            {localData.length > 0 ? (
              localData.map((item) => (
                <div key={item.id} className="loved-product">
                  <div className='modal__ichi'>
                    <img className='modal__img rek__img' src={item.image} alt={item.title} />
                    <p className='item__tile'>{item.title}</p>
                  </div>
                  <div className='summa'>
                    <p className='summ__des'>{selectedProductCount[item.id] || 1} pack</p>
                    <h2 className='summa__title'>$24.56</h2>
                    <div className='summa__btn'>
                      <button className='minus__btn' onClick={() => handleDecrement(item.id)}>-</button>
                      <h1 className='title__btn__btn'>{selectedProductCount[item.id] || 1}</h1>
                      <button className='pilus__btn' onClick={() => handleIncrement(item.id)}>+</button>
                    </div>
                  </div>
                  <img className='modal__chiz' src={modalch} alt="" />
                </div>
              ))
            ) : (
              <p className='no__lov__prod'>No loved products</p>
            )}
          </div>
          <div className="modal-header">
            <Typography id="modal-modal-title" variant="h6" component="h2">

            </Typography>
            <div className='modal__bts'>
              <button className='clear__btn' onClick={clearLocalData}>Clear</button>
              <li className='modal__btn__pay'>
                <Link className='payment__title' to='/Payment'> Proceed to payment</Link>
              </li>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal
        className='modal'
        open={heartModalOpen2}
        onClose={handleCloseModal2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div id="modal-modal-description" className="loved-products">
            <button onClick={handleCloseModal2} className='x__btn'>X</button>
            {localData2.length > 0 ? (
              localData2.map((item) => (
                <div key={item.id} className="loved-product">
                  <div className='modal__ichi'>
                    <img className='modal__img rek__img' src={item.image} alt={item.title} />
                    <p className='item__tile'>{item.title}</p>
                  </div>
                  <div className='summa'>
                    <p className='summ__des'>{selectedProductCount[item.id] || 1} pack</p>
                    <h2 className='summa__title'>$24.56</h2>
                    <div className='summa__btn'>
                      <button className='minus__btn' onClick={() => handleDecrement(item.id)}>-</button>
                      <h1 className='title__btn__btn'>{selectedProductCount[item.id] || 1}</h1>
                      <button className='pilus__btn' onClick={() => handleIncrement(item.id)}>+</button>
                    </div>
                  </div>
                  <img className='modal__chiz' src={modalch} alt="" />
                </div>
              ))
            ) : (
              <p className='no__lov__prod'>No loved products</p>
            )}

          </div>
          <div className="modal-header">
            <Typography id="modal-modal-title" variant="h6" component="h2">

            </Typography>
            <div className='modal__bts'>
              <button className='clear__btn' onClick={clearLocalData2}>Clear</button>
              <li className='modal__btn__pay'>
                <Link className='payment__title' to='/Payment'> Proceed to payment</Link>
              </li>
            </div>
          </div>
        </Box>
      </Modal>

    </div>
  );
}


export default About;
