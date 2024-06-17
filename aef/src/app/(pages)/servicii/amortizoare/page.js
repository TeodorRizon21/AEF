import React from 'react'
import Banner from '../../../../assets/bannerProduse/amortizor.webp'
import HeroProdus from '@/components/HeroProdus'
import Locatie from '@/components/Locatie'
const page = () => {
  return (
    <div>
    <div className='mt-32 xs:mt-24'>
<HeroProdus banner={Banner.src} serviciu="Amortizoare"/>
<div className='mt-16 w-[90%] max-w-[1250px] mx-auto'>
<h2 className='hidden xs:block text-3xl uppercase text-red-600 font-bold  text-center'>Amortizoare</h2>
<p className='text-xl mt-6'>Amortizoarele sunt folosite pentru a reduce efectul deranjant al deplasării pe teren accidentat și pot îmbunătăți calitatea călătoriei, cresc confortul și sporesc stabilitatea și manevrabilitatea vehiculului.</p>
<p className='text-xl mt-6'>Amortizoarele tind să se uzeze și să se descarce în timp și, prin urmare, necesită monitorizare. Funcția lor principală este legată de siguranța vehiculului: pe lângă asigurarea unei călătorii line și confortabile, sunt esențiale pentru a permite vehiculului să aibă o bună ținută pe drum.</p>
<p className='text-xl mt-6'>Semnalele pentru verificarea stării amortizoarelor sunt:</p>
<ul>
<li className='text-xl font-semibold list-disc ml-8 mt-6 '>volanul tinde să vibreze</li>
<li className='text-xl font-semibold list-disc ml-8 mt-2 '>eficiența de frânare a vehiculului este redusă</li>
<li className='text-xl font-semibold list-disc ml-8 mt-2 '>mai puțin control în viraje</li>
<li className='text-xl font-semibold list-disc ml-8 mt-2 '>posibilitatea de a aluneca pe drumuri ude, chiar și la viteză redusă</li>
<li className='text-xl font-semibold list-disc ml-8 mt-2 '>uzură anormală a anvelopelor</li>
</ul>
</div>
<div className='bg-red-600 flex flex-col text-white w-[90%] max-w-[1250px] mx-auto p-4 mt-10 font-light gap-4'>
  <h2 className='uppercase'>Recomandarea noastră</h2>
  <p>Verificați amortizoarele la fiecare 20.000 km și înlocuiți-le după 80.000 km.</p>
<p>Dacă nu ați făcut acest lucru încă, solicitați-ne o ofertă!</p>

</div>

<Locatie/>
</div>
</div>
  )
}

export default page
