import React, { useState } from 'react';
import './Tolov.scss';
import chapga from '../../Assets/Img/chapga.png';
import path from '../../Assets/Img/path.png';
import visa from '../../Assets/Img/visa.png';
import mastercard from '../../Assets/Img/MasterCard.png';
import paypal from '../../Assets/Img/paypal.png';
import paymentch from '../../Assets/Img/payment chiz .png';
import right from '../../Assets/Img/right.svg';

function Tolov() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    return (
        <div>
            <div className="container">
                <div className="container__box">
                    <div className='korinmas__box'>
                        <button className='paymen__btn'><img src={chapga} alt="" /></button>
                        <h1 className='payment__title2'>Payment info</h1>
                        <button
                            onClick={() => handleButtonClick('payment__btn1')}
                            className={activeButton === 'payment__btn1' ? 'payment__btn1 active' : 'payment__btn1'}>
                        </button>
                        <button
                            onClick={() => handleButtonClick('payment__btn2')}
                            className={activeButton === 'payment__btn2' ? 'payment__btn2 active' : 'payment__btn2'}>
                        </button>
                    </div>
                    <p className='type__des'>Card type</p>
                    <div className='tolov__buttons'>
                        <button className='tolov__button12'><img src={path} alt="" /></button>
                        <button className='tolov__button123'><img src={visa} alt="" /></button>
                        <button className='tolov__button124'><img src={mastercard} alt="" /></button>
                        <button className='tolov__button125'><img src={paypal} alt="" /></button>
                    </div>
                    <p className='card__num'>Card number</p>
                    <input className='card__input' type="number" placeholder='0000 0000 0000 0000' />
                    <div className='expring'>
                        <div>
                            <p className='date__des'>Expiring date</p>
                            <input className='date__inp' type="number" placeholder='01/01' name="" id="" />
                        </div>
                        <div>
                            <p className='date__des'>CCV</p>
                            <input className='date__inp' type="number" placeholder='123' name="" id="" />
                        </div>
                    </div>
                    <img className='paymenchiz' src={paymentch} alt="" />
                    <div className='total__box'>
                        <p className='total__des'>Total amount</p>
                        <h1 className='total__title'>$12.56</h1>
                    </div>
                    <div className='continu'>
                        <div>
                            <h2 className='price__title'>$12.56</h2>
                        </div>
                        <div className='continu2'>
                            <h2 className='continu__title'>Continue</h2>
                            <button className='continu__onga__btn'><img src={right} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tolov;
