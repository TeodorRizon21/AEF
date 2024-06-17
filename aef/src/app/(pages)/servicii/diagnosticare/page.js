import React from 'react'
import Banner from '../../../../assets/bannerProduse/intretinere.webp'
import HeroProdus from '@/components/HeroProdus'
import Locatie from '@/components/Locatie'

const page = () => {
  return (
    <div className='mt-32 xs:mt-24'>
    <HeroProdus banner={Banner.src} serviciu="Diagnosticare"/>
  <div className='mt-16 w-[90%] max-w-[1250px] mx-auto'>
  <h2 className='hidden xs:block text-3xl uppercase text-red-600 font-bold  text-center'>Diagnosticare electronică</h2>
  <p className='text-xl mt-6'>În prezent, echipamentele electronice sunt implicate în multe aspecte ale funcționării unui vehicul și ați văzut în mod sigur lămpi galbene sau roșii aprinse pe tabloul de bord al vehiculului dvs. Diagnosticarea electronică reprezintă o parte importantă a întreținerii vehiculului, analiza computerizată permițând mecanicului să identifice cu exactitate defecțiunea pieselor electrice și electronice ale vehiculului și să evalueze buna funcționare și siguranța acestora.</p>
  <p className='text-xl mt-6'>Grație acestei analize, se vor putea efectua unele operații precum programarea și maparea unității de control pentru optimizarea consumului, verificarea consumului de combustibil și asigurarea funcționării corespunzătoare a lămpilor de avertizare și a senzorilor.</p>

  </div>
  <div className='bg-red-600 flex flex-col text-white w-[90%] max-w-[1250px] mx-auto p-4 mt-10 font-light gap-4'>
      <h2 className='uppercase'>Recomandarea noastră</h2>
      <p>Recomandăm efectuarea unei verificări cel puțin o dată la 2 ani.
      Unele semne de funcționare defectuoasă ar putea fi:</p>
      <ul>
    <li className='text-xl font-semibold list-disc ml-8 '>Aprinderea anormală a lămpilor indicatoare</li>
    <li className='text-xl font-semibold list-disc ml-8 mt-2 '>Funcționarea defectuoasă a senzorilor</li>
    <li className='text-xl font-semibold list-disc ml-8 mt-2 '>Valori inconsecvente în autodiagnosticarea vehiculului</li>

  </ul>

<p>Dacă dvs. considerați că este necesar să efectuați o diagnosticare electronică a vehiculului, solicitați-ne o ofertă!</p>

  </div>

  <Locatie/>
  </div>
  )
}

export default page
