import React from 'react'
import '../../../App.css';
import "./ContactUs.css";
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import NavbarLand from '../../Header/NavbarLand';

const ContactUs = () => {
  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  const submitHandler = (events) =>{
    events.preventDefault();
    alert("Message Send Successfully")
  }
  return (
    <div>
      {isLoggedIn ? <Navbar /> : <NavbarLand />} 
       <h1 className='heading'>Contact Us</h1>
       <div className="flexed">
          <div className=" boxed">
              <h1 className='subheadig'>SEND FEEDBACK</h1>
              <br/>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Mobile"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className='btn'>
                Send Message
              </button>
            </form>
          </div>
          <div className='boxed'>
            <h1 className="subheading">OUR LOCATION</h1>
            <br/>
            <div className="info-item">
              <i
                className="fas fa-mobile-alt"
                style={{ color: "green", fontSize: "24px" }}
              ></i>
              <span>+1800-xxx-xxx</span>
            </div>
            <div className="info-item">
              <i
                className="far fa-envelope"
                style={{ color: "green", fontSize: "24px" }}
              ></i>
              <span>help@epay.com</span>
            </div>
            <div className="info-item">
              <i
                className="fas fa-map-marker-alt"
                style={{ color: "green", fontSize: "24px" }}
              ></i>
              <span>ePay,Pune,Mahrashtra</span>
            </div>
            <div className='map-section '>
        <iframe
          title='Location'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.856499781422!2d73.80852827579716!3d18.535385768720335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf40bef092f1%3A0x48c508ccaa4ef9a!2sCentre%20For%20Development%20Of%20Advanced%20Computing%2C%20Innovation%20Park!5e0!3m2!1sen!2sin!4v1708083902141!5m2!1sen!2sin"
          width='100%'
          height='350'
          style={{ border: "solid 2px black", borderRadius:"10px" }}
          allowFullScreen=''
          loading='lazy'
        ></iframe>
      </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default ContactUs
