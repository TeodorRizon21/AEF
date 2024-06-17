import React from 'react'

const Motive = (props) => {
  return (
    <div>
     <div className='flex gap-4'>
      <div>
      <div className='border-black border-solid border-[1px] rounded-full w-[70px] h-[70px] flex items-center justify-center'>
      <p className='text-red-700 font-semibold'>{props.nr}</p>
      </div>
      </div>
      
 
      <div className='flex flex-col gap-2 w-[300px] xl:w-full'>
      <h2 className='font-semibold text-xl'>{props.titlu}</h2>
      <p>{props.scris}</p>
      </div>
 
     </div>
    </div>
  )
}

export default Motive
