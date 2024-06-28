import React from 'react'
import './App.css'
import img1 from '../images/img11-Hyundai-Venue-removebg-preview.png';
import img2 from '../images/img10-Hyundai-Verna-removebg-preview.png';
import img3 from '../images/img12-Maruti-Swift-removebg-preview.png';
import img4 from '../images/img13-Audi-Car-removebg-preview.png';
import img5 from '../images/img10-Hyundai-Verna-removebg-preview.png';
import img6 from '../images/img7-range-rover-removebg-preview.png';

const Ourcars = () => {
    return (
        // <div style={{ width: '100%' }} className='col-sm-12 col-md-6 col-lg-6 col-12 my-auto p-5 border border-3 '>
        //     <h1  style={{textAlign:'center'}} className='heading' > Our <span>Cars</span></h1>
<div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title ">Hyundai Venue</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className='card-end d-flex align-items-center  justify-content-between  mt-5'>
                                <h6>$22,440</h6>
                                <button id="btn-hover" className='btn btn-dark'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Hyundai-Verna</h5>
                            <p className="card-text">This is a short with supporting text below as a natural lead-in to additional information content card.</p>
                            <div className='card-end d-flex align-items-center justify-content-between mt-5'>
                                <h6>$22,440</h6>
                                <button id="btn-hover"  className='btn btn-dark'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                        <img src={img3} className="card-img-top" alt="..." />
                        <div className="card-body d-flex flex-column justify-content-between ">
                            <h5 className="card-title">Maruti Swift</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            <div className='card-end d-flex align-items-center justify-content-between mt-5'>
                                <h6>$22,440</h6>
                                <button id="btn-hover"  className='btn btn-dark'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row row-cols-1 row-cols-md-3 mt-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={img4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Audi</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className='card-end d-flex align-items-center justify-content-between mt-5'>
                                <h6>$22,440</h6>
                                <button  id="btn-hover"  className='btn btn-dark'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                        <img src={img5} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Swift </h5>
                            <p className="card-text">This is a short with supporting text below as a natural lead-in to additional information content card.</p>
                            <div className='card-end d-flex align-items-center justify-content-between mt-5 '>
                                <h6>$22,440</h6>
                                <button id="btn-hover"  className='btn btn-dark '>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={img6} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Range-Rover</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to  card with supporting textadditional content.</p>
                            <div className='card-end d-flex align-items-center justify-content-between mt-5 '>
                                <h6>$22,440</h6>
                                <button id="btn-hover"  className='btn btn-dark '>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            {/* </div> */}



         </div>
    )
}

export default Ourcars