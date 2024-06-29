import React from 'react'
import Homehero from '../../Components/Homehero/Homehero'
import Product from '../../Components/Product/Product'
import Blog from '../../Components/Blog/Blog'
import Helps from '../../Components/Helps/Helps'
import Homeheader from '../../Components/Homehaeder/Homeheader'
import Footer from '../../Components/Footer/Footer'
function Home() {
  return (
    <div>
      <Homeheader/>
      <Homehero/>
      <Product/>
      <Blog/>
      <Helps/>
      <Footer/>
    </div>
  )
}

export default Home
