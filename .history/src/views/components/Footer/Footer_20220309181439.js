import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
        <div className='footer-section'>
         
         <div className='footer-section-1'>
              <img src={moltiLogo} alt="" />
              <p>Molti is a Professionally Designed <br />  Multipurpose Child Theme for Divi. And you <br /> can use it to create almost any kind of Website with Divi.</p>
              <b>SUBSCRIBE TO NEWSLETTER</b> <br />
              <input type="text" placeholder='Email' /><button>SUBSCRIBE</button>
          </div>
          <div>
          <h5>NAVIGATE</h5>
          <p>HomePage</p> 
          <p>Careers</p> 
          <p>News</p> 
          <p>Affiliates</p> 
          </div>
        <div>
        <h5>RESOURCES</h5>
          <p>Blog</p> 
          <p>Documentation</p> 
          <p>Community</p>
          <p>Pricing</p>
          <p>Design Case</p> 
        </div>
        <div>
        <h5>COMPANY</h5>
          <p>Services</p> 
          <p>About Us</p> 
          <p>Happy Customer</p>
          <p>Portfolio</p>
          <p>Help Center</p> 
        </div>
        <div>
        <h5>HELP</h5>
          <p><i class="fa-solid fa-phone"></i>  +49 892 358 75</p> 
          <p><i class="fa-solid fa-envelope"></i>  contact@molti.com</p> 
          <p><i class="fa-solid fa-location-dot"></i>  49 Uniqe Square D, New York,</p> 
        </div>
      </div>
      <div>
        <div className='footer-section-2'>
       <p> &copy; Copyright Molti 2020. Made with by ❤ SamarJ.</p>
       <p>Privacy Policy • Terms of Service • Cookie Policy</p>
       <div><i class="fa-brands fa-facebook"></i>   <i class="fa-brands fa-twitter"></i>  <i class="fa-brands fa-instagram"></i>  <i class="fa-brands fa-dribbble"></i></div>
        </div>
      </div>
      </div>
    );
};

export default Footer;