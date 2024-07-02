import React from 'react'
import './Seedrahom.scss'
import line5 from '../../Assets/Img/Line 5.png'
import line6 from '../../Assets/Img/Line 6.png'
import add from '../../Assets/Img/Add.png'
import minusbtn from '../../Assets/Img/Hicon _ Linear _ Minus.png'
import line61 from '../../Assets/Img/Line 6 (1).png'
function Homesed() {
    return (
        <div>
            <div className="container">
                <h1 className='info__title'>Product information.</h1>
                <img className='lene5' src={line5} alt="" />
                <div className='uls__list'>
                    <div className='moves__list'>
                        <ul className='list__lists'>
                            <li>EEDRA Cilantro Seeds - contains 300 seeds in 1 Pack <br />
                                and professional instructions created by PhD Helga George
                            </li>
                            <li>Be sure of our quality - the freshest
                                batches of this season. <br />
                                Non-GMO, Heirloom - our seeds were
                                tested and have the best <br /> germination ratings.
                                Your easy growing experience is our <br /> guarantee
                            </li>
                            <li>Cilantro common culinary uses: salsa,
                                guacamole, pesto, <br /> salads, chutney, baked breads,
                                pad thai, pico de gallo, rice, <br /> grilled shrimp skewers, falafel, and more
                            </li>
                            <li>Proudly sourced in the USA - our garden seeds are grown,<br />
                                harvested, and packaged in the USA. We support local <br /> farmers
                                and are happy to produce this American-made <br /> product
                            </li>
                            <li>SEEDRA customer service - please contact us directly <br /> through Amazon with any
                                questions or concerns about our <br /> products.
                                We care about each customer and do our best to <br /> provide you with 100% satisfaction</li>
                        </ul>
                    </div>
                    <div className='balshoy'>
                        <div className='bir__box'>
                            <p>Package Dimensions</p>
                            <h2>5.51 x 3.5 x 0.35 inches</h2>
                        </div>
                        <img className='line6' src={line6} alt="" />
                        <div className='bir__box'>
                            <p>Item Weight</p>
                            <h2>0.317 ounces</h2>
                        </div>
                        <img className='line6' src={line6} alt="" />
                        <div className='ikki__box'>
                            <p>ASIN</p>
                            <h2>B08Z3HN5MP</h2>
                        </div>
                    </div>
                </div>
                <h1 className='asked__title'>Frequently asked questions.</h1>
                <div className='question'>
                    <div>
                        <div className='qosh__btn__btn'>
                            <h3>For seller: are these seeds organic? it does matter if they are <br /> organic,
                                seeds can hold pesticides from the plant they grow </h3>
                                <button className='addd__btn'><img src={add} alt="" /></button>
                        </div>
                        <div className='minus__btn__btn2'>
                            <div className='minus__canthey'>
                                <h3>Can they be grown on hydroponic systems</h3>
                                <button><img src={minusbtn} alt="" /></button>
                            </div>
                            <img className='line61' src={line61} alt="" />
                            <h3 className='ihave'>I have heat mats and artificial light. <br />
                            I planted them in all purpose potting soil. Moist not wet. Placed <br /> them on a heat mat. If not available,
                             somewhere where it's 72 <br /> degrees. 
                            Add natural light, but I used artificial light. Takes 10- 15 <br /> days because of there hard shell on the seed. </h3>
                        </div>
                        <div className='note__do'>
                            <h3>They did not germinate even when i followed directions. What should i <br /> do?</h3>
                            <button><img src={add} alt="" /></button>
                        </div>
                        
                    </div>
                    <div className='carla__view'>
                    <div className='ask__youtype'>
                        <h1>Didn’t find answer?</h1>
                        <p>Ask your own!</p>
                        <div className='own__box'>
                            <input type="text" placeholder='Type here' />
                        </div>
                        <button className='send__send__btn'>Send</button>
                       
                    </div>
                   
                </div>
                
                </div>
                

            </div>
        </div>
    )
}

export default Homesed
