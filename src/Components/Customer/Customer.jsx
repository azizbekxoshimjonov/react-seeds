import React from 'react'
import './Customer.scss'
import reting from '../../Assets/Img/reting.png'
import crla from '../../Assets/Img/carla.png'
import pitich from '../../Assets/Img/allpit.png'
import tuvay from '../../Assets/Img/tuuuvay.png'
function Customer() {
    return (
        <div>
            <div className="container">
                <div className='reviews'>
                    <h1>Customer reviews.</h1>
                    <button>Make review</button>
                </div>
                <div className='carla__diego__box'>
                    <div >
                        <img className='reting__box__box' src={reting} alt="" />
                    </div>
                    <div className='diego__box'>
                        <div className='june__box'>
                            <img className='carla__img__box' src={crla} alt="" />
                            <div className='united__state'>
                                <h3>Carla Samantoes-Diego</h3>
                                <p>Reviewed in the United States on June 18, 2021</p>
                            </div>
                            <div className="starss">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star half">&#9733;</span>
                            </div>
                        </div>
                        <h3 className='germanation'>SEEDRA Spinach Seeds - contains 600 seeds
                            in 2 Packs and <br /> professional instructions created by PhD Helga George <br />
                            Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our
                            seeds were tested and have the best <br /> germination ratings. </h3>
                        <div className='size__size'>
                            <p>Size</p>
                            <span>2 PACK</span>
                            <button className='aviable__btn'>
                                <img src={pitich} alt="" />
                                VERIFIED
                            </button>
                        </div>
                    </div>
                </div>
                <div className='diego__boox2'>
                    <div className='video__review'>
                        <p className='rteview__124'>124 reviews</p>
                        <div className='photo__review'>
                            <h4>Photo&Video review</h4>
                            <span>View</span>
                        </div>
                        <div className='photo__card'>
                            <img src={tuvay} alt="" />
                            <img src={tuvay} alt="" />
                        </div>
                        <div className='photo__card__boox'>
                            <img src={tuvay} alt="" />
                            <img src={tuvay} alt="" />
                        </div>
                    </div>
                    {/* <h1>sallooomm</h1> */}
                    <div className='state__ond'>
                        <div className='june__box'>
                            <img className='carla__img__box' src={crla} alt="" />
                            <div className='united__state'>
                                <h3>Carla Samantoes-Diego</h3>
                                <p>Reviewed in the United States on June 18, 2021</p>
                            </div>
                            <div className="starss">
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star">&#9733;</span>
                                <span className="star half">&#9733;</span>
                            </div>
                        </div>
                        <h3 className='wolt__title'>Eine sehr aromatische Sorte, wollte die  Himbeere gerade noch <br /> einmal bestellen,
                            derzeit nicht verfügbar. So süße Früchte und <br /> das jetzt im Oktober, unglaublich</h3>
                        <div className='size__size__box'>
                            <p>Size</p>
                            <span>2 PACK</span>
                            <button className='aviable__btn'>
                                <img src={pitich} alt="" />
                                VERIFIED
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Customer
