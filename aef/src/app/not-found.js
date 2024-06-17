"use client"
import React from 'react'
import Link from 'next/link'
import { CircleLoader } from 'react-spinners'
const notFound = () => {
  return (
    <div className='h-[94vh] content-center justify-center pagina'>
      <div className='text-red-700 text-4xl text-center mb-32'>
        <h2>OOPS! Ai ajuns pe o pagina care nu exista!</h2>
      </div>
      <div className='mx-auto w-[200px] flex items-center justify-center'>
      <CircleLoader color="rgb(185 28 28)" size="100" />
      </div>
      <div className='text-center'>
      <Link href="/"><button className='bg-red-700 text-white text-center p-4 w-[200px] mt-32 rounded-full'>Acasa</button></Link>
      </div>
   
    </div>
  )
}

export default notFound
