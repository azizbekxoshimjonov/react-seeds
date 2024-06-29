import React from 'react'
import './Helps.scss'
import opa from '../../Assets/Img/opa.png'
function Helps() {
  return (
    <div>
            <section className='helps__seedra'>
                <div className="container" >
                    <div className="helps__box">
                    <div>
                        <h1 className='help__title'>Seedra helps to grow fast and <br /> efficiant</h1>
                        <p className='help__des'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and <br /> professional instructions created by PhD Helga George <br /><br />

                            Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the best <br /> germination ratings. <br />
                            Your easy growing experience is our guarantee <br />
                            Spinach commom culinary uses: salads, soups, smoothies, lasagne, <br /> pizza, pies, risotto, and more <br /><br />

                            Proudly sourced in the USA - our garden seeds are grown,<br /> harvested, and packaged in the USA. We support local farmers <br /> and are happy to produce this American-made product</p>
                    </div>
                    <div>
                        <img className='opa' src={opa} alt="" />
                    </div>
                    </div>
                </div>
            </section>
      
    </div>
  )
}

export default Helps
