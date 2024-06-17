  <div className='componentServicii flex justify-between w-[550px] 2xl:w-[500px] h-[200px] lg:h-auto nav:w-full hover:arrow-hover hover:cursor-pointer overflow-hidden'>
      <div className='flex flex-col justify-around'>
        <div className='w-[200px]'>
        <h2 className='text-5xl lg:text-3xl'>{props.produs}</h2>
        </div>
      
        <FaArrowRight className='arrow' size={50} color='#d60d18'/>
      </div>
      <div className='relative'>
          <div className='w-[60px] lg:w-[30px] h-full skew-x-[-20deg] bg-[#d60d18] absolute lg-[220px] nav:hidden z-[-1]'></div>
        <div className='w-[200px] lg:w-[100px] left-[-50px] h-full skew-x-[-20deg] bg-[#d60d18] absolute z-[-1]'></div>
        <div className='w-[60px] lg:w-[30px] h-full skew-x-[-20deg] bg-[#d60d18] absolute left-[-170px] lg:left-[90px] z-[-1]'></div>
      </div>
      <img src={props.imagine} alt="Anvelope" className='ml-[-2rem] h-[150px] z-[-1]' />
    </div>








    
import React from 'react'
import Styles from '../styles/contact.css'
import { IoIosPin } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
       
    <div id="contact" className="contact bg-red-700">


      <div className="content mb-16">
    <div>

    </div>

    <div>
    <div className="contactInfo lg:flex lg:pl-[10%]">
            <div className="box">
              <div className="icon"><IoIosPin className="text-red-700 fa-solid fa-location-pin"/></div>
              <div className="text text-white">
                <h3>Adresa</h3>
                <p>Bulevardul Iuliu Maniu 170A, Sector 6, Bucuresti, Romania</p>
              </div>

            </div>

            <div className="box">
              <div className="icon"><FaPhone className="text-red-700 fa-solid fa-phone"/></div>
              <div className="text text-white">
                <h3 className="tlf">Telefon</h3>
                <p className="nr">0774 685 499
                </p>
              </div>

            </div>


            <div className="box">
              <div className="icon"><MdEmail className="text-red-700 fa-solid fa-envelope"/></div>
              <div className="text text-white">
                <h3 className="eml">Email</h3>
                <p className="add">hashtagmen25@gmail.ro</p>
              </div>

            </div>

          </div>
    </div>
       
  
        <div className="container">
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.9537283110344!2d26.011003477126796!3d44.43411137107591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2015920b7fc03%3A0x6ce6eb10690dc847!2sHashtag%20Men!5e0!3m2!1sro!2sro!4v1718202108019!5m2!1sro!2sro" width="600" height="450"></iframe>
 

          
          <div className="contactForm bg-white">
            <form action="https://formsubmit.co/hashtagmen25@gmail.ro" method="POST" autocomplete="off">
              <h2>Trimite un mesaj</h2>
              <div className="inputBox">
                <input  type="text" name="name" className="input bg-transparent" required="required"/>
          <span>Nume</span>
              </div>
              <div className="inputBox">
                <input className="bg-transparent" type="text" name="tel" required="required"/>
                <span>Telefon</span>
              </div>
              <div className="inputBox">
                <input className="bg-transparent" type="email" name="email" required="required"/>
                <span>Email</span>
              </div>
              <div className="inputBox">
                <input type="text" name="mesaj" className="input bg-transparent" required="required"/>
                <span>Mesajul dumneavoastra...</span>
              </div>
              <div className="inputBox">
                <input  type="submit" name="" value="Send"/>
              </div>
            </form>
          </div>
          
        </div>
      </div>


    </div>
  )
}

export default Contact
