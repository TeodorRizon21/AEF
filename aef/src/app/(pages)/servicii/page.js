import ComponentServicii from '@/components/ComponentServicii'
import React from 'react'
import AdBlue from '../../../assets/produse/adblue.webp'
import Amortizare from '../../../assets/produse/amortizoare.webp'
import Anvelope from '../../../assets/produse/anvelope.webp'
import Baterii from '../../../assets/produse/baterii.webp'
import Bujii from '../../../assets/produse/bujii.webp'
import Caroserie from '../../../assets/produse/caroserie.webp'
import Climatizare from '../../../assets/produse/climatizare.webp'
import Diagnosticare from '../../../assets/produse/diagnosticare.webp'
import Distributie from '../../../assets/produse/distributie.webp'
import Frane from '../../../assets/produse/frane.webp'
import Intretinere from '../../../assets/produse/intretinere.webp'
import Ulei from '../../../assets/produse/ulei.webp'
import Stergatoare from '../../../assets/produse/stergatoare.webp'

import BAdBlue from '../../../assets/bannerProduse/adblue.webp'
import BAmortizare from '../../../assets/bannerProduse/amortizor.webp'
import BAnvelope from '../../../assets/bannerProduse/anvelope.jpg'
import BBaterii from '../../../assets/bannerProduse/baterii.jpg'
import BBujii from '../../../assets/bannerProduse/bujii.webp'
import BCaroserie from '../../../assets/bannerProduse/caroserie.jpg'
import BClimatizare from '../../../assets/bannerProduse/climatizare3.jpg'
import BDiagnosticare from '../../../assets/bannerProduse/diagnosticare.webp'
import BDistributie from '../../../assets/bannerProduse/distributie.jpg'
import BFrane from '../../../assets/bannerProduse/frane.webp'
import BIntretinere from '../../../assets/bannerProduse/intretinere.jpg'
import BUlei from '../../../assets/bannerProduse/ulei.webp'
import BStergatoare from '../../../assets/bannerProduse/stergatoare.webp'
import Motive from '@/components/Motive'
import Banner from  "../../../assets/bannerservicii.jpg"
import Link from 'next/link'
const page = () => {
  return (
    <div className='servicii pt-16 lg:pt-8 mx-auto' >
      <div className='h-[100vh] overflow-hidden content-center mx-auto'>
      <img src={Banner.src} className='imagine-landing bg-cover object-cover h-[100vh] w-full absolute top-0 left-0 -z-10 blur-md'/> 
      <div className='text-center xs:w-[80%] w-[50%]  text-white mx-auto gap-8 nav:pt-16 flex flex-col items-center justify-center'>
       <h2 className=' text-4xl font-semibold ' >SERVICIILE NOASTRE</h2> 
        <p className='font-semibold'>Oferim servicii de reparații auto pentru gama Dacia-Renault și intervenții de orice fel, de la cele mecanice la schimbarea anvelopelor, pentru a oferi cele mai bune servicii la prețul corect.</p>
        <Link href="#servicii"><button className='duration-500 font-semibold hover:bg-white hover:text-[#d60d18] hover:duration-500 bg-[#d60d18] w-60 h-12 rounded-3xl block mx-auto'>AFLAȚI MAI MULTE</button></Link>
   
       </div>
      </div>
  
    <div className='w-[90%] max-w-[1250px] mx-auto mt-16 flex flex-col gap-4 text-center' >
    <h2 className='text-red-700 font-bold text-2xl'>SIGURANȚA DVS. ESTE PRIORITATEA NOASTRĂ, BAZAȚI-VĂ PE NOI!</h2>
      <h2><span className='font-semibold'>AEF poate satisface toate nevoile de întreținere și reparații</span> ale vehiculelor dvs., chiar dacă sunt în garanție.</h2>
      <h2>Gama noastră de piese de schimb MOTRIO, asigură o acoperire ridicată a vehiculelor marca Renault și Dacia. <span className='font-semibold'>Toate piesele MOTRIO sunt conforme cu standardele aplicabile și sunt comercializate după omologarea RAR.</span></h2>
     
    </div>

    <div className='w-[90%] max-w-[1250px] mx-auto mt-16 flex flex-col gap-16'>
      <h2 id="servicii" className='font-semibold text-red-700 text-center text-2xl'>3 MOTIVE PENTRU A VĂ BAZA PE CENTRU DE SERVICII MOTRIO?</h2>
    <div className=' flex overflow-hidden justify-between xl:flex-col xl:gap-8'>
   
   <Motive nr="1" titlu="INTERVENȚII DE CALITATE ȘI ÎN GARANȚIE" scris="Centrul de servicii MOTRIO gestionează toate intervențiile de întreținere la toate vehiculele, inclusiv cele aflate în garanție."/>
   <Motive nr="2" titlu="PREȚURI COMPETITIVE EXCELENTE" scris="O rețea de profesioniști la dispoziția dvs. oricând, oriunde, la prețul potrivit."/>
   <Motive nr="3" titlu="TEHNICIENI CONSTANT INSTRUIȚI" scris="Ne pasă de siguranța dvs. și, din acest motiv, ne dorim ca vehiculele dvs. să fie pe mâini bune! Toți tehnicienii Centrului de servicii MOTRIO participă la cursuri de formare pentru a fi la curent chiar și cu cele mai recente inovații."/>

   </div>
    </div>

    

    <div className='w-[90%] max-w-[1250px] flex flex-wrap justify-between nav:justify-center gap-y-16 mx-auto mt-32 pb-16 xl:mt-16'>
    
    <ComponentServicii produs="Climatizare" imagine={Climatizare.src} link="/servicii/climatizare" banner={BClimatizare.src}/>
    <ComponentServicii produs="Baterii" imagine={Baterii.src} link="/servicii/baterii" banner={BBaterii.src}/>
    <ComponentServicii produs="Sistem de frâne" imagine={Frane.src} link="/servicii/frane" banner={BFrane.src}/>
    <ComponentServicii produs="Caroserie" imagine={Caroserie.src} link="/servicii/caroserie" banner={BCaroserie.src}/>
    <ComponentServicii produs="Diagnosticare electronică" imagine={Diagnosticare.src} link="/servicii/diagnosticare" banner={BDiagnosticare.src}/>
    <ComponentServicii produs="Curea sau lanț de distribuție" imagine={Distributie.src} link="/servicii/distributie" banner={BDistributie.src}/>
    <ComponentServicii produs="Servicii de întreținere" imagine={Intretinere.src} link="/servicii/intretinere" banner={BIntretinere.src}/>
    <ComponentServicii produs="Lamele ștergătoare" imagine={Stergatoare.src} link="/servicii/stergatoare" banner={BStergatoare.src}/>
    <ComponentServicii produs="Anvelope " imagine={Anvelope.src} link="/servicii/anvelope" banner={BAnvelope.src}/>
    <ComponentServicii produs="Amortizoare" imagine={Amortizare.src} link="/servicii/amortizoare" banner={BAmortizare.src}/>
    <ComponentServicii produs="AdBlue" imagine={AdBlue.src} link="/servicii/adblue" banner={BAdBlue.src}/>
    <ComponentServicii produs="Ulei și filtre" imagine={Ulei.src} link="/servicii/ulei" banner={BUlei.src}/>
    <ComponentServicii produs="Service bujii" imagine={Bujii.src} link="/servicii/bujii" banner={BBujii.src}/>

   
 
    </div>
 
  </div>
  )
}

export default page
