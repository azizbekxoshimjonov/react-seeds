import React, { useEffect, useState } from 'react';
import soat from '../../Assets/Img/soat.png';
import kbrg from '../../Assets/Img/karambargi.png';
import qulpin from '../../Assets/Img/qulpinoys.png';
import devush from '../../Assets/Img/devushka.png';
import carla from '../../Assets/Img/carla.png';
import './Blog.scss';

function Blog() {
  const [activeDiv, setActiveDiv] = useState('div1');
  const [activeButton, setActiveButton] = useState('div1');

  const scrollToDiv = (divId) => {
    setActiveDiv(divId);
    setActiveButton(divId);
    document.getElementById(divId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <section className='our__blog'>
        <div className="container">
          <div className="our__box">
            <h1>Our blog.</h1>
            <button>Go to our blog</button>
          </div>
          <div>
            <div className="our__box12">
              <div>
              <div className='soat__box'>
                    <img src={soat} alt="" />
                    <p>12.09.2021</p>
                  </div>
                  <h1 className='box1__title'>How to plant spinach correctly in winter</h1>
                  <p className='box1__des'>In most areas, successive sowing can be done from early spring until <br /> early winter, but more often during hotter months...</p>
                  <button className='box1__btn'>Read</button>
              </div>
              <div>
                <img className='kbrg__image' src={kbrg} alt="" />
              </div>

            </div>
            <div className="content">
              <div className='boxs__boxs'>
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
                <div className='our__box3'>
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
              <div className='box4'>
                <div className='soat__box'>
                  <img src={soat} alt="" />
                  <p>12.09.2021</p>
                </div>
                <h1 className='box4__title'>How to plant spinach correctly </h1>
                <p className='box4__des'>In most areas, successive sowing can be done from <br /> early spring until early winter,
                  but more often during</p>
                <button className='box2__btn'>Read</button>
                <img className='devush' src={devush} alt="" />
              </div>
            </div>
          </div>
          <h1 className='out__title'>What our clients say</h1>
          <div className="conteant22">
            <div className={`carla__box ${activeDiv === 'div1' ? 'active' : 'inactive'}`} id="div1">
              <div className='carla'>
                <img src={carla} alt="" />
                <div>
                  <h1>Carla Samantoes-Diego</h1>
                  <p>12.09.2021</p>
                </div>
              </div>
              <div className="stars2">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star half">&#9733;</span>
              </div>
              <p className='carla__des'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and <br /> professional instructions created by PhD Helga George <br />
                Be sure of our quality - the freshest
                batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the best <br /> germination ratings. </p>
            </div>
            <div className={`carla__box ${activeDiv === 'div2' ? 'active' : 'inactive'}`} id="div2">
              <div className='carla'>
                <img src={carla} alt="" />
                <div>
                  <h1>Carla Samantoes-Diego</h1>
                  <p>12.09.2021</p>
                </div>
              </div>
              <div className="stars2">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star half">&#9733;</span>
              </div>
              <p className='carla__des'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and <br /> professional instructions created by PhD Helga George <br />
                Be sure of our quality - the freshest
                batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the best <br /> germination ratings. </p>
            </div>
            <div className={`carla__box ${activeDiv === 'div3' ? 'active' : 'inactive'}`} id="div3">
              <div className='carla'>
                <img src={carla} alt="" />
                <div>
                  <h1>Carla Samantoes-Diego</h1>
                  <p>12.09.2021</p>
                </div>
              </div>
              <div className="stars2">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star half">&#9733;</span>
              </div>
              <p className='carla__des'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and <br /> professional instructions created by PhD Helga George <br />
                Be sure of our quality - the freshest
                batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the best <br /> germination ratings. </p>
            </div>
          </div>
          <div className="buttons__btn">
            <button className={`grren__btn1 ${activeButton === 'div1' ? 'active-button' : ''}`} onClick={() => scrollToDiv('div1')}></button>
            <button className={`grren__btn2 ${activeButton === 'div2' ? 'active-button' : ''}`} onClick={() => scrollToDiv('div2')}></button>
            <button className={`grren__btn3 ${activeButton === 'div3' ? 'active-button' : ''}`} onClick={() => scrollToDiv('div3')}></button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
