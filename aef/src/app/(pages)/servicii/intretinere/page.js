import React from 'react'
import Banner from '../../../../assets/bannerProduse/intretinere.jpg'
import HeroProdus from '@/components/HeroProdus'
import Locatie from '@/components/Locatie'


const page = () => {
  return (
<div className='mt-32 xs:mt-24'>
      <HeroProdus banner={Banner.src} serviciu="Servicii de întreținere"/>
    <div className='mt-16 w-[90%] max-w-[1250px] mx-auto'>
    <h2 className='hidden xs:block text-3xl uppercase text-red-600 font-bold  text-center'>Servicii de întreținere</h2>
    <p className='text-xl mt-6 font-semibold'>De ce întreținerea vehiculului meu presupune schimbarea uleiului și a filtrului?</p>
    <p className='text-xl mt-6'>Uleiul protejează motorul împotriva supraîncălzirii, previne uzura componentelor metalice și absoarbe contaminanții care se formează în acestea.</p>
  
    <p className='text-xl mt-6'>Uleiul de motor se deteriorează în timp, iar murdăria care se acumulează odată cu uzura nu îi mai permite să-și îndeplinească funcția vitală pentru vehicul.</p>
  
  
    </div>
    <div className='bg-red-600 flex flex-col text-white w-[90%] max-w-[1250px] mx-auto p-4 mt-10 font-light gap-4'>
        <h2 className='uppercase'>Recomandarea noastră</h2>
        <p className='text-xl font-semibold'>Cât de des se recomandă schimbarea uleiului?</p>
        <p className='text-xl'>Se recomandă întreținerea:</p>
    <ul>
      <li className='text-xl font-semibold list-disc ml-8 '>la fiecare 20.000 km pentru motoarele diesel standard</li>
      <li className='text-xl font-semibold list-disc ml-8 mt-2 '>la fiecare 15.000 km pentru motoarele pe benzină</li>
      <li className='text-xl font-semibold list-disc ml-8 mt-2 '>la fiecare 10.000 km pentru motoarele vechi de peste 10 ani</li>

    </ul>
    <p className='text-xl'>În atelierele noastre veți găsi și ulei marca MOTRIO pentru mașini utilitare și vehicule utilitare ușoare, pentru ultimele generații de motoare diesel și pe benzină, inclusiv pentru cele echipate cu filtre de particule și vehicule cu sisteme de injecție directă sau indirectă.</p>

    </div>
  
    <Locatie/>
    </div>
  )
}

export default page
