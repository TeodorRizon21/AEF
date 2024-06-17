import React from 'react'
import Banner from '../../../../assets/bannerProduse/stergatoare.webp'
import HeroProdus from '@/components/HeroProdus'
import Locatie from '@/components/Locatie'
const page = () => {
  return (
    <div className='mt-32 xs:mt-24'>
    <HeroProdus banner={Banner.src} serviciu="Ștergătoare"/>
  <div className='mt-16 w-[90%] max-w-[1250px] mx-auto'>
  <h2 className='hidden xs:block text-3xl uppercase text-red-600 font-bold  text-center'>Lamele de ștergătoare</h2>
  <p className='text-xl mt-6'>Ștergătoarele de parbriz joacă un rol esențial în siguranța la bordul vehiculului. Acestea vă permit să mențineți o vizibilitate bună în timp ce conduceți, în ciuda ploii și a stropilor care pot apărea, de exemplu atunci când vă deplasați în spatele unui vehicul în condiții meteorologice dificile - de la ploaie la furtuni de zăpadă.</p>
  <p className='text-xl mt-6'>Ca regulă generală, ștergătoarele de parbriz sunt fabricate din cauciuc și se deteriorează din cauza condițiilor meteorologice nefavorabile precum zăpada, gheața și temperaturile ridicate.
  În plus, murdăria poate deteriora ștergătoarele.</p>

  </div>
  <div className='bg-red-600 flex flex-col text-white w-[90%] max-w-[1250px] mx-auto p-4 mt-10 font-light gap-4'>
      <h2 className='uppercase'>Recomandarea noastră</h2>
      <p>Ștergătoarele de parbriz sunt fabricate din cauciuc natural și, atunci când sunt în aer liber, se deteriorează în timp. Semnele care indică uzura lor sunt:</p>
      <ul>
    <li className='font-semibold list-disc ml-8 '>zgârieturi evidente pe parbriz</li>
    <li className='font-semibold list-disc ml-8 mt-2 '>parbriz murdar în timp ce ștergătoarele sunt în funcțiune</li>
  </ul>
<p className='font-semibold'>Recomandăm schimbarea lor o dată pe an.</p>

  </div>

  <Locatie/>
  </div>
  )
}

export default page
