import React from 'react'
import abtimg1 from '../images/carNews3.webp'
import abtimg2 from '../images/carNews8.jpg'
import abtimg3 from '../images/carNews9.jpg'



const About = () => {
  return (
    <div  style={{ width: '100%' }} className='border border-2 p-4'>
      <div>
        <p id="headings" style={{ textAlign: 'center' }} className='heading' > ABOUT US</p>

        <div style={{ width: '100%' }} className='row col-sm-12 col-md-12 col-lg-6 col-12 p-4'>
          <div style={{ width: '100%' }} className='col '>
            <img style={{ width: '100%' }} className='img-fluid' src={abtimg1} alt='..' />
          </div>
          <div className='col-lg-7 pt-3'>
            <h2>Our Vision</h2>
            
            <h4>Empower individuals to achieve sustainable mobility solutions and inspire a positve impact on the environment.</h4>
            <br />
            <p>Lorem ipsum dolorsit amet consectetur adipising elitfd mse dsqrismi!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nemo modi magnam maiores inventore sapiente molestiae mollitia amet cumque odio optio reprehenderit voluptates eaque non illo iusto, excepturi unde omnis dicta aliquid labore? Quasi mollitia sunt quo distinctio, perspiciatis ipsum pariatur natus totam dolores vero.</p>
          </div>
        </div>

        <div style={{ width: '100%' }} className='row col-sm-12 col-md-12 col-lg-6 col-12 p-4 '>
          <div className='col-lg-7 pt-3'>
            <h2>Our Approach</h2>
           
            <h4>Empower individuals to achieve sustainable mobility solutions and inspire a positve impact on the environment.</h4>
            <br />
            <p>Lorem ipsum dolorsit amet consectetur adipising elitfd mse dsqrismi!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nemo modi magnam maiores inventore sapiente molestiae mollitia amet cumque odio optio reprehenderit voluptates eaque non illo iusto, excepturi unde omnis dicta aliquid labore? Quasi mollitia sunt quo distinctio, perspiciatis ipsum pariatur natus totam dolores vero.</p>
          </div>
          <div style={{ width: '100%' }} className='col'>
            <img style={{ width: '100%' }} className='img-fluid' src={abtimg2} alt='..' />
          </div>
        </div>

        <div style={{ width: '100%' }} className='row col-sm-12 col-md-12 col-lg-6 col-12 p-4'>
          <div style={{ width: '100%' }} className='col '>
            <img style={{ width: '100%' }} className='img-fluid' src={abtimg3} alt='..' />
          </div>
          <div className='col-lg-7 pt-3'>
            <h2>Our Vision</h2>
            
            <h4>Empower individuals to achieve sustainable mobility solutions and inspire a positve impact on the environment.</h4>
            <br />
            <p>Lorem ipsum dolorsit amet consectetur adipising elitfd mse dsqrismi!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem nemo modi magnam maiores inventore sapiente molestiae mollitia amet cumque odio optio reprehenderit voluptates eaque non illo iusto, excepturi unde omnis dicta aliquid labore? Quasi mollitia sunt quo distinctio, perspiciatis ipsum pariatur natus totam dolores vero.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About