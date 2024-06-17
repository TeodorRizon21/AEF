import React from 'react'
import Banner from '../../../../assets/bannerProduse/adblue.webp'
import HeroProdus from '@/components/HeroProdus'
import Locatie from '@/components/Locatie'
const page = () => {
  return (
    <div>
    <div className='mt-32 xs:mt-24'>
<HeroProdus banner={Banner.src} serviciu="AdBlue"/>
<div className='mt-16 w-[90%] max-w-[1250px] mx-auto'>
<h2 className='hidden xs:block text-3xl uppercase text-red-600 font-bold  text-center'>AdBlue</h2>
<p className='text-xl mt-6'>AdBlue se utilizează exclusiv pe mașinile echipate cu motor diesel și servește la reducerea emisiilor de oxizi de azot din gazele de eșapament, reducându-le cu 90%. Acest produs este o soluție compusă din 32,5% uree de înaltă puritate și 67,5% apă demineralizată care se injectează în gazele de eșapament generate de un motor diesel și utilizarea sa este obligatorie pentru toate motoarele diesel Euro 6.</p>
<p className='text-xl mt-6'>Se utilizează într-o reducere catalitică selectivă (SCR) pentru a reduce emisiile de oxizi de azot cu până la 90% din gazele de eșapament generate de motoarele diesel. Aditivul trebuie turnat într-un rezervor separat. Dacă lichidul este consumat, motorul nu poate fi pornit.</p>
</div>
<div className='bg-red-600 flex flex-col text-white w-[90%] max-w-[1250px] mx-auto p-4 mt-10 font-light gap-4'>
  <h2 className='uppercase'>Recomandarea noastră</h2>
  <p>Cât de des ar trebui să fie reîncărcat?</p>
<p>Cel puțin 2.400 km înainte ca reactivul să fie consumat complet . Un avertisment pe vehicul indică distanța posibilă rămasă.</p>
<p>Dacă nu ați făcut acest lucru încă, solicitați-ne o ofertă!</p>

</div>

<Locatie/>
</div>
</div>
  )
}

export default page
