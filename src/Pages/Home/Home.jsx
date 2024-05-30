import React from 'react'
import Homehero from '../../Components/Homehero/Homehero'
import Product from '../../Components/Product/Product'
import Blog from '../../Components/Blog/Blog'
import Footer from '../../Components/Footer/Footer'
// import Homeheader from '../../Components/Homehaeder/Homeheader'

function Home() {
  return (
    <div>
      {/* <Homeheader/> */}
      <Homehero/>
      <Product/>
      <Blog/>
      <Footer/>
      
    </div>
  )
}

export default Home
