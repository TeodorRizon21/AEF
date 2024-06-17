import React from 'react'
import Whatsapp from "../assets/whatsapp.png"

const WhatsappBtn = () => {
  return (
    <div class="parinte">
        <a aria-label="Contactează-ne pe WhatsApp!" href=" https://wa.me/+40753030303?text=Buna%20ziua!%20As%20dori%20informatii%20suplimentare!" ><img src={Whatsapp.src} alt="" class="whatsapp"/></a>
        <div class="hide">
          <p>Contactează-ne pe WhatsApp!</p>
        </div>
        </div>
  )
}

export default WhatsappBtn
