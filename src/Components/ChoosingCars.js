import React from 'react';
import './App.css';

export const ChoosingCars = () => {
    return (



        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 text-center ">
            <div className="col mt-2">
                <div id='choosing-box' className="card1 pt-2">
                    <i style={{ margin:'30px auto', color:' var(--bs-icon-color)' }} className="fa-solid fa-coins fa-2xl"></i>
                    <div className="card-body">
                        <h5 className="card-title mt-3">Financing Option</h5>
                        <p className="card-text mt-3">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                    </div>
                </div>
            </div>

            <div className="col mt-2">
                <div id='choosing-box' className="card1 pt-2 ">
                    <i style={{ margin:'30px auto', color:' var(--bs-icon-color)' }} class="fa-solid fa-users fa-2xl"></i>

                    <div className="card-body">
                        <h5 className="card-title mt-3">Satisfied Customers</h5>
                        <p className="card-text  mt-3">This is a short with supporting text below as a natural lead-in to additional information content card.</p>

                    </div>
                </div>
            </div>

            <div className="col mt-2">
                <div id='choosing-box' className="card1 pt-2">
                    <i style={{ margin:'30px auto', color:' var(--bs-icon-color)' }} class="fa-solid fa-truck fa-2xl"></i>
                    <div className="card-body">
                        <h5 className="card-title mt-3">Fast & Easy Booking</h5>
                        <p className="card-text mt-3">This is a longer card with supporting text below as a natural lead-in to additional content.</p>

                    </div>
                </div>
            </div>

        </div>




    )
}
