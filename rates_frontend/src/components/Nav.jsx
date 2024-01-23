import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Navstyles from './Nav.module.css'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";


const Nav = () => {

  const location = useLocation()
  const [closeMenu, setCloseMenu] = useState()
  const [openMenu, setOpenMenu] = useState()

  return (
    <div>
      {
        location.pathname === "/" ?  
        <nav className={Navstyles.nav_container}>
          <span className={Navstyles.logo}><Link to='/'>CediRates</Link></span>
          <div className={Navstyles.nav_mobile_menu}>
            <ul className={Navstyles.menu_links}>
              <li><NavLink to='/exchangerates' activeclassname={Navstyles.active}>Exchange Rates</NavLink></li>
              <li><NavLink to='/fuelprices' activeclassname={Navstyles.active}>Fuel Prices</NavLink></li>
              <li><NavLink to='businesses' activeclassname={Navstyles.active}>For Businesses</NavLink></li>
              <li><NavLink to='converter' activeclassname={Navstyles.active}>Currency Converter</NavLink></li>
            </ul>
            <div className={Navstyles.btns_container}>
              <button className={Navstyles.login}><Link to='/login'>Login</Link></button>
              <button className={Navstyles.signup}><Link to='/signup'>Sign up</Link></button>
            </div>
          </div>
          <div className={Navstyles.openandclose_icons_container}>
            <FaBars className={Navstyles.hamburger}/>
            <AiOutlineClose className={Navstyles.close}/>
          </div>
        </nav> :  
        <nav className={Navstyles.nav_containers}>
          <span className={Navstyles.logos}><Link to='/'>CediRates</Link></span>
          <ul className={Navstyles.menu_linkss}>
            <li><NavLink to='/exchangerates' activeclassname={Navstyles.active}>Exchange Rates</NavLink></li>
            <li><NavLink to='/fuelprices' activeclassname={Navstyles.active}>Fuel Prices</NavLink></li>
            <li><NavLink to='businesses' activeclassname={Navstyles.active}>For Businesses</NavLink></li>
            <li><NavLink to='converter' activeclassname={Navstyles.active}>Currency Converter</NavLink></li>
          </ul>
          <div className={Navstyles.btnss_container}>
            <button className={Navstyles.login}><Link to='/login' className={Navstyles.login_link}>Login</Link></button>
            <button className={Navstyles.signup}><Link to='/signup'>Sign up</Link></button>
          </div>
          <div className={Navstyles.openandclose_icons_container}>
            <FaBars className={Navstyles.hamburger}/>
            <AiOutlineClose className={Navstyles.close}/>
          </div>
        </nav>
      }
    </div>
  )
}

export default Nav