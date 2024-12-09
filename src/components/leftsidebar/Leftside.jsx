import React from 'react'
import white from '../../assets/whiteB.svg';
import Dp from '../../assets/images/profile.png';
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai';
import { sidebarLinks } from '../../constants';



const Leftside = () => {
  return (
  <>
  <nav>
    <div className='flex flex-col gap-4 p-4'>
        <div className='flex'>
        <img src={white} alt="" />
        <h1 className='font-bold font-sora text-3xl mt-2'>BravoNet</h1>
        </div>
        {/* Profile */}
        <Link to ={`/profile/`} className='flex gap-3 items-center'>
        <img src= {Dp} alt="profile" className='h-14 w-14 rounded-full' />
        {/* fetch names from api {user.name and @user.username} */}
        <div className='flex flex-col'>
            <p>Salami Taoreed Adebayo</p>
            <p className='text-violet-200'>@iamtsalami</p>
        </div>
        </Link>
      {/* search bar */}
        <div className='relative w-full'>
          <div> <AiOutlineSearch className='absolute left-1 top-3 w-10'/></div>
           <input type='search' placeholder='Search' className='rounded-md w-full p-2 bg-[#F1F1F1] outline-none'/>
        </div>
        {/* navs */}
        <ul className='flex flex-col gap-6'>
         <Link></Link>
         {sidebarLinks.map((link) =>{
          return(
              <li key={link.label} className=''>
              <NavLink to={link.route} className="flex gap-2 items-center p-3">
                {/* get the logo url */}
              <img src={link.imgURL} alt="icon" className='group-hover:invert-black' />
                  {link.label} 
              </NavLink>
            </li>
          )
         })}
        </ul>
    </div>

  </nav>
  </>
  )
}

export default Leftside