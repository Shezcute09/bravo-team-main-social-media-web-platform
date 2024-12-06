import React from 'react'
import { IoIosMore } from 'react-icons/io'
import amico from '../../assets/images/amico1.png'
const Rightside = () => {
  return (
   <section className=''>
    <div>
       <div className='text-2xl font-semibold font-sora mt-2 py-4 text-center'>Trends for you</div>
       <div className='p-6'>
          {Array(4).fill("").map((item,index)=>(
             <div key={index} className='flex flex-wrap justify-between font-sora py-2'>
             <div className=''>
                 <p className='font-medium text-base text-gray-400'>Trending in Nigeria</p>
                 <p className='font-semibold text-xl'>Tinubu</p>
                 <p className='font-medium text-base text-gray-400'>480k Post</p>
             </div>
             <div className=''>
              <IoIosMore />
             </div>
            </div>
          ))}
        </div>
        <div className='text-center'>
          <button onClick={()=> redir('/')} className='h-12 w-60 font-semibold font-sora text-lg'>See More</button>
        </div>
    </div>
    <div className='w-full justify-center items-center'>
      <img src={amico} className='h-40' alt="" />
    <div className='ml-10'>
    <h3 className='font-sora font-medium text-lg'>Naija Graphic Designers</h3>
<div className='flex flex-row flex-wrap py-4 font-medium text-base font-sora text-gray-600'>
      <div className='flex flex-1'>
        <p>134k Members</p>
      </div>
      <div>
      <p>50post/day</p>
      </div>
 </div>     
    </div>
      <div className='w-full px-10 '>
      <button onClick={()=> redir('/')} className='h-12 w-full text-center rounded-md border mb-16 border-black font-semibold text-base px-10'>
      Join Community</button>
      </div>
    </div>
   </section>
  )
}

export default Rightside