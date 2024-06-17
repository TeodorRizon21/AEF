import React from 'react';

const HeroProdus = (props) => {
  return (
    <div className='flex w-full max-w-[1250px] mx-auto h-[700px] lg:h-[500px] relative shadow-xl shadow-gray-500 rounded-3xl lg:rounded-none'>
      <h2 className='mt-32 ml-6 text-5xl lg:text-3xl text-red-600 uppercase font-bold xs:hidden text-outline'>
        {props.serviciu}
      </h2>
      <img src={props.banner} className='absolute right-0 w-full bg-cover object-cover h-[700px] lg:h-[500px] z-[-1] rounded-3xl lg:rounded-none'/>
    </div>
  )
}

export default HeroProdus;
