import React from 'react'
import Banner from '../../../../assets/bannerProduse/bujii.webp'
import HeroProdus from '@/components/HeroProdus'
import Locatie from '@/components/Locatie'


const page = () => {
  return (
<div className='mt-32 xs:mt-24'>
      <HeroProdus banner={Banner.src} serviciu="Service bujii"/>
    <div className='mt-16 w-[90%] max-w-[1250px] mx-auto'>
    <h2 className='hidden xs:block text-3xl uppercase text-red-600 font-bold  text-center'>Service bujii</h2>
    <p className='text-xl mt-6'>Ați putea presupune că, dacă vehiculul dumneavoastră are probleme la pornire, motivul este bateria. Ei bine, acesta nu este întotdeauna cazul! Bujia veche sau deteriorată poate avea efecte negative asupra performanței mașinii dumneavoastră. Într-adevăr, bujiile nu numai că oferă putere motorului ca elemente cheie ale procesului de ardere, dar asigură și performanța, eficiența și nivelurile de emisii ale mașinii motor.</p>
    <p className='text-xl mt-6 font-semibold'>Cum poate fi identificată o problemă cu bujiile?</p>
    <p className='text-xl mt-6'>Există mai multe avertismente care vă pot atrage atenția. Dacă bujiile sunt uzate, martorul cu pictograma motorului se va aprinde pe tabloul de bord. Dacă eficiența consumului de combustibil scade cu 20-30%, ar putea însemna că bujiile sunt uzate. Dacă mașina dvs. nu este la fel de receptivă ca de obicei, în special când încercați să accelerați, ar putea fie din cauza bujiilor uzate.</p>
    
    </div>
    <div className='bg-red-600 flex flex-col text-white w-[90%] max-w-[1250px] mx-auto p-4 mt-10 font-light gap-4'>
        <h2 className='uppercase'>Recomandarea noastră</h2>
        <p className='font-semibold'>Cât de des ar trebui să schimbați bujiile?</p>
        <p>Având în vedere că manualul de utilizare listează kilometrajul exact pentru înlocuire și în funcție de frecvența de conducere în condiții severe, cum ar fi traficul stop-and-go, remorcarea de sarcini grele , sau conducerea la temperaturi extreme, vă recomandăm să înlocuiți:</p>
        <ul>
      <li className='font-semibold list-disc ml-8 '>bujii de cupru la fiecare 50.000 km</li>
      <li className='font-semibold list-disc ml-8 mt-2 '>bujii de platină la fiecare 130.000 km</li>
      <li className='font-semibold list-disc ml-8 mt-2 '>bujii cu iridiu la fiecare 160.000 km</li>

    </ul>
<p>Dacă bănuiți o defecțiune a bujilor dvs., vă așteptăm la noi în locație
</p>


    </div>
  
    <Locatie/>
    </div>
  )
}

export default page
