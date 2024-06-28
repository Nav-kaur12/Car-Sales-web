import React from 'react'
import newsimg1 from '../images/carNews8.jpg'
import newsimg2 from '../images/carNews1.jpg'
import newsimg3 from '../images/carNews3.jpg'
import newsimg4 from '../images/CarNews2.webp'
import newsimg5 from '../images/carNews6.jpg'
import newsimg6 from '../images/carNews4.jpg'
import newsimg7 from '../images/carNews5.webp'

import './App.css'

const CarNews = () => {
  return (
    <div>
      <div style={{ width: '100%' }} className='col-sm-12 col-md-6 col-lg-6 col-12 my-auto p-5 border border-3 '>
        <h1 style={{ textAlign: 'center' }} className='heading' > Car <span>News & Advices</span></h1>
        <p style={{ textAlign: 'center' }}>Lorem ipsm dolor sit amet consectetur adipisicing elit . Libero,laborum!
        </p>
       

        <div className='carNewsbody'>
          <div className='carScroll'>
            <div className='image'>
              <img src={newsimg1} alt="..."/>            
            <div className='newheading'> 
              <h6>laogakjos kakjofoerr dfkasjofoea kdfajfjoe fao</h6>
            </div>
            </div>
          </div>

          <div className='carScroll'>
            <div className='image'>
              <img src={newsimg6} alt="..."/>            
            <div className='newheading'> 
              <h6>laogakjos kakjofoerr dfkasjofoea kdfajfjoe fao</h6>
            </div>
            </div>
          </div>

          <div className='carScroll'>
            <div className='image'>
              <img src={newsimg7} alt="..."/>            
            <div className='newheading'> 
              <h6>laogakjos kakjofoerr dfkasjofoea kdfajfjoe fao</h6>
            </div>
            </div>
          </div>

          <div className='carScroll'>
            <div className='image'>
              <img src={newsimg3} alt="..."/>
            </div>
            <div className='newheading'> 
              <h6>laogakjos kakjofoerr dfkasjofoea kdfajfjoe fao</h6>
            </div>
          </div>

          <div className='carScroll'>
            <div className='image'>
              <img src={newsimg2} alt="..."/>
            </div>
            <div className='newheading'> 
              <h6>laogakjos kakjofoerr dfkasjofoea kdfajfjoe fao</h6>
            </div>
          </div>

          <div className='carScroll'>
            <div className='image'>
              <img src={newsimg4} alt="..."/>
            </div>
            <div className='newheading'> 
              <h6>laogakjos kakjofoerr dfkasjofoea kdfajfjoe fao</h6>
            </div>
          </div>

          <div className='carScroll'>
            <div className='image'>
              <img src={newsimg5} alt="..."/>
            </div>
            <div className='newheading'> 
              <h6>laogakjos kakjofoerr dfkasjofoea kdfajfjoe fao</h6>
            </div>
          </div>


        </div>

        </div>
      
    </div>
  )
}

export default CarNews