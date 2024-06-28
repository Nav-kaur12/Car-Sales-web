import React from 'react';

const Newcars = ({ closeTab }) => {
  return (
    <div className='container-fluid bg-white text-black'>
      <div className='row py-5'>
        <div className='col-12'>
          <h1 className='fs-1'>Our Cars</h1>
          <p className='fs-4 fw-semibold'>Discover a wide range of cars we have to offer.</p>
          <button onClick={closeTab} className="btn btn-dark">Close Tab</button>
        </div>
      </div>
    </div>
  );
};

export default Newcars;
