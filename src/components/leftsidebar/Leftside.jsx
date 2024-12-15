import React from "react";
import white from "../../assets/whiteB.svg";
import Dp from "../../assets/images/profile.png";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { sidebarLinks } from "../../constants";

const Leftside = () => {
  return (
    <>
      <div className="w-[280px] h-screen bg-white border-r flex flex-col rounded-lg overflow-hidden">
        <nav className="flex flex-col h-full">
          <div className="flex flex-col gap-6 p-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={white} alt="Logo" className="h-8 w-auto" />
              <h1 className="font-bold text-2xl">BravoNet</h1>
            </div>

            {/* Profile Section */}
            <Link to={`/profile/`} className="flex items-center gap-4">
              <img
                src={Dp}
                alt="profile"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="flex flex-col truncate">
                <p className="text-base font-semibold">Salami Taoreed Adebayo</p>
                <p className="text-sm text-violet-500 truncate">@iamtsalami</p>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="relative w-full">
              <AiOutlineSearch className="absolute left-3 top-3 text-gray-400 text-lg" />
              <input
                type="search"
                placeholder="Search"
                className="w-full p-3 pl-10 bg-gray-100 rounded-lg outline-none text-sm"
              />
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col gap-4">
              {sidebarLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.route}
                    className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100"
                  >
                    <img
                      src={link.imgURL}
                      alt="icon"
                      className="h-6 w-6 object-contain"
                    />
                    <span className="text-sm font-medium truncate">
                      {link.label}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Leftside;


// import React from 'react';
// import white from '../../assets/whiteB.svg';
// import Dp from '../../assets/images/profile.png';
// import { Link, NavLink } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { sidebarLinks } from '../../constants';

// const Leftside = () => {
//   return (
//     <>
//       <nav className="w-[280px] h-screen bg-white border-r flex flex-col">
//         <div className="flex flex-col gap-6 p-4">
//           {/* Logo */}
//           <div className="flex items-center gap-3">
//             <img src={white} alt="Logo" className="h-8 w-auto" />
//             <h1 className="font-bold text-2xl">BravoNet</h1>
//           </div>

//           {/* Profile Section */}
//           <Link to={`/profile/`} className="flex items-center gap-4">
//             <img
//               src={Dp}
//               alt="profile"
//               className="h-12 w-12 rounded-full object-cover"
//             />
//             <div className="flex flex-col truncate">
//               <p className="text-base font-semibold">Salami Taoreed Adebayo</p>
//               <p className="text-sm text-violet-500 truncate">@iamtsalami</p>
//             </div>
//           </Link>

//           {/* Search Bar */}
//           <div className="relative w-full">
//             <AiOutlineSearch className="absolute left-3 top-3 text-gray-400 text-lg" />
//             <input
//               type="search"
//               placeholder="Search"
//               className="w-full p-3 pl-10 bg-gray-100 rounded-lg outline-none text-sm"
//             />
//           </div>

//           {/* Navigation Links */}
//           <ul className="flex flex-col gap-4">
//             {sidebarLinks.map((link) => (
//               <li key={link.label}>
//                 <NavLink
//                   to={link.route}
//                   className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100"
//                 >
//                   <img
//                     src={link.imgURL}
//                     alt="icon"
//                     className="h-6 w-6 object-contain"
//                   />
//                   <span className="text-sm font-medium truncate">
//                     {link.label}
//                   </span>
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Leftside;


// import React from 'react'
// import white from '../../assets/whiteB.svg';
// import Dp from '../../assets/images/profile.png';
// import { Link, NavLink } from 'react-router-dom'
// import { AiOutlineSearch } from 'react-icons/ai';
// import { sidebarLinks } from '../../constants';



// const Leftside = () => {
//   return (
//   <>
//   <nav>
//     <div className='flex flex-col gap-4 p-4'>
//         <div className='flex'>
//         <img src={white} alt="" />
//         <h1 className='font-bold font-sora text-3xl mt-2'>BravoNet</h1>
//         </div>
//         {/* Profile */}
//         <Link to ={`/profile/`} className='flex gap-3 items-center'>
//         <img src= {Dp} alt="profile" className='h-14 w-14 rounded-full' />
//         {/* fetch names from api {user.name and @user.username} */}
//         <div className='flex flex-col'>
//             <p>Salami Taoreed Adebayo</p>
//             <p className='text-violet-200'>@iamtsalami</p>
//         </div>
//         </Link>
//       {/* search bar */}
//         <div className='relative w-full'>
//           <div> <AiOutlineSearch className='absolute left-1 top-3 w-10'/></div>
//            <input type='search' placeholder='Search' className='rounded-md w-full p-2 bg-[#F1F1F1] outline-none'/>
//         </div>
//         {/* navs */}
//         <ul className='flex flex-col gap-6'>
//          <Link></Link>
//          {sidebarLinks.map((link) =>{
//           return(
//               <li key={link.label} className=''>
//               <NavLink to={link.route} className="flex gap-2 items-center p-3">
//                 {/* get the logo url */}
//               <img src={link.imgURL} alt="icon" className='group-hover:invert-black' />
//                   {link.label} 
//               </NavLink>
//             </li>
//           )
//          })}
//         </ul>
//     </div>

//   </nav>
//   </>
//   )
// }

// export default Leftside;