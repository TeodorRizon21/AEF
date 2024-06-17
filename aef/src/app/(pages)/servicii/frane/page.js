import React from 'react'
import Banner from '../../../../assets/bannerProduse/frane.webp'
import HeroProdus from '@/components/HeroProdus'
import Locatie from '@/components/Locatie'

const page = () => {
  return (
    <div className='mt-32 xs:mt-24'>
    <HeroProdus banner={Banner.src} serviciu="Sistem de frâne"/>
  <div className='mt-16 w-[90%] max-w-[1250px] mx-auto'>
  <h2 className='hidden xs:block text-3xl uppercase text-red-600 font-bold  text-center'>Sistem de frâne</h2>
  <p className='text-xl mt-6'>Siguranța dvs. la volan este direct legată de frânarea vehiculului dvs.
  Sistemul de frânare, format din plăcuțe și discuri de frână, se uzează în timpul mersului datorită utilizării sale foarte frecvente.</p>
  <p className='text-xl mt-6'>Este esențial să păstrați plăcuțele de frână în stare bună pentru a asigura calitatea frânării și pentru a menține starea discurilor - altfel veți fi nevoiți să le înlocuiți mai des. Dacă discurile sau plăcuțele de frână sunt uzate, siguranța dvs. va fi redusă, deoarece sistemul de frânare va fi mai puțin eficient.</p>
  
  </div>
  <div className='bg-red-600 flex flex-col text-white w-[90%] max-w-[1250px] mx-auto p-4 mt-10 font-light gap-4'>
      <h2 className='uppercase'>Recomandarea noastră</h2>
      <p>Uzura plăcuțelor de frână față depinde de stilul de condus și de tipul de trasee pe care le parcurgeți de regulă, acestea sunt expuse la uzură crescută în zonele urbane.</p>
<p>Cu toate acestea, pentru siguranța dvs., vă recomandăm o verificare la fiecare 2 ani sau la aproximativ 20.000 km.</p>
<p>Dacă auziți un fluierat/scârțâit când frânați, acesta ar putea fi un simptom al discurilor de frână uzate.</p>

  </div>

  <Locatie/>
  </div>
  )
}

export default page
