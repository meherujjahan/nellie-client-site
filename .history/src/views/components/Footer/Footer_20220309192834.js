import Box from '@mui/material/Box';
import React from 'react';
import footerLogo from '../../../Images/footer-logo_95e3923f-73d2-4f80-9117-8583b07d1fd1_x40@3x (1).webp';
import './Footer.css';

const Footer = () => {
    return (
      <>
      <div className='footer' style={{ width: '100%' }}>
      <Box className='footer-section' sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <Item> <div className='footer-section-1'>
              <img src={footerLogo} alt="" />
              <p>Nellie is a Nail Polish Responsive <br /> Shopify Theme where you can display all your nail <br /> designs, nail polish, nail art, nail beauty, nail care,<br /> nail manicure, beauty nail and spa services</p>
              <b>SUBSCRIBE TO NEWSLETTER</b> <br />
              <input type="text" placeholder='Email' /><button>SUBSCRIBE</button>
          </div></Item>
        <Item> <div>
          <h5>NAVIGATE</h5>
          <p>HomePage</p> 
          <p>Careers</p> 
          <p>News</p> 
          <p>Affiliates</p> 
          </div></Item>
        <Item> <div>
        <h5>RESOURCES</h5>
          <p>Blog</p> 
          <p>Documentation</p> 
          <p>Community</p>
          <p>Pricing</p>
          <p>Design Case</p> 
        </div></Item>
        <Item><div>
        <h5>COMPANY</h5>
          <p>Services</p> 
          <p>About Us</p> 
          <p>Happy Customer</p>
          <p>Portfolio</p>
          <p>Help Center</p> 
        </div></Item>
        <Item>  <div>
        <h5>HELP</h5>
          <p><i class="fa-solid fa-phone"></i>  +49 892 358 75</p> 
          <p><i class="fa-solid fa-envelope"></i>  contact@molti.com</p> 
          <p><i class="fa-solid fa-location-dot"></i>  49 Uniqe Square D, New York,</p> 
        </div></Item>
        <div>
        <div className='footer-section-2'>
       <p> &copy; Copyright Nellie 2020. Made with by ❤ SamarJ.</p>
       <p>Privacy Policy • Terms of Service • Cookie Policy</p>
       <div><i class="fa-brands fa-facebook"></i>   <i class="fa-brands fa-twitter"></i>  <i class="fa-brands fa-instagram"></i>  <i class="fa-brands fa-dribbble"></i></div>
        </div>
      </div>
     
      </Box>
    </div>
        
      </>
    );
};

export default Footer;