import React from 'react'
import Banner from '../../../../assets/bannerProduse/caroserie.jpg'
import HeroProdus from '@/components/HeroProdus'
import Locatie from '@/components/Locatie'

const page = () => {
  return (
<div className='mt-32 xs:mt-24'>
      <HeroProdus banner={Banner.src} serviciu="Caroserie"/>
    <div className='mt-16 w-[90%] max-w-[1250px] mx-auto'>
    <h2 className='hidden xs:block text-3xl uppercase text-red-600 font-bold  text-center'>Caroserie</h2>
    <p className='text-xl mt-6'>Caroseria nu este doar un element estetic, ci și un element structural al cărui obiectiv principal este asigurarea siguranței și confortului pasagerilor.</p>
    <p className='text-xl mt-6'>Iată câteva semnale care ar trebui să vă determine să vă verificați caroseria:</p>
    <ul>
      <li className='list-disc ml-8 mt-6 '>Frecare între diferite părți ale componentelor în urma unui impact</li>
      <li className='list-disc ml-8 mt-2 '>O oglindă spartă</li>
      <li className='list-disc ml-8 mt-2 '>Vopsea decolorată</li>
      <li className='list-disc ml-8 mt-2 '>Bare de protecție deformate</li>
      <li className='list-disc ml-8 mt-2 '>Cute pe podea</li>
    </ul>
    </div>
    <div className='bg-red-600 flex flex-col text-white w-[90%] max-w-[1250px] mx-auto p-4 mt-10 font-light gap-4'>
        <h2 className='uppercase'>Recomandarea noastră</h2>
        <p>Vă recomandăm să vă verificați în mod regulat caroseria deoarece riscurile aferente în cazul nerepararii sunt:</p>

        <ul>
      <li className='font-semibold list-disc ml-8'>Siguranta redusa a pasagerilor vehiculului</li>
      <li className='font-semibold list-disc ml-8 mt-2 '>Posibilitatea unei a doua vizite la inspecția tehnică în funcție de avarie</li>
      <li className='font-semibold list-disc ml-8 mt-2 '>Degradarea și coroziunea șasiului</li>
  
    </ul>


<p>Deteriorarea caroseriei poate duce în cele din urmă la o reducere a prețului de vânzare al vehiculului.</p>

    </div>
  
    <Locatie/>
    </div>
  )
}

export default page
