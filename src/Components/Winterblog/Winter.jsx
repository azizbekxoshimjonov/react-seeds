import React from 'react'
import './Winter.scss'
import soat from '../../Assets/Img/soat.png'
import qulpinoy from '../../Assets/Img/qulpinoy2.png'
import chiroyliopa from '../../Assets/Img/chiroyliopa.png'
import devush from '../../Assets/Img/devushka.png';
import achkiliopa1 from '../../Assets/Img/pretty-arab-woman-smiling-happily-with-hand-hip-confident-holding-potted-cactus 1.png'
import qorauzum from '../../Assets/Img/uzumqorasi.png' 
import achkiliopa2 from '../../Assets/Img/young-pretty-woman-feeling-happy-surprised-realizing-solution-idea-with-straw-hat-holding-cactus 1.png'
function Winter() {
  return (
    <div>
      <div className="container">
        <div className='winter__boxs'>
          <div className='winter__box1'>
            <div className='soat__box'>
              <img src={soat} alt="" />
              <p>12.09.2021</p>
            </div>
            <div className='winter__mark'>
              <div>
                <h1 className='winter__title'>How to plant spinach correctly in winter</h1>
                <p className='winter__des'>In most areas, successive sowing can be done from early spring until <br /> early winter, but more often during hotter months...</p>
                <button className='box1__btn'>Read</button>
              </div>
              <div>
                <img className='winter__img' src={qulpinoy} alt="" />
              </div>
            </div>
          </div>
          <div className='plant__spinash'>
            <div className='soat__box'>
              <img src={soat} alt="" />
              <p>12.09.2021</p>
            </div>
            <h1 className='winter__title__des2'>How to plant spinach correct</h1>
            <button className='box1__btn'>Read</button>
            <img className='plant__image' src={chiroyliopa} alt="" />
          </div>
        </div>
        <div className='girl__box'>
        <div className='box44'>
                <div className='soat__box'>
                  <img src={soat} alt="" />
                  <p>12.09.2021</p>
                </div>
                <h1 className='box4__title'>How to plant spinach correctly </h1>
                <p className='box4__des'>In most areas, successive sowing can be done from <br /> early spring until early winter,
                  but more often during</p>
                <button className='box2__btn'>Read</button>
                <img className='devushachki' src={achkiliopa1} alt="" />
              </div>
              <div className='box44'>
                <div className='soat__box'>
                  <img src={soat} alt="" />
                  <p>12.09.2021</p>
                </div>
                <h1 className='box4__title'>How to plant spinach correctly </h1>
                <p className='box4__des'>In most areas, successive sowing can be done from <br /> early spring until early winter,
                  but more often during</p>
                <button className='box2__btn'>Read</button>
                <img className='devushqora' src={qorauzum} alt="" />
              </div>
              <div className='box44'>
                <div className='soat__box'>
                  <img src={soat} alt="" />
                  <p>12.09.2021</p>
                </div>
                <h1 className='box4__title'>How to plant spinach correctly </h1>
                <p className='box4__des'>In most areas, successive sowing can be done from <br /> early spring until early winter,
                  but more often during</p>
                <button className='box2__btn'>Read</button>
                <img className='devush' src={achkiliopa2} alt="" />
              </div>

        </div>
        

      </div>
    </div>
  )
}

export default Winter
