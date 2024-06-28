import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../images/hero-imgg-removebg-preview.png';
import './App.css';


const Header = () => {
  
  return (
    <>
    <div  className=' container-fluid bg-black text-white ' >
      <div className='row py-5'>
        <div className='col-sm-12 col-md-6 col-lg-6 col-12 my-auto ps-5'>          
          <h1 className='fs-1'>Find Your Perfect</h1> <h1> Ride Today</h1>
          <p className='fs-4 fw-semibold'>Over 1000+ New Cars Available Here</p>
          <p className='text-sm lg:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo aliquid quasi animis itaque, atque praesentium rerum architecto numquam perspiciatis!
          </p>
          <div className='d-flex gap-3 mb-5 mt-4'>
            <button id="exp_btn" className="btn" > <NavLink className="fw-semibold text-decoration-none " id="exp_btn"  to="/cars">Our Cars</NavLink></button>
            <button id="btn-hover" className='btn btn-dark border border-2 border-danger text-align-center fw-semibold' >See More</button>
          </div>          
        </div>

        <div id="hero-img1"  className=' col-sm-12 col-md-6 col-lg-6 col-12 pe-5'>
          <img style={{height:'400px', width:'100%'}} className='img-fluid' src={img} alt="..." />
        </div>

      </div>
    </div>
      
   
    </>
  )
}

export default Header
