import React from 'react'
import carImg from '../asset/car.png'
function Car() {
  return (
    <div className='w-full flex bg-white py-16 px-16 justify-between'>
      <div className='max-w-[1024px] mx-auto grid md:grid-cols-2 gap-4'>
       <img src={carImg} alt="car" className='w-[750px] mx-auto my-4 h-45' />
      </div>
       <div className='flex flex-col justify-center'>
       <p className=" text-[#8cecff] font-bold block bg-slate-800 w-max px-6 py-1 rounded-r-lg">
          PREMIUM CARS AVAILABLE
        </p>
        <h1 className='md:tetx-4xl sm:text-3xl text-2xl '>
          Drive any vehcile you want
        </h1>
        <p className='text-gray'>
          1 Month+ Rentals & Subscriptions The flexible alternative to leasing or buying No commitment & no penalties for early exit
        </p>
        <button
          type="button"
          className='bg-[#8cecff] w-48 rounded-md font-medium my-6 mx-auto py-3 text-black'>
          Get Started
        </button>
       </div>
    </div>
  )
}

export default Car