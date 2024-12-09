import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import phone from '../../assets/phoneB.svg';
import amico1 from '../../assets/images/amico1.png';
import bravo from '../../assets/images/bravo.svg';
import dot from '../../assets/images/dot.svg';
import user from '../../assets/images/user.svg';
import eyeicon from '../../assets/images/eyeicon.svg'; // Add an eye-open icon
import eyeiconclosed from '../../assets/images/eyeiconclosed.svg'; // Add an eye-closed icon for hiding password
import axios from 'axios';
import Swal from 'sweetalert2';

const LoginForm = () => {
  const navigate = useNavigate();

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to handle form submission
  const onSubmit = async (values, { resetForm }) => {
    try {
      // Send data to the remote server
      const response = await axios.post(
        'https://bravonet.onrender.com/api/auth/login',
        values
      );

      if (response.status !== 200) {
        throw new Error('Failed to submit form');
      }

      Swal.fire({
        title: 'Success!',
        text: `Your data has been submitted successfully: ${values.email}`,
        icon: 'success',
        confirmButtonText: false,
        timer: 1500,
      });

      console.log('Server response:', response.data);

      // Save the jwtToken in the local storage
      localStorage.setItem('jwtToken', response.data.token);
      console.log(localStorage);

      // Reset the form
      resetForm();

      // Redirect to home
      navigate('/home');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),
    }),
    onSubmit,
  });

  // Toggle function for the password field
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen font-sora">
      {/* blue area */}
      <div className=" hidden md:flex bg-blue-600 h-screen w-[602px] text-white flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <img src={bravo} alt="BravoNet" className="h-[100px] w-[100px]" />
            <span className="ml-2 text-3xl font-bold">BravoNet</span>
          </div>
          <h2 className="text-xl font-sora font-bold">Welcome to BravoNet</h2>
          <img src={amico1} alt="Illustration" />
          <p className="mt-4 text-white text-center font-sora">
            Connect, share, and discover in a space created just for you.
            Let&#39;s get started!
          </p>
          <img src={dot} alt="Dot" className="mt-8 w-[59px] h-[10px]" />
        </div>
      </div>
      {/* white area */}
      <div className="flex justify-center w-[838px] h-screen items-center bg-white shadow-2xl md:mt-20">
        <div className="bg-white rounded-md p-8 w-full  md:w-[500px] self-start">
          <img className="mx-auto md:hidden" src={phone} alt="logo" />
          <h2 className="text-center mt-4 text-2xl font-bold text-blue-700 md:text-start mb-6">
            Login
          </h2>

          <div className="space-y-4">
            <form onSubmit={formik.handleSubmit} autoComplete="off">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="font-sora block text-sm font-medium text-gray-700"
                >
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
                    autoComplete="email"
                  />
                  <span className="absolute right-4">
                    <img
                      src={user}
                      alt="User icon"
                      className="h-5 w-5 text-blue-600"
                    />
                  </span>
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-600 text-sm mt-1">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative flex items-center mt-1">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'} // Toggle between text and password
                    placeholder="Enter your password"
                    className="w-full border border-blue-600 text-gray-700 px-4 py-2 rounded-md focus:outline-none focus:border-blue-600"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    autoComplete="current-password"
                  />
                  <span
                    className="absolute right-4 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    <img
                      src={showPassword ? eyeicon : eyeiconclosed} // Change icon based on password visibility
                      alt="Toggle password visibility"
                      className="h-5 w-5 text-blue-600"
                    />
                  </span>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-600 text-sm mt-1">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>

              <button
                type="submit"
                className="w-full border-2 bg-blue-600 text-white py-2 rounded-full mb-2"
              >
                Login
              </button>
              <button
                type="button"
                className="w-full border-2 border-blue-600 text-black py-2 rounded-full"
                onClick={() => navigate('/forgot-password')}
              >
                Forgot Password?
              </button>

              <p className=" text-center text-sm mt-4">
                Don’t have an account?{' '}
                <Link to="/signup">
                  <span className="text-blue-600 underline font-semibold">
                    Sign Up
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
