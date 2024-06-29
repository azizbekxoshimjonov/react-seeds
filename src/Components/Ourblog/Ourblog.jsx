import React from 'react'
import './Ourblog.scss'
import blogloopa from '../../Assets/Img/searchlopa2.png'
import pasga from '../../Assets/Img/pasga.png'
import soat from '../../Assets/Img/soat.png';
import kbrg from '../../Assets/Img/karambargi.png';
import qulpin from '../../Assets/Img/qulpinoys.png';
import devush from '../../Assets/Img/devushka.png';
import uzumqol from '../../Assets/Img/qol va uzum.png'
function Our() {
    return (
        <div>
            <div className="container">
                <div className="welcome__blog">
                    <h1 className='welcome__title__our'>Welcome to our blog</h1>
                    <p className='welcome__des'>Here you can find a lot of interesting and useful information <br /> that you need in gardening and creating a beautiful garden</p>
                </div>
                <div className='sort__by'>
                    <div className='blog__search'>
                        <img src={blogloopa} alt="" />
                        <input type="text" placeholder='Search' />

                    </div>
                    <div className='recentely'>
                        <div className='sort__recent'>
                            <p>Sort by</p>
                            <span>Recently</span>
                        </div>
                        <img src={pasga} alt="" />
                    </div>
                </div>
                <div className='our__box23'>
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
                    <img className='box1__img' src={uzumqol} alt="" />
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
            </div>
        </div>
    )
}

export default Our