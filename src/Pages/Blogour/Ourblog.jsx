import React from 'react'
import Our from '../../Components/Ourblog/Ourblog'
import Homeheader from '../../Components/Homehaeder/Homeheader'
import Winter from '../../Components/Winterblog/Winter'
import Footer from '../../Components/Footer/Footer'

function Ourblog() {
    return (
        <div>
            <Homeheader />
            <Our />
            <Winter/>
            <Footer/>
        </div>
    )
}

export default Ourblog
