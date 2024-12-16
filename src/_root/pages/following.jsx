import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const Following = () => {
    let redir = useNavigate();

  return (
    <div>
       <div className="w-full flex flex-wrap gap-4 border rounded outline-none py-4 border-white shadow lg:gap-10 mt-6 justify-center items-center ">
          <button onClick={() => redir("/follower")} className="w-20 lg:w-32 h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg bg-[#F1F1F1] ">
          Followers
          </button>
          <button className="w-20 lg:w-32 h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg  bg-[#F1F1F1]">
          Following
          </button>
      </div>

     {/* will using mapping to fetch data and friends */}
      <div className='shadow rounded-lg border mt-6 p-6'>
      {Array(8).fill("").map((item,index)=>(
        <div key={index} className='flex justify-between p-2'>
        <Link to ={"/"} className='flex gap-3 items-center'>
        <img src="" alt="profile" className='h-14 w-14 rounded-full' />
        {/* fetch names from api {user.name and @user.username} */}
        <div className='flex flex-col'>
            <p>Cristiano Ronaldo</p>
            <p className='text-violet-200'>@c.ronaldo</p>
        </div>
        </Link>
        <div>
          {/* onclick or onhover floowing should change to follow */}
        <button className="w-20 lg:w-32 h-10 font-sora font-normal text-sm border mt-2 border-blue-800 text-blue-600 hover:bg-blue-700 hover:text-white rounded-full ">
          Following
          </button>
        </div>
        </div>
         ))}
      </div>
   
    </div>
  )
}

export default Following