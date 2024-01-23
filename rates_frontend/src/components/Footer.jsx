import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaTelegram, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='footer_section'>
        <div className='footer_left_section'>
            <span className='footer_logo'><Link to='/'>CediRates</Link></span>
            <div className='about_section'>
                <div>
                    <h5>About</h5>
                    <p><Link>Terms of Service</Link></p>
                    <p><Link>Privacy Policy</Link></p>
                </div>
                <div>
                    <h5>Services</h5>
                    <p><Link>Exchange Rates</Link></p>
                    <p><Link>Fuel Prices</Link></p>
                    <p><Link>Currency Converter</Link></p>
                </div>
                <div>
                    <h5>For Businesses</h5>
                    <p><Link>Listing</Link></p>
                </div>
                <div>
                    <h5>Enquiries</h5>
                    <p><Link>Help</Link></p>
                </div>
            </div>
        </div>
        <div className='footer_right_section'>
            <h4>Join Our Community</h4>
            <div className='footer_icons'>
                <FaTelegram className='footer_icon'/>
                <FaFacebook className='footer_icon'/>
                <FaXTwitter className='footer_icon'/>
                <FaInstagram className='footer_icon'/>
                <FaWhatsapp className='footer_icon'/>
            </div>
        </div>
    </footer>
  )
}

export default Footer