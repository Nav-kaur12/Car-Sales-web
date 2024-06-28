import React from 'react'
import Marquee from 'react-fast-marquee'
import './App.css';
import img1 from '../images/img14-Ferrari-removebg-preview (1).png';
import img2 from '../images/img2-GMC-Typhoon-removebg-preview.png';
import img3 from '../images/img9-Mahindra-thar-removebg-preview.png';
import img4 from'../images/img13-Audi-Car-removebg-preview.png';
import img5 from '../images/img7-range-rover-removebg-preview.png';
import img6 from '../images/img6-removebg-preview.png';


const FeaturedCar = () => {
  return (
 
    <div>
         <div style={{ width: '100%' }} className='col-sm-12 col-md-6 col-lg-6 col-12 my-auto p-5 border border-3 '>
         <h1  style={{textAlign:'center'}} className='heading' > Featured <span>Cars</span></h1>
         <p style={{textAlign:'center'}}>Lorem ipsm dolor sit amet consectetur adipisicing elit . Libero,laborum!
         </p>
         <div>
            <Marquee pauseOnHover speed={100}>
             
                <div className='images'>
                    <img src={img1} alt=".."></img>                
                    <h5><span>Ferrari</span></h5>
                    <h6>Starting at $95,776</h6>
                    </div>
               
                
                <div className='images'>
                    <img src={img2} alt=".."></img>
                    <h5><span>GMC Typhoon</span></h5>
                    <h6>Starting at $95,776</h6>
                </div>
                <div className='images'>
                    <img src={img3} alt=".."></img>
                    <h5><span>Mahindra Thar</span></h5>
                    <h6>Starting at $95,776</h6>
                </div>
                <div className='images'>
                    <img src={img4} alt=".."></img>
                    <h5><span>Audi</span></h5>
                    <h6>Starting at $95,776</h6>
                </div>
                <div className='images'>
                    <img src={img5} alt=".."></img>
                    <h5><span>Range Rover</span></h5>
                    <h6>Starting at $95,776</h6>
                </div>
                <div className='images'>
                    <img src={img6} alt=".."></img>
                    <h5><span>Swift</span></h5>
                    <h6>Starting at $95,776</h6>
                </div>

            </Marquee>
         </div>
         </div>      

    </div>
    
   
  )
}

export default FeaturedCar