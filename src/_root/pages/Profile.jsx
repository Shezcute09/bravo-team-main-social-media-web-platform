import React from 'react'
import { IoClose, IoLocationOutline } from "react-icons/io5";
import { Image } from 'cloudinary-react';
import camera from "../../assets/camera.svg";
import close from "../../assets/close.svg";
import { useNavigate } from "react-router-dom"; 
import img from "../../assets/images/image.png"
import { MdOutlineEmail } from 'react-icons/md';
import { RxDotFilled } from 'react-icons/rx';
import ui from "../../assets/ui.svg";
import dob from "../../assets/dob.svg";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { VscShare } from "react-icons/vsc";
import { AiOutlineRetweet } from "react-icons/ai";




const Profile = () => {
  let redir = useNavigate();
      return (
        <section className="flex flex-col">
          <div className="relative flex w-full min-h-[100px] justify-center">
            {/* bg image */}
            <Image
              className="absolute w-full h-[200px]"
              loading="Lazy"
              cloudName="dml48ptj8"
              publicId="https://res.cloudinary.com/dml48ptj8/image/upload/v1731674830/profile_ljafjn.jpg"
            ></Image>
            
            {/* back display pic */}
            <div className="absolute w-1/4 flex flex-row items-center justify-center top-24 md:top-28 gap-3">
              <img
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                src={camera}
                alt="photoplus"
              />
              <img
                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                src={close}
                alt="close"
              />
            </div>
          </div>
          {/* integrate display picture */}
          <div className="flex gap-40 px-14 flex-row right absolute top-44 h-[100px] min-w-[50%] ">
            <div className="flex gap-2">
              <img src={img} alt="DP" />
              <p className='font-sora text-xl font-semibold mt-10'>Salami Taoreed Adebayo</p>
            </div>
            <div className="mt-10 font-sora text-base font-semibold ">
              <button   onClick={() => redir("/user-profile")} className="border-2 border-[#F1F3F4] bg-[#F1F3F4] rounded-md w-[150px] h-10 text-black bg-[#F1F3F4">
                Edit Profile
              </button>
            </div>
          </div>
        
            {/* about using Api*/}
          <div className='mt-52 ml-14'>
              <div className='flex font-sora text-base font-normal'>
                <button>578 Followers</button>
                <div className='flex'><RxDotFilled className='w-6 h-6'/>
                <button>50 Following</button>
                </div>
              </div>
              <div className='flex gap-10 py-4'>
                  <div className='flex'>
                    <img src={ui} alt="icon" />
                    UIUX Designer at CareerEx</div>
                  <div className='flex'><IoLocationOutline className='w-6 h-6' />Lives in Lagos, Nigeria</div>
              </div>
              <div className='flex gap-10'>
                   <div className='flex'>
                    <img src={dob} alt="icon" />
                    January 2, 1998</div>
                   <div className='flex'><MdOutlineEmail className='w-6 h-6' />Designer@gmail.com</div>
              </div>
          </div>
          {/* profile Nav work onClick*/}
          <div className='flex flex-row justify-evenly mt-6 gap-6'>
          <button className="w-20 lg:w-32 h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg bg-white ">
            Post
          </button>
          <button className="w-20 lg:w-32 h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg  bg-white">
            Photos
          </button>
          <button className="w-28 lg:w-32  h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg bg-white">
            Videos
          </button>
          <button className="w-20 lg:w-32 h-10 font-sora font-medium text-lg text-black hover:bg-blue-700 hover:text-white  rounded-lg bg-white ">
            Likes
          </button>
          </div>
          <hr />
           {/* profile */}
           <div className='flex gap-3 items-center ml-12'>
            <img src= {img} alt="profile" className='h-14 w-14 rounded-full' />
            {/* fetch names from api {user.name and @user.username} */}
             <div className='flex flex-col'>
             <p>Salami Taoreed Adebayo</p>
             <p className='text-gray-400'>1 Hour ago</p>
             </div>
           </div>
           {/* sent user post fetch with Api*/}
           <div className='ml-10'>
            <p className='p-4'>
            3 Ways To Use Brand Colors Creatively:
            You don’t need lots of colors to make your website look good... Instead  try using your brand color in one of these creative styles.Use black and white for text and background and only use your brand color for buttons, icons or highlighting text.Bold: Use the brand color for the background or large areas paired with black and white.3:Colourful: Use different shades or tones of your brand color, so it appears colorful, without using many colors.
            Credit: @kat.irwin.design
            </p>
           </div>
          
          <hr />
          {/* like,comment.repost and share */}
          <div className=" flex flex-row flex-wrap py-2 ml-12"> 
            <div className="flex flex-1 gap-6">
              <button className="font-sora font-normal text-base ">15 Likes</button>
              <button className="font-sora font-normal text-base ">10 Comments</button>
              <button className="font-sora font-normal text-base ">2 repost</button>
            </div>
            <div className="flex gap-6 ">
            <MdFavoriteBorder className="w-8 h-8" />
            <FaRegComment className="w-8 h-8"/>
            <AiOutlineRetweet className="w-8 h-8"/>
            <VscShare className="w-8 h-8"/>
            </div>
          </div>
          <hr />
        </section>
        
        
      );
    };
    
   
    

export default Profile