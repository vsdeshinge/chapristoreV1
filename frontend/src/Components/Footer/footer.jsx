import React from 'react'
import './footer.css'
import footer_logo from '../Assets/footer_logo.png'

import instgram_icon from '../Assets/instagram_icon.png'
import pint_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        {/* <p>The Chapri Store</p> */}
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offers</li>
        <li>about</li>
        <li>Contact</li>
     </ul>
     <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instgram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pint_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copywrite 2024 | All Rights Reserved to Maharshi Group</p>
      </div>
    </div>
  )
}

export default footer
