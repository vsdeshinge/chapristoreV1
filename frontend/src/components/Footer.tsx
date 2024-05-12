import { FC } from "react";
import { Link } from "react-router-dom";
import './footer.css'
import footer_logo from '../assets/footer_logo.png'

import instgram_icon from '../assets/instagram_icon.png'
import pint_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>The Chapri Store</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li> <Link
              to="/products"
             
            >
              Products
            </Link></li>
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

export default Footer;
