import React from 'react'
const Beneficiu = (props) => {
  return (
    <div className='flex content-center gap-4 text-red-700 w-[380px]'>
      <div>
      <div  className='border-[2px] border-red-700 border-solid rounded-full p-6'>
      {props.icon}
      </div>
      </div>
     

      <div className='flex flex-col'>
      <h2 className='font-semibold text-lg'>{props.h2}</h2>
      <p>{props.p}</p>
      </div>
   
    </div>
  )
}

export default Beneficiu
