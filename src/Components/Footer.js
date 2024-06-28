import React from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'


function Footer() {
    return (
        <div style={{ width: '100%' }} className='footer'>
            <div style={{ width: '100%' }} className='row col-sm-12 col-md-6 col-lg-3 col-12  '>
                <div className='col pe-5 mt-2'>
                    <h3 className='mb-3'>WheelsDeal</h3>                   
                    <p>Lorem ipsm dolor sit amet consectetur adipisicing elit . Libero,laborum!ipsm dolor sit amet consectetur adipisicing elit lemens offbars.</p>
                </div>

                <div className='col mt-2'>
                    <h3 className='mb-3'>Page Links</h3>
                   
                    <NavLink id="links" className="nav-link  active " aria-current="page" to="/">Home</NavLink>

                    <NavLink id="links"  className="nav-link " to="/about">About Us</NavLink>

                    <NavLink id="links"  className="nav-link " to="/cars">Our Cars</NavLink>

                    <NavLink id="links" className="nav-link" to="/services">Services</NavLink>

                </div>

                <div className='col mt-2'>
                    <h3 className='mb-3'>Used Cars for Sale</h3>
                   
                    <h6 id="links">Toyota Camry</h6>
                    <h6 id="links">Chevrole corvete</h6>
                    <h6 id="links">Volkswagen Go!</h6>
                    <h6 id="links">Nissan Rogue</h6>
                </div>

                <div className='col mt-2'>
                    <h3 className='mb-3'>Learn More</h3>
                   
                    <h6 id="links">User-friendly</h6>
                    <h6 id="links">Search and Filters</h6>
                    <h6 id="links">Secure Payment</h6>
                    <h6 id="links">Geolocation Services</h6>

                </div>

            </div>


            <div className='copyright text-center mt-4 mb-0 pt-2 '>
                <hr />
                <p>@copyright developed by <span>Nav Dhiman </span>| All right reserved</p>
            </div>
            
        </div>
    )
}

export default Footer