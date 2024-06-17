import React from 'react'
import { IoPricetagsOutline } from "react-icons/io5";
import Beneficiu from './Beneficiu';
import { PiMedal } from "react-icons/pi";
import { SlWallet } from "react-icons/sl";
import { CiStar, CiClock1  } from "react-icons/ci";
import { FaRegHandshake } from "react-icons/fa";
import Link from 'next/link';
const Beneficii = () => {
  return (
    <div className='bg-white'>
      <h2 className='text-red-700 text-2xl font-bold text-center my-16'>De ce să ne alegi pe noi?</h2>
      <div className='w-[90%] max-w-[1250px] flex flex-wrap gap-y-12 justify-between lg:justify-center mx-auto'>
      <Beneficiu icon={<IoPricetagsOutline/>} h2="PIESE DE SCHIMB MULTIMARCĂ" p="O gamă in continuă creștere."/>
      <Beneficiu icon={<PiMedal />} h2="
GARANȚIE 24 LUNI" p="Cu MOTRIO păstrați întotdeauna garanția producătorului sau aveți 24 luni garanție pentru piese și manoperă."/>
      <Beneficiu icon={<SlWallet />} h2="
PREȚURI CONVENABILE" p="Rentabilitate excelentă."/>
      <Beneficiu icon={<CiStar />} h2="
PROFESIONALISM" p="Fără surprize pe factură. Dacă vehiculul dvs. necesită intervenții suplimentare, vă vom anunța înainte de a continua."/>
      <Beneficiu icon={<CiClock1 />} h2="
PUNCTUALITATE" p="Servicii exacte și la timp, ținând cont de nevoile dvs."/>
      <Beneficiu icon={<FaRegHandshake />} h2="
TRANSPARENȚĂ" p="Oferte furnizate gratuit."/>
     
    
      </div>
      <Link href="/servicii"><button className='duration-500 text-white shadow-lg shadow-gray-600 font-semibold hover:bg-white hover:text-[#d60d18] hover:duration-500 mt-14 bg-[#d60d18] w-60 h-12 rounded-3xl block mx-auto uppercase'>Vezi serviciile noastre</button></Link>
  
    </div>
  )
}

export default Beneficii
