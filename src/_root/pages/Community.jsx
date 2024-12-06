import React from 'react'

const Community = () => {
  return (
    <div>
         <div className="w-full flex flex-wrap gap-4  lg:gap-10 mt-6 justify-center items-center ">
          <button onClick={() => redir("/forYou")} className="w-20 lg:w-32 h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg bg-[#F1F1F1] ">
            For you
          </button>
          <button className="w-20 lg:w-32 h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg  bg-[#F1F1F1]">
            Friends
          </button>
          <button  onClick={() => redir("/community")} className="w-28 lg:w-32  h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg bg-[#F1F1F1]">
            Community
          </button>
          <button className="w-20 lg:w-32 h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg bg-[#F1F1F1] ">
            Trending
          </button>
        </div>
      
      <div className='mt-10'>
      <h1 className=' text-center font-sora font-semibold text-2xl'>suggested for you</h1>
      <div>Join community</div>
      </div>
    </div>
  )
}

export default Community