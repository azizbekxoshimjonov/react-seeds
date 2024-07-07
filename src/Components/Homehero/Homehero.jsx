import React from 'react'
import './Hero.scss'
import olov from '../../Assets/Img/olov.png';
import hero from '../../Assets/Img/hero.png';


function Homehero() {
  return (
    <div>
      <section className='hero'>
                <div className="container">
                    <div className='seeds'>
                        <div className='avatar'>
                            <div>
                                <h1 className='seeds__title'>SEEDRA Basil Seeds for  Indoor and Outdoor <br /> Planting</h1>
                                <p className='seeds__des'>Be sure of our quality - the freshest batches of this season.  Non-GMO, Heirloom - our seeds were tested and have the best  germination ratings. Your easy growing experience is our  guarantee</p>
                                <div className='price'>
                                    <img src={olov} alt="" />
                                    <h1 className='price__title__price'>$12.56</h1>
                                    <h3 className='price__des'>$15.56</h3>
                                </div>
                                <div className='buttons__btns'>
                                <button className='hero__btn1'>Add to cart</button>
                                <button className='hero__btn2'>Discover</button>
                                </div>
                             
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
    </div>
  )
}

export default Homehero
