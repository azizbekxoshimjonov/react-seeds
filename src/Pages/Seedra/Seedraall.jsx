import React, { useState } from 'react'
import Homeheader from '../../Components/Homehaeder/Homeheader'
import Seedra from '../../Components/Aboutseedra/Seedra'
import Homesed from '../../Components/Seedrahome/Homesed'
import Customer from '../../Components/Customer/Customer'
import Productsed from '../../Components/Sedproduct/Productsed'
import Footer from '../../Components/Footer/Footer'
function Seedraall() {
  return (
    <div>
      <Homeheader/>
      <Seedra />
      <Homesed/>
      <Customer/>
      <Productsed/>
      <Footer/>
    </div>
  )
}

export default Seedraall
