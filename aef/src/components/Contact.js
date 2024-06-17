
import React from 'react'
import Styles from '../styles/contact.css'
import { IoIosPin } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
       
    <div id="contact" className="contact bg-red-700 pb-16 mt-16 py-16">
   <div className='flex flex-col gap-8'>
        <h2 className='text-4xl xs:text-3xl text-center font-semibold text-white uppercase'>Contactează-ne!</h2>
        <p className='text-2xl xs:text-lg xs:px-4 text-center text-white'>Te așteptăm la noi în locație sau ne poți contacta printr-una din metodele de mai jos!</p>
      </div>
    <div className='w-full px-8 4xl:flex 4xl:justify-center 4xl:mx-auto'>
    
    <div className="flex justify-evenly 4xl:flex-col 4xl:gap-y-8 4xl:justify-center my-16 w-full 4xl:w-auto ">
            <div className="box flex">
              <div>
              <div className="icon p-8 rounded-full bg-white"><IoIosPin className="text-red-700 fa-solid fa-location-pin"/></div>
              </div>
             
              <div className="text text-white">
                <h3>Adresa</h3>
                <p>Bulevardul Timisoara 161-163, Sector 6, Bucuresti, Romania</p>
              </div>

            </div>

            <div className="box flex">
             <div>
             <div className="icon p-8 rounded-full  bg-white"><FaPhone className="text-red-700 fa-solid fa-phone"/></div>
             </div>
      
              <div className="text text-white">
                <h3 className="tlf">Telefon</h3>
                <p className="nr">0753 03 03 03</p>
              </div>

            </div>


            <div className="box flex">
              <div>
              <div className="icon p-8 rounded-full  bg-white"><MdEmail className="text-red-700 fa-solid fa-envelope"/></div>
              </div>
              
              <div className="text text-white">
                <h3 className="eml">Email</h3>
                <p className="add">office@aefenergy.ro</p>
              </div>

            </div>

          </div>
    </div>

    <div className='flex w-full px-8 xs:px-4 nav:flex-col '>
      <div className='h-full w-full '>
      <iframe className='map rounded-l-3xl nav:rounded-l-none nav:rounded-t-3xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.553532438572!2d25.986370899999997!3d44.42180659999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b20101336a2e4d%3A0x96b0c58abc52a778!2sAEF%20MOTORSPORT!5e0!3m2!1sro!2sro!4v1718480630297!5m2!1sro!2sro" width="100%" height="500px"></iframe>
      </div>
 

    <div className="container">

      <div className="contactForm bg-white content-center text-center rounded-r-3xl nav:rounded-r-none nav:rounded-br-3xl nav:rounded-bl-3xl">
        <form className='nav:rounded-b-3xl' action="https://formsubmit.co/office@aefenergy.ro" method="POST" autocomplete="off">
          <h2 className='text-3xl font-medium text-[#d60d18]'>Trimite un mesaj</h2>
          <div className="inputBox relative w-full mt-[10px]">
            <input  type="text" name="name" className="input cursor-pointer bg-transparent w-full py-[5px] text-lg my-[10px] border-b-2 border-solid border-[#d60d18] outline-none resize-none" required="required"/>
      <span>Nume</span>
          </div>
          <div className="inputBox relative w-full mt-[10px]">
            <input className="input cursor-pointer bg-transparent w-full py-[5px] text-lg my-[10px] border-b-2 border-solid border-[#d60d18] outline-none resize-none"  type="text" name="tel" required="required"/>
            <span>Telefon</span>
          </div>
          <div className="inputBox relative w-full mt-[10px]">
            <input className="input cursor-pointer bg-transparent w-full py-[5px] text-lg my-[10px] border-b-2 border-solid border-[#d60d18] outline-none resize-none"  type="email" name="email" required="required"/>
            <span>Email</span>
          </div>
          <div className="inputBox relative cursor-pointer w-full mt-[10px]">
            <input type="text" name="mesaj" className="input cursor-pointer bg-transparent w-full py-[5px] text-lg my-[10px] border-b-2 border-solid border-[#d60d18] outline-none resize-none"  required="required"/>
            <span>Mesajul dumneavoastra...</span>
          </div>
          <div className="inputBox cursor-pointer relative w-full mt-[20px]">
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
