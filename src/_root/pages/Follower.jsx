import React, { useState } from 'react';
import img from '../../assets/images/image.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [activeTab, setActiveTab] = useState('Followers');
  const [users, setUsers] = useState([
    {
      id: '6741be30b7f7b6439a8f2ed1',
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

  const navigate = useNavigate();

  const toggleFollow = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
  };

  const jwtToken = localStorage.getItem('jwtToken');

  const handleUserFetch = async (userId) => {
    // Fetch user data from the API
    try {
      const response = await axios.get(
        'https://bravonet.onrender.com/api/profile/view-profile/' + userId,
        // 'https://bravonet.onrender.com/api/view-profile/' + userId,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      // Check if the response is successful based on the HTTP status code
      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }
      console.log('userId', userId);

      console.log('Response:', response.data);
      navigate('/profile');
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Tabs */}
        <div className="flex">
          <button
            onClick={() => setActiveTab('Followers')}
            className={`flex-1 py-2 text-center ${
              activeTab === 'Followers'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Followers
          </button>
          <button
            onClick={() => setActiveTab('Following')}
            className={`flex-1 py-2 text-center ${
              activeTab === 'Following'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Following
          </button>
        </div>

        {/* User List */}
        <div className="p-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between py-2 border-b"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={img}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div
                  className="cursor-pointer"
                  onClick={() => handleUserFetch(user.id)}
                >
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.username}</p>
                </div>
              </div>
              <button
                onClick={() => toggleFollow(user.id)}
                className={`px-4 py-1 text-sm rounded-full border ${
                  user.isFollowing
                    ? 'border-blue-500 text-blue-500'
                    : 'bg-blue-500 text-white'
                }`}
              >
                {user.isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
