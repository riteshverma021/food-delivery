import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
                    
   <div className='footer-content'>
    <div className='left-footer'>
        <img src={assets.logo} alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam, inventore a recusandae ea totam, aperiam repellendus voluptatum nulla dolor dolore omnis quo? Beatae dolorem perspiciatis esse, recusandae ipsum veniam.</p>
        <div className='social'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
        </div>
    </div>

<div className='center-footer'>
    <h1>COMPANY</h1>
    <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
    </ul>
</div>
<div className='right-footer'>
    <h1>Get In Touch</h1>
    <li>+91 8901395938</li>
    <li>+091 6006226715</li>
    <li>tomato@gmail.com</li>

</div>
   </div>
   <hr />
<p>Copyright 2024 © Tomato.com-All Right Preserved</p>
 </div>
  )
}

export default Footer