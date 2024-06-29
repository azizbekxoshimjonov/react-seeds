import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import logo from '../../Assets/Img/logo.svg';
import insta from '../../Assets/Img/ant-design_instagram-filled.png';
import face from '../../Assets/Img/akar-icons_facebook-fill.png';
import loop from '../../Assets/Img/Vector (5).png';
import yurak from '../../Assets/Img/Vector (6).png';
import savat from '../../Assets/Img/savatchab.png';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import modalch from '../../Assets/Img/modalchiz.png';
import { Context } from '../../Contex/Context';

function Homeheader() {
  const { localData2, clearLocalData2, clearLocalData, localData } = useContext(Context);
  const [heartModalOpen, setHeartModalOpen] = useState(false);
  const [heartModalOpen2, setHeartModalOpen2] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductCount, setSelectedProductCount] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setHeartModalOpen(true);
    const existingProduct = localData.find((item) => item.id === product.id);
    if (existingProduct) {
      setSelectedProductCount({ [product.id]: existingProduct.quantity });
    } else {
      setSelectedProductCount({ [product.id]: 1 });
    }
  };

  const handleCloseModal = () => {
    setHeartModalOpen(false);
    setSelectedProduct(null);
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
            <img className='logo' src={logo} alt="Logo" />
            <button className='burger-menu' onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </button>
            <ul className={`nav__list ${menuOpen ? 'open' : ''}`}>
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
              <div className='inp__box'>
                <img src={loop} alt="Search" />
                <input type="text" placeholder='Search' />
              </div>
              <img className='insta' src={insta} alt="Instagram" />
              <img className='face' src={face} alt="Facebook" />
            </ul>
            <button className='yurak___btn' onClick={() => setHeartModalOpen(true)}>
              <img src={yurak} alt="Heart" />
            </button>
            <button className='savat__btn' onClick={setHeartModalOpen2}>
              <img className='savat' src={savat} alt="Cart" />
            </button>
          </nav>
        </div>
      </header>
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

export default Homeheader;
