import React from 'react'
import add from '../../assets/Add.svg'
import img from "../../assets/images/image.png"
import { BiArrowToBottom } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'

const People = () => {
  return (
    <div className='border rounded-md flex flex-col'>
        <div className='text-center mt-8'>
            <h1 className='font-sora font-semibold text-xl'>People you may know</h1>
        </div>
  {/* using mapping to fectch friends from ApI*/}
    <div>
       <div className='p-6'>
          {Array(8).fill("").map((item,index)=>(
             <div key={index} className='flex flex-wrap justify-between font-sora py-2 gap-4'>
                <div className='flex gap-2 items-center '>
                 <img src= {img} alt="profile" className='h-14 w-14 rounded-full' />
                  <div className='flex flex-col'>
                  <p>Emily Naomi</p>
                  <p className='text-gray-400'>Product Designer at Netflix</p>
                 </div>
             </div>
        <div><img src={add} alt="icon" /></div>
     </div>
          ))}
        </div>
        <div className='flex justify-center items-center'>
         <button onClick={()=> redir('/')} className='h-8 w-24  font-semibold font-sora text-blue-600 text-base'>Show More</button>
         <IoIosArrowDown />
         </div>
    </div>
    </div>
  )
}

export default People