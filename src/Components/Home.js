import React from 'react'
import Header from './Header'
import FeaturedCar from './FeaturedCar'
import Ourcars from './Ourcars'
import { ChoosingCars } from './ChoosingCars'
import CarNews from './CarNews'
import Mission from './Mission'
// import Navbar from '.Components/Navbar';


const Home = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Header/>
        <FeaturedCar/>

        <div style={{ width: '100%' }} className='col-sm-12 col-md-6 col-lg-6 col-12 my-auto p-5 border border-3 '>
        <h1  style={{textAlign:'center'}} className='heading mb-4' > Our <span>Mission</span></h1>
          <Mission/>
        </div>


        <div style={{ width: '100%' }} className='col-sm-12 col-md-6 col-lg-6 col-12 my-auto p-5 border border-3 '>
        <h1  style={{textAlign:'center'}} className='heading mb-4' > Our <span>Cars</span></h1>
          <Ourcars/>
        </div>
        <div style={{ width: '100%' }} className='col-sm-12 col-md-6 col-lg-6 col-12 my-auto  p-5 border border-3 '>
         <h1  style={{textAlign:'center'}} className='heading' > Why choose <span>Our Cars</span>?</h1>
         <p style={{textAlign:'center'}}>Lorem ipsm dolor sit amet consectetur adipisicing elit . Libero,laborum!
         </p>
        <ChoosingCars/>
        </div>
        <CarNews/>
        
        
        

    </div>
  )
}

export default Home