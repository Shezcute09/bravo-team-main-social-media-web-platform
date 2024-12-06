import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { PiEyeLight, PiEyeSlashThin } from "react-icons/pi";
import { Image } from "cloudinary-react";
import axios from "axios"; // Import Axios for API calls
import logo from "../../assets/logo.svg";
import dots from "../../assets/dot.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; // Import useState for toggle functionality

// Validation schema using Yup
const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"), // Validate email format and require the field
});

const ForgotPassword = () => {
  const redir = useNavigate(); // Hook for navigation
  const [toggle, setToggle] = useState(false); // State to toggle password visibility

  return (
    <div className="h-screen w-full flex flex-row flex-wrap">
      {/* Blue side */}
      <div className="hidden bg-[#0540F2] w-[40%] h-screen text-white md:flex flex-col justify-center items-center">
        <div className="flex mt-10">
          <img className="w-[100px] h-[100px] -mt-5" src={logo} alt="" />
          <h1 className="ml-2 md:text-4xl lg:text-5xl font-bold">BravoNet</h1>
        </div>
        <div className="text-center justify-center">
          <h1 className="md:text-[26px] lg:text-3xl font-semibold mt-8">
            Welcome to BravoNet
          </h1>
          <Image
            className="lg:ml-10"
            loading="lazy"
            cloudName="dml48ptj8"
            publicId="https://res.cloudinary.com/dml48ptj8/image/upload/v1730573582/Welcome-amico_1_xd73nr.png"
          ></Image>
          <p className="md:text-lg lg:text-2xl md:w-[300px] lg:w-[396px] font-normal text-center text-white">
            Connect, share, and discover in a space created just for you. Let’s
            get started!
          </p>
          <img src={dots} alt="Dot" className="mt-8 mx-auto" />
        </div>
      </div>
      {/* White side */}
      <div className="justify-center items-center w-full md:w-[60%] px-6 md:mx-auto md:mt-20 lg:mt-32">
        <div className="w-full items-center md:w-[400px] lg:w-[600px] px-5 md:ml-10 lg:ml-20">
          <div className="flex">
            <MdOutlineKeyboardArrowLeft className="text-2xl hidden md:flex" />
            <button
              onClick={() => redir("/login")}
              className="font-bold text-base text-black hidden md:flex"
            >
              Back to Login
            </button>
          </div>
          <div>
            <h1 className="text-blue-600 font-bold text-3xl py-2 text-center md:text-start">
              Forgot Password
            </h1>
            <p className="font-normal w-full text-base text-black text-center md:text-start md:w-full lg:w-[420px]">
              Please enter your email address or mobile number to search for
              your account.
            </p>
          </div>
          <div>
            {/* Formik Form */}
            <Formik
              initialValues={{
                email: "", // Initial email field value
              }}
              validationSchema={SignupSchema} // Attach validation schema
              onSubmit={async (values, { resetForm }) => {
                try {
                  // Make POST request to forgot-password endpoint
                  const response = await axios.post(
                    "https://bravonet.onrender.com/api/auth/forgot-password",
                    {
                      email: values.email, // Send email value from form
                    }
                  );

                  // Handle success response
                  console.log("Response:", response.data);
                  alert("Password reset link sent to your email!");

                  // Navigate to verification page

                  redir("/verify-code");
                } catch (error) {
                  // Handle error response
                  console.error("Error:", error.response || error.message);
                  alert("An error occurred. Please try again.");
                }

                resetForm();
              }}
            >
              {({ errors, touched }) => (
                <Form className="mt-8">
                  <fieldset>
                    {/* Email Input */}
                    <label className="font-bold text-xl" htmlFor="email">
                      Email
                    </label>
                    <div className="relative flex flex-col gap-1">
                      <Field
                        id="email"
                        className="input focus:outline-none focus:border-blue-600"
                        name="email"
                        type={toggle ? "text" : "email"} // Toggle text or email type
                        placeholder="Enter Your Email Address"
                      />
                      {/* Toggle Visibility Icon */}
                      <div className="absolute top-4 right-3 text-blue-800">
                        {toggle ? (
                          <PiEyeLight
                            onClick={() => setToggle((prev) => !prev)}
                          />
                        ) : (
                          <PiEyeSlashThin
                            onClick={() => setToggle((prev) => !prev)}
                          />
                        )}
                      </div>
                    </div>
                  </fieldset>
                  {/* Validation Error */}
                  {errors.email && touched.email ? (
                    <div className="text-red-600">{errors.email}</div>
                  ) : null}
                  {/* Submit Button */}
                  <button
                    className="w-full border-2 mt-[50px] border-blue-600 py-2 bg-blue-600 rounded-full text-base font-semibold text-white"
                    type="submit"
                  >
                    Next
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
