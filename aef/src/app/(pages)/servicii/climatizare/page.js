import React from 'react'
import Banner from '../../../../assets/bannerProduse/climatizare4.jpg'
import HeroProdus from '@/components/HeroProdus'
import Locatie from '@/components/Locatie'

const page = () => {
  return (
    <div>
          <div className='mt-32 xs:mt-24'>
      <HeroProdus banner={Banner.src} serviciu="Climatizare"/>
    <div className='mt-16 w-[90%] max-w-[1250px] mx-auto'>
    <h2 className='hidden xs:block text-3xl uppercase text-red-600 font-bold  text-center'>Climatizare</h2>
    <p className='text-xl mt-6'>Climatizarea nu este doar un element de confort, ci contribuie și la siguranța pasivă a vehiculului, deoarece vă permite să dezghețați rapid parbrizul și să mențineți astfel vizibilitatea optimă în condiții nefavorabile. Efectuarea lucrărilor de întreținere periodică la sistemul de climatizare vă va permite să prelungiți durata de viață a acestuia. Dacă sistemul de climatizare reușește cu greu să răcească mașina, motivele ar putea fi:</p>
    <ul>
      <li className='text-xl font-semibold list-disc ml-8 mt-6 '>Filtru de habitaclu înfundat</li>
      <li className='text-xl font-semibold list-disc ml-8 mt-2 '>Radiator murdar</li>
      <li className='text-xl font-semibold list-disc ml-8 mt-2 '>Funcționare defectuoasă a senzorilor de umiditate și temperatură</li>
      <li className='text-xl font-semibold list-disc ml-8 mt-2 '>Nivel redus al lichidului de răcire</li>
    </ul>
    </div>
    <div className='bg-red-600 flex flex-col text-white w-[90%] max-w-[1250px] mx-auto p-4 mt-10 font-light gap-4'>
        <h2 className='uppercase'>Recomandarea noastră</h2>
        <p>Curățarea regulată a circuitului de climatizare pentru a elimina mirosurile neplăcute și pentru a permite o mai bună funcționare a sistemului de climatizare.</p>
<p>Reumplerea sistemului de climatizare și schimbarea filtrului de habitaclu vă permite să restabiliți gazele evacuate. În general, recomandăm înlocuirea filtrului de habitaclu în fiecare an și reîncărcarea circuitului de climatizare la fiecare doi ani.</p>
<p>Dacă nu ați făcut acest lucru încă, solicitați-ne o ofertă!</p>

    </div>
  
    <Locatie/>
    </div>
    </div>
  )
}

export default page
