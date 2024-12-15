import React from 'react'
import { useNavigate } from 'react-router-dom';
import amico from '../../assets/images/amico1.png'
import drille from '../../assets/images/drille.png'
import players from '../../assets/images/players.png'

const Community = () => {
  let redir = useNavigate();
  return (
    <div>
         <div className="w-full flex flex-wrap gap-4 py-4 border-white shadow lg:gap-10 mt-6 justify-center items-center ">
          <button onClick={() => redir("/forYou")} className="w-20 lg:w-32 h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg bg-[#F1F1F1] ">
            For you
          </button>
          <button onClick={() => redir("/follower")}className="w-20 lg:w-32 h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg  bg-[#F1F1F1]">
            Friends
          </button>
          <button  className="w-28 lg:w-32 h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg bg-[#F1F1F1]">
            Community
          </button>
          <button className="w-20 lg:w-32 h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg bg-[#F1F1F1] ">
            Trending
          </button>
        </div>
      <div className='border rounded-md mt-10'>
      <div className='mt-10'>
      <h1 className=' text-center font-sora font-semibold text-2xl'>suggested for you</h1>
      </div>
     {/* grid layout */}
  <div className='grid  gap-6 grid-cols-1 md:grid-cols-2 p-10'>
      <div className='w-full  justify-center items-center h-[299px] border border-black rounded-md'>
      <img src={drille} className='h-40 w-full' alt="" />
      <div className='ml-10'>
        <h3 className='font-sora font-medium text-lg'>Naija Graphic Designers</h3>
       <div className='flex flex-row gap-10 md:gap-24 flex-wrap py-4 font-medium text-base font-sora text-gray-600'>
        <div className='flex '>
        <p>134k Members</p>
       </div>
       <div>
      <p>50post/day</p>
      </div>
    </div>     
    </div>
      <div className='w-full px-10 '>
      <button onClick={()=> redir('/')} className='h-12 w-full text-center rounded-md border md:mb-16 border-black font-semibold text-base px-10'>
      Join Community</button>
      </div>
    </div>
      <div className='w-full justify-center items-center  h-[299px] border border-black rounded-md'>
      <img src={players} className='h-40 w-full' alt="" />
    <div className='ml-10'>
    <h3 className='font-sora font-medium text-lg'>Naija Graphic Designers</h3>
     <div className='flex flex-row  gap-10 md:gap-24 flex-wrap py-4 font-medium text-base font-sora text-gray-600'>
      <div className='flex '>
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
      <div className='w-full justify-center items-center  h-[299px] border border-black rounded-md '>
      <img src={players} className='h-40 w-full' alt="" />
    <div className='ml-10'>
    <h3 className='font-sora font-medium text-lg'>Naija Graphic Designers</h3>
     <div className='flex flex-row gap-10 md:gap-24  flex-wrap py-4 font-medium text-base font-sora text-gray-600'>
      <div className='flex '>
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
      <div className='w-full justify-center items-center  h-[299px] border border-black rounded-md'>
      <img src={drille} className='h-40 w-full' alt="" />
    <div className='ml-10'>
    <h3 className='font-sora font-medium text-lg'>Naija Graphic Designers</h3>
     <div className='flex flex-row gap-10 md:gap-24 flex-wrap py-4 font-medium text-base font-sora text-gray-600'>
      <div className='flex'>
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
      </div>

      <div className='text-center'>
          <button onClick={()=> redir('/')} className='h-12 w-60 font-semibold font-sora text-lg'>See More</button>
        </div>
  </div>
    </div>
  )
}

export default Community