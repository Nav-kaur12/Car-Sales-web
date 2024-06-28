import React from 'react'

function ContactUs() {
  return (
    <>
    <div className='container pt-4'>
      <div>
      <p id="headings" style={{ textAlign: 'center' }} className='heading' > CONTACT US</p>
        <p style={{ textAlign: 'center',marginBottom:'30px' }} >Lorem ipsum dolorsit amet consectetur adipising elitfd mse fsdogsg gjasodg <br/>
        Lorem ipsum dolorsit amet consectetur adipising elitfd mse dsqrismi!</p>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-6 col-lg-6 col-12'>
          <h1>Get in Touch</h1>
          <p>Lorem ipsum dolorsit amet consectetur adipising elitfd mse dsqrismi!dolorsit amet consectetur adipising elitfd mse dsqrismi!</p>

          <div className='col p-1'>
            <div className="address d-flex gap-3 align-items-center ">
              <div className='round-box '>
                <i class="fa-solid fa-location-dot fa-xl"></i>
              </div>

              <div className="lh-1">
                <h5>Address</h5>
                <p>Lorem ipsum dolorsit dsqrismi!</p>
              </div>
            </div>

            <div className="address d-flex gap-3 align-items-center">
              <div className='round-box '>
                <i class="fa-solid fa-phone fa-xl"></i>
              </div>

              <div className="lh-1">
                <h5>Address</h5>
                <p>Lorem ipsum dolorsit dsqrismi!</p>
              </div>
            </div>

            <div className="address d-flex gap-3 align-items-center">
              <div className='round-box '>
                <i class="fa-solid fa-square-envelope fa-xl"></i>
              </div>

              <div className="lh-1">
                <h5>Address</h5>
                <p>Lorem ipsum dolorsit dsqrismi!</p>
              </div>
            </div>
          </div>

          <div className='mb-3'>

            <div>
              <h4 className='mt-5'>Follow Us</h4></div>
            <div className='icon d-flex fa-xl align-items-center gap-3 '>
              <div className='round-box '>
                <i class="fa-brands fa-whatsapp"></i>
              </div>
              <div className='round-box '>
                <i class="fa-brands fa-twitter"></i>
              </div>
              <div className='round-box '>
                <i class="fa-brands fa-instagram"></i>
              </div>
              <div className='round-box '>
                <i class="fa-brands fa-telegram"></i>
              </div>
              <div className='round-box '>
                <i class="fa-brands fa-facebook-f"></i>

              </div>

            </div>
          </div>
        </div>

        {/* form col */}
        <div className='col-sm-12 col-md-6 col-lg-6 col-12  ps-5 mt-2' >
       
          <form className='d-flex flex-column justify-content-center align-items-center ps-5'>
            <div><h1>Send Us a Message</h1></div>
          
           
            <div style={{backgroundColor:'whitesmoke'}} className=' col-10 p-3 pe-0'>
            <input className=' col-11 mt-3' type='text' placeholder='Enter your name'/>
            <br/>
            <input className='col-11 mt-3' type='mail' placeholder='Enter your Email'/>
            <br/>
            <input className='col-11 mt-3' type='text' placeholder='Phone Number'/>
            <br/>
            <textarea className='col-11 mt-3' placeholder='Your Message'/>
            </div>
            <button style={{ backgroundColor:'var(--bs-button-color)'}} className='rounded mt-3 p-1'>Send Message</button>

          </form>

        </div>
      </div>
    </div>
    <div className='container-fluid mt-4'>
    <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13645.78826502634!2d76.47939644946268!3d31.23604502987055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39054afeb156b1e5%3A0x362637c4e6562aa4!2sKeshgarh%20Sahib%2C%20Anandpur%20Sahib%2C%20Punjab%20140118!5e0!3m2!1sen!2sin!4v1717841184517!5m2!1sen!2sin" width="100%" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </div>
    </>
  )
}

export default ContactUs