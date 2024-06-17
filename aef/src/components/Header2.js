"use client"
import React, { useState } from 'react';
import Style from '../styles/navbar.css';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../assets/logo.png"
import Dacia from "../assets/dacia.png"
import Renault from "../assets/renault.png"

const Header2 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleLinkClick = () => {
    setIsChecked(false); // Set isChecked state to false when a link is clicked
  };

  return (
    <div>
      <header className="header py-4 justify-center" id="header">
        
        <div className='w-[1250px] flex flex-row items-center justify-between'>
 
      
        <Link className="text-white text-2xl" href="/">
        <div className='flex'>
        <img src={Logo.src} className='w-[200px] xs:w-[120px] logo'/>
        <div className='hidden nav:block'>
        <div className='flex flex-row justify-center ml-6'>
          <img src={Dacia.src} className='w-[100px] xs:w-[70px] logo'/>
          <img src={Renault.src} className='w-[100px] ml-4 xs:w-[70px] logo'/>
          </div>
        </div>
        
        </div>
        
        </Link>

          
       
     

        <input
          type="checkbox"
          id="check"
          checked={isChecked} // Use isChecked state to control the checkbox
          onChange={() => setIsChecked(!isChecked)} // Toggle isChecked state when checkbox is clicked
        />
        <label htmlFor="check" className="icons">
          <FaBars size={30} className="bx bx-menu" id="menu-icon" />
          <FaTimes size={30} className="bx bx-x" id="close-icon" />
        </label>

        <nav className="navbar">
          <Link id="acasa-navbar" href="/" style={{ "--i": 0 }} onClick={handleLinkClick}>
            Acasa
          </Link>
          <Link
            id="domenii-navbar"
            href="/servicii"
            style={{ "--i": 1 }}
            onClick={handleLinkClick}
          >
            Servicii
          </Link>
          <Link
            id="contact-navbar"
            href="/contact"
            style={{ "--i": 2 }}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        
        </nav>
        <div className='flex gap-8 nav:hidden'>
        <img src={Dacia.src} className='w-[100px] xs:w-[180px] logo'/>
        <img src={Renault.src} className='w-[100px] xs:w-[180px] logo'/>
        </div>
        </div>
      </header>
    </div>
  );
};

export default Header2;
