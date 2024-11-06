import React from 'react';
import { useNavigate } from 'react-router-dom';
import google from '../../assets/images/google.svg'; // Adjust the path
import appleicon from '../../assets/images/appleicon.svg'; // Adjust the path
import amico1 from '../../assets/images/amico1.png'; // Adjust the path
import bravo from '../../assets/images/bravo.svg'; // Adjust the path
import dot from '../../assets/images/dot.svg'; // Adjust the path

const SignupForm = () => {
  const navigate = useNavigate();

  // Handlers for navigating to different routes
  const handleGoogleSignup = () => {
    // You can also add actual Google signup functionality here
    navigate('/next-page'); // Change to the actual route for next page
  };

  const handleAppleSignup = () => {
    // You can also add actual Apple signup functionality here
    navigate('/next-page'); // Change to the actual route for next page
  };

  const handleCreateAccount = () => {
    // You can also handle form submissions here or navigate directly
    navigate('/next-page'); // Change to the actual route for next page
  };

  return (
    <div className="flex justify-center items-center" style={{ width: '1440px', height: '1024px' }}>
      {/* Left Section - Blue Banner */}
      <div className="bg-blue-600 text-white flex flex-col justify-center items-center" style={{ width: '602px', height: '1024px' }}>
        <div className="flex flex-col items-center" style={{ width: '396px', height: '628px' }}>
          <div className="flex items-center mb-4">
            <img src={bravo} alt="BravoNet" className="h-[100px] w-[100px]" />
            <span className="ml-2 text-3xl font-bold">BravoNet</span>
          </div>
          <h2 className="text-xl font-bold">Welcome to BravoNet</h2>
          <img src={amico1} alt="Illustration" className="w-[300px] h-[300px]" />
          <p className="mt-4 text-white text-center">
            Connect, share, and discover in a space created just for you. Let's get started!
          </p>
          <img src={dot} alt="Dot" className="mt-8 w-[59px] h-[10px]" />
        </div>
      </div>

      {/* Right Section - Sign Up Options */}
      <div className="flex justify-center items-center bg-white shadow-2xl" style={{ width: '838px', height: '1024px' }}>
        {/* Sign-Up Container */}
        <div className="bg-white rounded-md p-8 w-[500px] -mt-48">
          <h2 className="text-2xl font-bold text-blue-700 text-start mb-6">Sign Up</h2>

          <div className="space-y-4">
            {/* Sign Up with Google */}
            <button
              onClick={handleGoogleSignup}
              className="w-full bg-gray-100 border-2 border-blue-600 text-black py-2 rounded-md flex justify-center items-center"
            >
              <img src={google} alt="Google" className="w-5 h-5 mr-2" />
              Sign up with Google
            </button>

            {/* Sign Up with Apple */}
            <button
              onClick={handleAppleSignup}
              className="w-full bg-gray-100 border-2 border-blue-600 text-black py-2 rounded-md flex justify-center items-center"
            >
              <img src={appleicon} alt="Apple" className="w-5 h-5 mr-2" />
              Sign up with Apple
            </button>

            {/* Separator */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="px-4 text-gray-500">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            {/* Create new account */}
            <button
              onClick={handleCreateAccount}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Create new account
            </button>

            <p className="mt-4 text-sm text-gray-600">
              By signing up, you agree to the{' '}
              <a href="#" className="text-blue-600 underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-600 underline">
                Privacy Policy
              </a>.
            </p>

            <p className="mt-6 text-center">Already have an account?</p>

            {/* Login Button */}
            <button
              onClick={() => navigate('/login')}
              className="w-full border-2 border-blue-600 text-black py-2 rounded-md"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

