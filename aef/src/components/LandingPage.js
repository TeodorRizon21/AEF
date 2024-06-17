import React from 'react';
import vlog from '../assets/banner.gif';
import Dacia from "../assets/dacia.png"
import Renault from "../assets/renault.png"
import Link from 'next/link';
const LandingPage = () => {
  return (
    <div className='h-[100vh] overflow-hidden content-center mx-auto relative z-10'>
  
        <img src={vlog.src} className='imagine-landing bg-cover object-cover h-full w-full absolute top-0 left-0 -z-10 blur-md overflow-hidden  '/> 
       <div className='text-center xs:w-[80%] w-[50%]  text-white mx-auto gap-8 nav:pt-16 flex flex-col items-center justify-center'>
       <h2 className=' text-4xl font-semibold ' >ÎNTREȚINEREA VEHICULELOR, ACCESIBILĂ TUTUROR</h2> 
        <p className='font-semibold'>Servicii, ITP, anvelope și întreținere auto efectuate pe toate mașinile, inclusiv dacă sunt acoperite de garanție.</p>
        <Link href="#dece"><button className='duration-500 font-semibold hover:bg-white hover:text-[#d60d18] hover:duration-500 bg-[#d60d18] w-60 h-12 rounded-3xl block mx-auto'>AFLAȚI MAI MULTE</button></Link>
       </div>
    
    </div>
  )
}

export default LandingPage
