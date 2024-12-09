import React, { useState } from 'react';
import add from '../../assets/Add.svg';
import img from '../../assets/images/image.png';
import { BiArrowToBottom } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import axios from 'axios';
import Swal from 'sweetalert2';

const People = () => {
  const jwtToken = localStorage.getItem('jwtToken');
  const [users, setUsers] = useState([
    {
      id: ':6741be30b7f7b6439a8f2ed1',
      name: 'Oyindamola Odunlami',
      username: '@oyinOdun',
      avatar: 'https://via.placeholder.com/40',
      isFollowing: true,
    },
    {
      id: '6741bd76b7f7b6439a8f2ece',
      name: 'Tolulope Adekanmbi',
      username: '@toluAde',
      avatar: 'https://via.placeholder.com/40',
      isFollowing: false,
    },
    {
      id: '6741bcdbb7f7b6439a8f2ecb',
      name: 'David Abiodun',
      username: '@davidab',
      avatar: 'https://via.placeholder.com/40',
      isFollowing: true,
    },
    {
      id: '6741ad0f8fad96d8b0091ed4',
      name: 'Dev Dauddy',
      username: '@devDauudy',
      avatar: 'https://via.placeholder.com/40',
      isFollowing: true,
    },
    // Add more users as needed
  ]);

  const handleAddFriend = async (friendId) => {
    try {
      const response = await axios.post(
        `https://bravonet.onrender.com/api/profile/add-friend/${friendId}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      if (response.status !== 200) {
        throw new Error('Failed to submit form');
      }

      Swal.fire({
        title: 'Success!',
        text: `Your data has been submitted successfully: ${friendId}`,
        icon: 'success',
        confirmButtonText: false,
        timer: 1500,
      });
    } catch (error) {
      console.error('Error adding friend:', error);
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        ttitle: 'Oops...',
        text: 'Something went wrong!',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="border rounded-md flex flex-col">
      <div className="text-center mt-8">
        <h1 className="font-sora font-semibold text-xl">People you may know</h1>
      </div>
      {/* using mapping to fectch friends from ApI*/}
      <div>
        <div className="p-6">
          {users.map((friend, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-between font-sora py-2 gap-4"
            >
              <div className="flex gap-2 items-center ">
                <img
                  src={img}
                  alt="profile"
                  className="h-14 w-14 rounded-full"
                />
                <div className="flex flex-col">
                  <p>{friend.name}</p>
                  <p className="text-gray-400">Product Designer at Netflix</p>
                </div>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleAddFriend(friend.id)}
              >
                <img src={add} alt="icon" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => redir('/')}
            className="h-8 w-24  font-semibold font-sora text-blue-600 text-base"
          >
            Show More
          </button>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default People;
