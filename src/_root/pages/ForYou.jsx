import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { IoIosMore } from "react-icons/io";

const ForYou = () => {
  let redir = useNavigate();
  return (
    <div>

        <div className="w-full flex flex-wrap gap-4 border rounded outline-none py-4 border-white shadow lg:gap-10 mt-6 justify-center items-center ">
          <button className="w-20 lg:w-32 h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg bg-[#F1F1F1] ">
            For you
          </button>
          <button onClick={() => redir("/follower")} className="w-20 lg:w-32 h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg  bg-[#F1F1F1]">
            Friends
          </button>
          <button  onClick={() => redir("/community")} className="w-28 lg:w-32  h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg bg-[#F1F1F1]">
            Community
          </button>
          <button className="w-20 lg:w-32 h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg bg-[#F1F1F1] ">
            Trending
          </button>
        </div>

        
     {/* will using mapping to fetch data and friends you may know*/}
      <div className='shadow rounded-lg border mt-6 p-6'>
      {Array(8).fill("").map((item,index)=>(
        <div key={index} className='flex justify-between p-2'>
        <Link to ={"/"} className='flex gap-3 items-center'>
        <img src="" alt="profile" className='h-14 w-14 rounded-full' />
        {/* fetch names from api {user.name and @user.username} */}
        <div className='flex flex-col'>
            <p>2 new post from Reno Omokri</p>
            <p className='text-violet-200'>2 minutes ago.</p>
        </div>
        </Link>
        <div>
          {/* onclick to show more info */}
          <IoIosMore />
        </div>
        </div>
         ))}
      </div>

    </div>
  )
}

export default ForYou