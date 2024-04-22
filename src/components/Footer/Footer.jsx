import React from 'react';
import './Footer.css'
import { assets } from '../../assets/assets';
function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div
                    className='footer-left'>
                    <img src={assets.logo} />
                    <p> This is Our College canteen</p>
                    <div className='contacts'>
                        <img src={assets.facebook_icon} />
                        <img src={assets.twitter_icon} />
                        <img src={assets.linkedin_icon} />

                    </div>

                </div>
                <div className='footer-right'>
                    <h2>Get in touch</h2>
                    <ul>
                        <li>phone : +91 9666720127</li>
                        <li>E-mail : tharun1322123@gmail.com</li>
                    </ul>
                </div>
                <div className='footer-center'>
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>Abourt Us</li>
                        <li> Delivary</li>
                        <li>Privacy policy</li>
                    </ul>

                </div>


            </div>
            <hr></hr>
            <p className='footer-copyright'>@copyright</p>

        </div>
    )
}

export default Footer
