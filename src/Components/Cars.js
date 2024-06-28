import React from 'react';
import OurCars from './Ourcars';


const Cars = () => {
  return (

    <div style={{ width: '100%' }} className='col-sm-12 col-md-6 col-lg-6 col-12 my-auto p-5 border border-3 '>
      <p id="headings" style={{ textAlign: 'center' }} className='heading' > OUR CARS</p>     
     <OurCars />
      <br />
      <OurCars />

    </div>


  )
}

export default Cars
