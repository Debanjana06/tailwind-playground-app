import React from 'react'
import { AiFillApple, AiFillChrome, AiFillGithub, AiFillFacebook,AiFillMail } from 'react-icons/ai'
function Footer() {
  return (
    <div className='w-full bg-gray py-8 px-16 justify-between'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-between px-2 '>
         <form>
          <input type="email" name="email" id="email" placeholder='Enter your email id'
          className='w-[450px] mx-5 h-15 px-2 py-2' />
          <button
          type='submit'
          className='bg-[#8cecff] w-48 rounded-md font-medium my-6 mx-auto py-2 text-black'>
           Let's talk
          </button>
         </form>
      </div>
      <div className='flex flex-col justify-center'>
        <p className=" text-[#02090a] text-2xl font-bold block bg-slate-800 w-max mx-auto my-4 px-6 py-1 ">
          Contact Us
        </p>
        <div className='max-w-[1240px] mx-auto text-3xl flex flex-row justify-between px-6 gap-6 cursor-pointer'>
          <AiFillApple/>
          <AiFillChrome/>
          <AiFillFacebook/>
          <AiFillGithub/>
          <AiFillMail/>
        </div>
      </div>
    </div>
  )
}

export default Footer