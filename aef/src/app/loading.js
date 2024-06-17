"use client"
import React from 'react'

import { FadeLoader } from 'react-spinners'
const loading = () => {
  return (
    <div className='h-[94vh] content-center justify-center pagina'>
     
      <div className='mx-auto w-[200px]'>
      <FadeLoader color="rgb(185 28 28)" size="100" className='mx-auto'/>
      </div>
   
    </div>
  )
}

export default loading
