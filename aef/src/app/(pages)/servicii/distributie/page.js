import React from 'react'
import Banner from '../../../../assets/bannerProduse/distributie.jpg'
import HeroProdus from '@/components/HeroProdus'
import Locatie from '@/components/Locatie'

const page = () => {
  return (
<div className='mt-32 xs:mt-24'>
      <HeroProdus banner={Banner.src} serviciu="Distribuție"/>
    <div className='mt-16 w-[90%] max-w-[1250px] mx-auto'>
    <h2 className='hidden xs:block text-3xl uppercase text-red-600 font-bold  text-center'>Curea sau lanț de distribuție</h2>
    <p className='text-xl mt-6'>Cureaua de distribuție este formată dintr-o serie de elemente care, lucrând în perfectă armonie, asigură funcționarea corectă a motorului, alternatorului, servodirecției, climatizării și pompei de apa... deci joaca un rol esențial.</p>
    <p className='text-xl mt-6 font-semibold'>Întreținerea regulată este esențială pentru buna funcționare a motorului și pentru a asigura o durată lungă de viață a vehiculului.</p>
   
    </div>
    <div className='bg-red-600 flex flex-col text-white w-[90%] max-w-[1250px] mx-auto p-4 mt-10 font-light gap-4'>
        <h2 className='uppercase'>Recomandarea noastră</h2>
        <p>Schimbarea setului de distribuție constă într-o înlocuire a curelei de distribuție și a rolelor de tensionare. Cureaua de distribuție din cauciuc se poate uza în timp, în ciuda unui număr redus de kilometri parcurși.</p>
<p className='font-semibold'>Contactați-ne pentru a afla intervalul de schimb al mașinii dumneavoastră!</p>

    </div>
  
    <Locatie/>
    </div>
  )
}

export default page
