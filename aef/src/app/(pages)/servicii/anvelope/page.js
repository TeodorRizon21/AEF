import React from 'react'
import Banner from '../../../../assets/bannerProduse/anvelope.jpg'
import HeroProdus from '@/components/HeroProdus'
import Locatie from '@/components/Locatie'
const page = () => {
  return (
    <div className='mt-32 xs:mt-24'>
    <HeroProdus banner={Banner.src} serviciu="Anvelope"/>
  <div className='mt-16 w-[90%] max-w-[1250px] mx-auto'>
  <h2 className='hidden xs:block text-3xl uppercase text-red-600 font-bold  text-center'>Anvelope</h2>
  <p className='text-xl mt-6'>Anvelopele joacă un rol cheie în siguranța dvs. în timpul conducerii, deoarece sunt singurul element de contact dintre vehicul și drum. Acestea se deteriorează odată cu trecerea timpului și a kilometrilor parcurși, iar starea lor depinde de condițiile drumului și de stilul de condus al fiecărui șofer.</p>

  </div>
  <div className='bg-red-600 flex flex-col text-white w-[90%] max-w-[1250px] mx-auto p-4 mt-10 font-light gap-4'>
      <h2 className='uppercase'>Recomandarea noastră</h2>
      <p>Presiunea de umflare și adâncimea benzii de rulare, al căror minim legal pentru anvelopele auto în Europa este de 1,6 mm, sunt cele două aspecte care trebuie monitorizate periodic.</p>
<p>Dacă folosiți mașina des, în special în orașele în care banda de rulare se poate uza mai repede, vizitați unul dintre Centrele noastre service MOTRIO și tehnicienii noștri vor efectua o inspecție vizuală a anvelopelor și vor verifica adâncimea benzii de rulare. Pentru a menține siguranța unei anvelope, trebuie să se înlocuiască la fiecare 25.000 km sau la fiecare 5 ani.</p>
<p>Noua anvelopă Fairway MOTRIO este produsă în Europa, permite conducerea în siguranță în orice condiții meteorologice și este oferită în trei versiuni:</p>
<p className='font-semibold'>Vară - Iarnă - Toate anotimpurile</p>
<p>Caracteristici principale:</p>
<ul>
    <li className='text-xl font-semibold list-disc ml-8 '>51 de referințe disponibile</li>
    <li className='text-xl font-semibold list-disc ml-8 mt-2 '>Ecologice: consum redus de combustibil și rezistență scăzută la rulare</li>
    <li className='text-xl font-semibold list-disc ml-8 mt-2 '>Dimensiuni de la 13 la 20 inchi</li>
 
  </ul>

  </div>

  <Locatie/>
  </div>
  )
}

export default page
