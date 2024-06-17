import React from 'react'
import Image from '../assets/produse/anvelope.webp'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import Banner from '../assets/bannerProduse/climatizare.webp'
const ComponentServicii = (props) => {
  return (
    <Link href={props.link} className='flex mx-auto justify-center '>
      
      <div className='componentServicii relative w-[550px] xl:w-[500px] xs:w-[360px] xxs:w-[330px] lg:mx-0 shadow-gray-800 shadow-2xl rounded-3xl'>

    <img className='rounded-tr-3xl w-[550px] xl:w-[500px] xs:w-[360px] xxs:w-[330px] h-[300px] xs:h-[200px]' src={props.banner}/>
    <img className='h-[100px] xs:h-[70px] absolute top-[20px] left-4' src={props.imagine}/>
    <div className='flex justify-between py-6 pl-6 pr-10'>
      <h2 className=' text-3xl nav:text-2xl uppercase font-semibold text-black'>{props.produs}</h2>
    <FaArrowRight className='arrow' size={40} color='#d60d18'/>
   
    </div>
    

      </div>
  
    </Link>
  )
}

export default ComponentServicii
