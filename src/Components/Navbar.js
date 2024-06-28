import React from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'
import logo from '../images/car_logo.jpg'


const Navbar = () => {
  return (
    <>
    <div>
        <div>
            <nav className="navbar navbar-expand-lg bg-dark py-2 px-4">
                <div className="container-fluid">
                  <img style={{height:'50px', width:'50px', borderRadius:'50%'}} src={logo} alt=".."/>
                    <NavLink className="navbar-brand text-light fs-4 fw-semibold ms-3" to="/"><span>WheelsDeal</span></NavLink>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-light" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-2 fs-5 ">
                            <li  className="nav-item">
                                <NavLink id="page" 
                               className="nav-link  active " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink   id="page" className="nav-link " to="/about">About Us</NavLink>
                            </li>
                            <li  className="nav-item">
                                <NavLink id="page" className="nav-link " to="/cars">Our Cars</NavLink>
                            </li> 
                            <li className="nav-item">
                                <NavLink id="page" className="nav-link" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink id="page" className="nav-link" to="/contactUs">Contact Us</NavLink>
                            </li>
                        </ul>
                        <button id="btn-hover" type="button" className="btn btn-dark border border-2 border-danger text-align-center fw-normal fs-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign In</button>
                    </div>
                </div>
            </nav>
        </div>
    </div>

    {/* Modal sign in box */}

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
  <div className="modal-header">
    <h1 className="modal-title fs-5" id="exampleModalLabel">Sign in</h1>
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div className="modal-body">
  <form>
<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
<input type="password" className="form-control" id="exampleInputPassword1"/>
</div>
<div className="mb-3 form-check">
<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
</div>
</form>
  </div>
  <div className="modal-footer">
    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="button" className="btn btn-primary">Submit</button>
  </div>
</div>
</div>
</div>




    </>
  )
}

export default Navbar