import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { PiEyeLight, PiEyeSlashThin } from "react-icons/pi";
import { Image } from "cloudinary-react";
import logo from "../../assets/logo.svg";
import dots from "../../assets/dot.svg";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  code: Yup.string()
    .required("OTP code is required")
    .matches(/^\d{6}$/, "OTP must be a 6-digit number"),
});

const VerifyCode = () => {
  const email = sessionStorage.getItem("email");
  let redir = useNavigate();
  let [toggle, setToggle] = useState(false);

  return (
    <div className="h-screen w-full flex flex-row flex-wrap">
      {/* blue side */}
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
            Connect, share, and discover in a space created just for you.Let’s
            get started!
          </p>
          <img src={dots} alt="Dot" className="mt-8 mx-auto" />
        </div>
      </div>
      {/*white side */}
      <div className="justify-center w-full md:w-[60%] items-center mx-auto md:mt-20 lg:mt-32 ">
        <div className="w-full px-5 md:w-[400px] lg:w-[600px] md:ml-20">
          <div className="flex">
            <MdOutlineKeyboardArrowLeft className="text-2xl hidden md:flex" />
            <button
              onClick={() => redir("/login")}
              className="font-bold text-base text-black hidden md:flex"
            >
              Back to Login
            </button>
          </div>
          <div className="w-full">
            <h1 className="text-blue-600 font-bold text-3xl py-2  text-center  md:text-start">
              Verify Code
            </h1>
            <p className="hidden md:block font-normal text-base text-black">
              An authentication code has been sent to your email.
            </p>
            <p className="text-center font-normal text-base text-black md:hidden">
              An authentication code has been sent to <br /> your email.
            </p>
          </div>
          <div>
            {/* form */}
            <Formik
              initialValues={{
                code: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={async (values, { resetForm }) => {
                try {
                  // Make POST request to forgot-password endpoint
                  const response = await axios.post(
                    "https://bravonet.onrender.com/api/auth/verify-otp",
                    {
                      email: email, // Send email value from form
                      code: values.code,
                    }
                  );

                  // Handle success response
                  console.log("Response:", response.data);
                  alert("otp verified successfully!");

                  // Navigate to verification page
                  redir("/set-new-password");
                  resetForm();
                } catch (error) {
                  // Handle error response

                  console.error(
                    "Error:",
                    error.response?.data?.message || error.message
                  );
                  alert(
                    error.response?.data?.message ||
                      "Invalid OTP. Please try again."
                  );
                }

                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form className="mt-8 w-full">
                  <fieldset>
                    <label className="font-bold text-xl" htmlFor="code">
                      Enter code
                    </label>
                    <div className="relative flex flex-col gap-1 ">
                      <Field
                        id="code"
                        className="input focus:outline-none focus:border-blue-600"
                        name="code"
                        type={toggle ? "text" : "tel"}
                        placeholder="Enter code to verify"
                      />
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
                    <p className="font-normal text-base">
                      Didn’t receive a code?
                      <button
                        className="text-red-500 font-semibold"
                        type="button"
                      >
                        Resend
                      </button>
                    </p>
                  </fieldset>
                  {errors.code && touched.code ? (
                    <div className="text-red-600 text-sm mt-1">
                      {errors.code}
                    </div>
                  ) : null}
                  <button
                    className="w-full mt-10 border-2 border-blue-600  py-2 bg-blue-600 rounded-full text-base font-semibold text-white"
                    type="submit"
                  >
                    Verify
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

export default VerifyCode;
