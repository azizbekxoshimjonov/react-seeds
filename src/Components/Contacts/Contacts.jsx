import React from 'react'
import './Contacts.scss'
import opa from '../../Assets/Img/opa.png'
import achkiliopa from '../../Assets/Img/achkili opa.png'
import lesli from '../../Assets/Img/lesli.png'
import robert from '../../Assets/Img/robert.png'
import floyd from '../../Assets/Img/floyd.png'
import wade from '../../Assets/Img/wade.png'
function Contacts() {
    return (
        <div>
            <div className="container">
                <div className="what__box">
                    <h1 className='what__title'>Who we are and what <br /> we do</h1>
                    <p className='what__des'>Here you can find a lot of interesting and useful information <br /> that you need in gardening and creating a beautiful garden</p>
                </div>
                <div >
                    <div className="helps__box__grovn__box">
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
                <div className="our__stroy">
                    <div>
                        <img src={achkiliopa} alt="" />
                    </div>
                    <div>
                        <h2 className='stroy__title'>Our story</h2>
                        <p className='stroy__des'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and <br /> professional instructions created by PhD Helga George <br /><br /><br />

                            Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the best <br /> germination ratings. <br />
                            Your easy growing experience is our guarantee <br />
                            Spinach commom culinary uses: salads, soups, smoothies, <br /> lasagne, pizza, pies, risotto, and more <br /><br /><br />

                            Proudly sourced in the USA - our garden seeds are grown, <br /> harvested, and packaged in the USA. We support local farmers <br /> and are happy to produce this American-made product</p>
                    </div>
                </div>
                <h1 className='meet__title'>Meet our team</h1>
                <div className='our__team'>
                    <div className='melek__box'>
                        <img src={lesli} alt="" />
                        <p>Leslie Alexander</p>
                    </div>
                    <div className='melek__box'>
                        <img src={robert} alt="" />
                        <p>Robert Fox</p>
                    </div>
                    <div className='melek__box'>
                        <img src={floyd} alt="" />
                        <p>Floyd Miles</p>
                    </div>
                    <div className='melek__box'>
                        <img src={wade} alt="" />
                        <p>Wade Warren</p>
                    </div>
                </div>
                <div className='assistand'>
                    <p>Nursing Assistant</p>
                    <p>Dog Trainer</p>
                    <p>Web Designer </p>
                    <p>Medical Assistant</p>
                </div>
            </div>
        </div>
    )
}

export default Contacts
