import React from 'react'
import Banner from '../../../../assets/bannerProduse/ulei.webp'
import HeroProdus from '@/components/HeroProdus'
import Locatie from '@/components/Locatie'

const page = () => {
  return (
    <div className='mt-32 xs:mt-24'>
    <HeroProdus banner={Banner.src} serviciu="Ulei & filtre"/>
  <div className='mt-16 w-[90%] max-w-[1250px] mx-auto'>
  <h2 className='hidden xs:block text-3xl uppercase text-red-600 font-bold  text-center'>Ulei & filtre</h2>
  <p className='text-xl mt-6'>Schimbarea regulată a uleiului și a filtrului este crucială pentru menținerea sănătății motorului, optimizarea eficienței combustibilului și prelungirea duratei de viață a vehiculului. În mod normal, producătorii de mașini oferă intervale recomandate pentru schimbarea uleiului în manualul de utilizare, deoarece acestea pot varia de la model la model.</p>
  <p className='text-xl mt-6 font-semibold'>Care sunt pașii obișnuiți implicați într-un service de ulei și filtre?</p>
  <ul>
    <li className='text-xl  list-disc ml-8 mt-6 '>Scurgeți uleiul vechi și îndepărtați vechiul filtru de ulei</li>
    <li className='text-xl  list-disc ml-8 mt-2 '>Verificați celelalte părți, cum ar fi scurgerea și dopul</li>
    <li className='text-xl  list-disc ml-8 mt-2 '>Instalați noul filtru de ulei</li>
    <li className='text-xl  list-disc ml-8 mt-2 '>Înlocuiți dopul de scurgere</li>
    <li className='text-xl  list-disc ml-8 mt-2 '>Adăugați ulei de motor nou</li>
    <li className='text-xl  list-disc ml-8 mt-2 '>Verificați nivelul lichidului</li>
    <li className='text-xl  list-disc ml-8 mt-2 '>Resetați mementoul de schimbare a uleiului</li>
  </ul>
  </div>
  <div className='bg-red-600 flex flex-col text-white w-[90%] max-w-[1250px] mx-auto p-4 mt-10 font-light gap-4'>
      <h2 className='uppercase'>Recomandarea noastră</h2>
      <p className='font-semibold'>De unde știi dacă este timpul să schimbi uleiul și filtrul?</p>
<p>În general, am recomandat schimbarea uleiului și a filtrului:</p>
<ul>
    <li className='list-disc ml-8'>la fiecare 20.000 km pentru motoarele diesel (10.000 km – 6 luni utilizare intensă)</li>
    <li className='list-disc ml-8 mt-2 '>la fiecare 15.000 km pentru motoarele pe benzină (7.500 km – 6 luni utilizare intensă)</li>
    <li className='list-disc ml-8 mt-2 '>la fiecare 10.000 km pentru vehiculul mai vechi de 10 ani</li>
  </ul>
<p>Cu toate acestea, există mai multe avertismente care vă pot ajuta să identificați problema. O lumină galbenă ar putea apărea pe tabloul de bord cu o notificare sau culoarea uleiului nu are o colorație ca cea originală. Dacă ați observat unul sau mai multe dintre semnele de mai sus, probabil că este timpul să vă înlocuiți uleiul și filtrul.</p>

  </div>

  <Locatie/>
  </div>
  )
}

export default page
