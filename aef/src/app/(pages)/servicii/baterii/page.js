import React from 'react'
import Banner from '../../../../assets/bannerProduse/baterii.jpg'
import HeroProdus from '@/components/HeroProdus'
import Locatie from '@/components/Locatie'

const page = () => {
  return (
    <div className='mt-32 xs:mt-24'>
    <HeroProdus banner={Banner.src} serviciu="Baterii"/>
  <div className='mt-16 w-[90%] max-w-[1250px] mx-auto'>
  <h2 className='hidden xs:block text-3xl uppercase text-red-600 font-bold  text-center'>Baterii</h2>
  <p className='text-xl mt-6'>Bateria este unul dintre dispozitivele principale ale vehiculului, de fapt toate componentele electrice și electronice ale vehiculului sunt conectate la aceasta. Funcția sa principală este de a permite pornirea demarorului și de a menține sistemul electric activ.</p>
  <p className='text-xl mt-6'>Totuși, după ierni grele și veri toride, se recomandă verificarea bateriei pentru a evita orice surpriză neplăcută. De fapt, din cauza schimbărilor de temperatură la începutul unui alt anotimp, pot apărea avarii care au ca efect probleme la pornirea vehiculului.</p>

  </div>
  <div className='bg-red-600 flex flex-col text-white w-[90%] max-w-[1250px] mx-auto p-4 mt-10 font-light gap-4'>
      <h2 className='uppercase'>Recomandarea noastră</h2>
      <p>De obicei, durata medie de viață a bateriei variază între 4 și 5 ani, dar vă recomandăm să verificați starea bateriei mașinii la fiecare 30.000 km sau 2 ani, în funcție de utilizarea vehiculului.</p>
<p>Unele semnale de alarmă care ar trebui să vă indice faptul că trebuie să verificați bateria sunt:</p>
<ul>
    <li className='text-xl font-semibold list-disc ml-8'>Dificultate la pornirea vehiculului</li>
    <li className='text-xl font-semibold list-disc ml-8 mt-2 '>Pete vizibile sau coroziune în jurul bateriei</li>
    <li className='text-xl font-semibold list-disc ml-8 mt-2 '>Pierdere de putere la faruri</li>
  </ul>
<p>Dacă bănuiți că bateria nu funcționează corespunzător, vizitați-ne. Tehnicienii noștri vor diagnostica starea de bună funcționare a bateriei dvs. în scurt timp și, eventual, vă vor recomanda cea mai convenabilă soluție pentru vehiculul dvs.</p>

  </div>

  <Locatie/>
  </div>
  )
}

export default page
