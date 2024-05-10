import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import hero_image2 from '../Assets/hero_image2.png'
import hero_image3 from '../Assets/hero_image3.png'


const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
         {/* <h2>NEW ARRIVALS</h2> */}
        <div>
            <div className="hero-hand-icon">
                <p>SALE</p>
                {/* <img src={hand_icon} alt="" /> */}
            </div>
            <h5>UP TO</h5>
            <h6>OFF</h6>
            <h4>70%</h4>

        </div>


        <div className="hero-lastest-button">
            <div>Lightweight</div>
            <div>Hawai t-shirt</div>
            <img src={arrow_icon} alt="Arrow imag" />
        </div>

        </div>
            <div className="hero-right">
            <img src={hero_image3} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
