import React, { useState } from 'react';
import './Seedra.scss';
import corn from '../../Assets/Img/allcorn.png';
import pitich from '../../Assets/Img/allpit.png';
import pomidori from '../../Assets/Img/xompomid.png';
import btn1 from '../../Assets/Img/btn1.png';
import btn2 from '../../Assets/Img/btn2.png';
import btn3 from '../../Assets/Img/btn3.png';
import btn4 from '../../Assets/Img/btn4.png';
import btn5 from '../../Assets/Img/btn5.png';
import btn6 from '../../Assets/Img/btn6.png';
import yurak from '../../Assets/Img/yurakcha.png';
import nongmo from '../../Assets/Img/nongmo.webp';
import usanatural from '../../Assets/Img/usanatural.webp';
import hybrid from '../../Assets/Img/hybrid.jpg';
import xomlimon from '../../Assets/Img/xomlimon.webp';
import bodiroq from '../../Assets/Img/bodiroq.jpg';

function Seedra() {
    const [heroImage, setHeroImage] = useState(corn);
    const [activeIndex, setActiveIndex] = useState(null);
    const [count, setCount] = useState(1);

    const items = [
        'Main /',
        'Cataloug /',
        'Vegetables /',
        'Cucumber /',
        'SEEDRA cucumber'
    ];
  
    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const increment = () => {
        setCount(prevCount => (prevCount < 5 ? prevCount + 1 : 5));
    };

    const decrement = () => {
        setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1)); 
    };
    
    const handleButtonClick = (image) => {
        switch (image) {
            case 'btn1':
                setHeroImage(corn);
                break;
            case 'btn2':
                setHeroImage(nongmo);
                break;
            case 'btn3':
                setHeroImage(usanatural);
                break;
            case 'btn4':
                setHeroImage(hybrid);
                break;
            case 'btn5':
                setHeroImage(xomlimon);
                break;
            case 'btn6':
                setHeroImage(bodiroq);
                break;
            default:
                break;
        }
    }
    
    return (
        <div>
            <div className="container bar__des__nav23">
                {items.map((item, index) => (
                    <p
                        key={index}
                        className={`bar__des__nav2 ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        {item}
                    </p>
                ))}
            </div>
            <div className='hero__sect'>
                <img className='corns' src={heroImage} alt="" />
                <div>
                    <h1 className='hero__title'>SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor <br /> Planting</h1>
                    <div className='btns__btns'>
                        <button className='pitich__btn'>
                            <img src={pitich} alt="" />
                            AVAILABLE
                        </button>
                        <button className='pomid__btn'>
                            <img src={pomidori} alt="" />
                            VEGETABLES
                        </button>
                    </div>
                    <div className='size'>
                        <p>Size</p>
                        <span>{count} PACK</span>
                        <div className='summa__btn__btn'>
                            <button onClick={decrement} className='minus__btn'>-</button>
                            <h1 className='title__btn__btn'>{count}</h1>
                            <button onClick={increment} className='pilus__btn'>+</button>
                        </div>
                    </div>
                    {[1, 2, 3, 4, 5].map((num, index) => (
                        <div key={index} className='inputs__kat'>
                            <div className='inp__box1'>
                                <input className='nuqta__input' checked={count === num} type="radio" />
                                <p>{num} pack</p>
                            </div>
                            <div className='inp__price'>
                                <p>start from</p>
                                <h2>$1,56</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='olti__btn'>
                <div className="bar__btn">
                    <button className='bar__btn__btn' onClick={() => handleButtonClick('btn1')}><img src={btn1} alt="" /></button>
                    <button className='bar__btn__btn' onClick={() => handleButtonClick('btn2')}><img src={btn2} alt="" /></button>
                    <button className='bar__btn__btn' onClick={() => handleButtonClick('btn3')}><img src={btn3} alt="" /></button>
                    <button className='bar__btn__btn' onClick={() => handleButtonClick('btn4')}><img src={btn4} alt="" /></button>
                    <button className='bar__btn__btn' onClick={() => handleButtonClick('btn5')}><img src={btn5} alt="" /></button>
                    <button className='bar__btn__btn' onClick={() => handleButtonClick('btn6')}><img src={btn6} alt="" /></button>
                </div>
                <div className='summa__box12'>
                    <p>$15.56</p>
                    <h1>$12.56</h1>
                </div>
                <button className='yurak__btn12'><img src={yurak} alt="" /></button>
                <button className='add__btn__to'>Add to card</button>
            </div>
        </div>  
    );
}

export default Seedra;
