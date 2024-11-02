import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import google from '../../assets/images/google.svg';
import appleicon from '../../assets/images/appleicon.svg';
import amico1 from '../../assets/images/amico1.png';
import bravo from '../../assets/images/bravo.svg';
import dot from '../../assets/images/dot.svg';
import user from '../../assets/images/user.svg';
import eyeicon from '../../assets/images/eyeicon.svg';

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    }),
    onSubmit: (values) => {
      console.log('Form data:', values);
    },
  });

  return (
    <div className="flex justify-center items-center" style={{ width: '1440px', height: '1024px' }}>
      <div className="bg-blue-600 text-white flex flex-col justify-center items-center" style={{ width: '602px', height: '1024px' }}>
        <div className="flex flex-col items-center" style={{ width: '396px', height: '628px' }}>
          <div className="flex items-center mb-4">
            <img src={bravo} alt="BravoNet" className="h-[100px] w-[100px]" />
            <span className="ml-2 text-3xl font-bold">BravoNet</span>
          </div>
          <h2 className="text-xl font-bold">Welcome to BravoNet</h2>
          <img src={amico1} alt="Illustration" className="w-[300px] h-[300px]" />
          <p className="mt-4 text-center">
            Connect, share, and discover in a space created just for you. Let's get started!
          </p>
          <img src={dot} alt="Dot" className="mt-8 w-[59px] h-[10px]" />
        </div>
      </div>

      <div className="flex justify-center items-center bg-white shadow-2xl" style={{ width: '838px', height: '1024px' }}>
        <div className="bg-white rounded-md p-8 w-[500px] -mt-48">
          <h2 className="text-2xl font-bold text-blue-700 text-start mb-6">Login</h2>

          <div className="space-y-4">
            <button
              className="w-full bg-gray-100 border-2 border-blue-600 text-black py-2 rounded-md flex justify-center items-center"
              onClick={() => navigate('/signup')}
            >
              <img src={google} alt="Google" className="w-5 h-5 mr-2" />
              Login with Google
            </button>

            <button
              className="w-full bg-gray-100 border-2 border-blue-600 text-black py-2 rounded-md flex justify-center items-center"
              onClick={() => navigate('/signup')}
            >
              <img src={appleicon} alt="Apple" className="w-5 h-5 mr-2" />
              Login with Apple
            </button>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="px-4 text-gray-500">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email, Phone Number, or Username
                </label>
                <div className="relative flex items-center mt-1">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter email, phone number or username"
                    className="w-full border border-blue-600 text-gray-700 px-4 py-2 rounded-md focus:outline-none focus:border-blue-600"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  <span className="absolute right-4">
                    <img src={user} alt="User icon" className="h-5 w-5 text-blue-600" />
                  </span>
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-600 text-sm mt-1">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative flex items-center mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full border border-blue-600 text-gray-700 px-4 py-2 rounded-md focus:outline-none focus:border-blue-600"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  <span className="absolute right-4">
                    <img src={eyeicon} alt="Show password" className="h-5 w-5 text-blue-600 cursor-pointer" />
                  </span>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-600 text-sm mt-1">{formik.errors.password}</div>
                ) : null}
              </div>

              <button type="submit" className="w-full border-2 bg-blue-600 text-white py-2 rounded-md mb-2">
                Login
              </button>
              <button
  type="button"
  className="w-full border-2 border-blue-600 text-black py-2 rounded-md"
  onClick={() => navigate('/forget-password')} // Navigate to ForgetPassword page
>
  Forgot Password?
</button>

              <p className="text-sm mt-4">
                Don't have an account?{' '}
                <a href="#" className="text-blue-600 underline font-semibold" onClick={() => navigate('/signup')}>
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

