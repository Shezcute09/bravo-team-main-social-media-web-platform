import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mt-2 text-center">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={goHome}
        className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFoundPage;
