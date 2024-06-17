import Beneficii from "@/components/Beneficii";
import Contact from "@/components/Contact";
import LandingPage from "@/components/LandingPage";
import Motive from "@/components/Motive";
import Image from "next/image";
<Motive/>
export default function Home() {
  return (
   <div className="bg-inherit pb-32">
    <LandingPage/>
    <div className="mt-16 w-[90%] max-w-[1250px] mx-auto">
   <h2 className="uppercase text-2xl font-semibold text-center border-b-[1px] text-red-700 border-black border-solid pb-4">Piese Motrio</h2>
    <div className="flex flex-col gap-6 text-xl xs:text-center">
    <p className="mt-6"><span className="font-semibold text-red-700">Motrio este o marca a Grupului DACIA - RENAULT</span> si reprezinta o oferta alternativa la piesa de origine a constructorului.Piesele Motrio sunt destinate tuturor vehiculelor iesite din garantie si vizeaza clientii care cauta un raport pret/ prestatie adaptat varstei vehiculelor.</p>
    <p><span className="font-semibold text-red-700">Gama Motrio se adreseaza vehiculelor DACIA si RENAULT</span>, reprezentând o excelenta alternativa la piesele de origine.Toate produsele din gama MOTRIO sunt omologate RAR, sunt dezvoltate dupa caietele de sarcini impuse de Constructor si nu prezinta nici un pericol in utilizare.</p>
    <p><span   id="dece" className="font-semibold text-red-700">Garantia care se acorda tuturor pieselor de schimb Motrio este identica cu cea acordata pieselor de origine - 24 de luni.</span> Motrio inseamna acelasi nivel de exigenta ca si pentru piesele de origine in termeni de securitate si functionalitate.</p>
    </div>
   
    </div>
    <Beneficii/>
    <Contact/>
    <div className='w-[90%] max-w-[1250px] mx-auto mt-16 flex flex-col gap-16'>
      <h2 className='font-semibold text-red-700 text-center text-2xl'>3 MOTIVE PENTRU A VĂ BAZA PE CENTRU DE SERVICII MOTRIO?</h2>
    <div className=' flex overflow-hidden justify-between xl:flex-col xl:gap-8'>
   
   <Motive nr="1" titlu="INTERVENȚII DE CALITATE ȘI ÎN GARANȚIE" scris="Centrul de servicii MOTRIO gestionează toate intervențiile de întreținere la toate vehiculele, inclusiv cele aflate în garanție."/>
   <Motive nr="2" titlu="PREȚURI COMPETITIVE EXCELENTE" scris="O rețea de profesioniști la dispoziția dvs. oricând, oriunde, la prețul potrivit."/>
   <Motive nr="3" titlu="TEHNICIENI CONSTANT INSTRUIȚI" scris="Ne pasă de siguranța dvs. și, din acest motiv, ne dorim ca vehiculele dvs. să fie pe mâini bune! Toți tehnicienii Centrului de servicii MOTRIO participă la cursuri de formare pentru a fi la curent chiar și cu cele mai recente inovații."/>

   </div>
    </div>
   </div>
  );
}
