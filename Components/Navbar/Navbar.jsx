import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import menuicon from './menuicon.png';
//Edusity/src/logo.jpeg

const Navbar = () => {

  const[sticky,setSticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.screenY > 50 ? setSticky(true) : setSticky(false);
    })  },[]);
  
    const [mobileMenu, setMobileMenu]=useState(false);
    const toggleMenu=()=>{
         mobileMenu? setMobileMenu(false):setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky ? 'dark-nav': ''}`}>
      <ul className={mobileMenu ? '':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}className='btn'>Contact us</Link></li>
      </ul>
      <img src={menuicon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
