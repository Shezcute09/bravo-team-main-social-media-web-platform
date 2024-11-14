import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { PiEyeLight, PiEyeSlashThin } from "react-icons/pi";
import { Image } from "cloudinary-react";
import logo from "../../assets/logo.svg";
import dots from "../../assets/dot.svg";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = () => {
  let redir = useNavigate();
  let [toggle, setToggle] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Blue Side */}
      <div className="bg-[#0540F2] md:w-2/5 w-full h-full md:h-screen text-white flex flex-col justify-center items-center hidden md:flex">
        <div className="flex mt-10 items-center">
          <img
            className="w-20 h-20 md:w-24 md:h-24 -mt-2"
            src={logo}
            alt="Logo"
          />
          <h1 className="ml-2 text-4xl md:text-5xl font-bold">BravoNet</h1>
        </div>
        <div className="text-center mt-8 px-4">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Welcome to BravoNet
          </h1>
          <Image
            className="mt-6 md:mt-8 max-w-full"
            loading="lazy"
            cloudName="dml48ptj8"
            publicId="https://res.cloudinary.com/dml48ptj8/image/upload/v1730573582/Welcome-amico_1_xd73nr.png"
          />
          <p className="text-lg md:text-xl font-normal mt-4 text-white">
            Connect, share, and discover in a <br /> space created just for you.
            Let’s get started!
          </p>
          <img src={dots} alt="Dots" className="mt-8 mx-auto w-16 md:w-20" />
        </div>
      </div>

      {/* White Side */}
      <div className="flex-1 flex justify-center md:items-center mt-16 md:mt-0 px-4">
        <div className="w-full max-w-md">
          <div className="flex items-center mb-4">
            <MdOutlineKeyboardArrowLeft className="text-2xl" />
            <button
              onClick={() => redir("/login")}
              className="font-bold text-base text-black ml-1"
            >
              Back to Login
            </button>
          </div>
          <h1 className="text-blue-600 font-bold text-3xl md:text-4xl mb-2">
            Forgot Password?
          </h1>
          <p className="font-normal text-base text-black mb-6">
            Please enter your email address or mobile number to recover your
            account.
          </p>

          {/* Form */}
          <Formik
            initialValues={{ email: "" }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              resetForm();
              console.log(values);
              redir("/verify-code");
            }}
          >
            {({ errors, touched }) => (
              <Form className="mt-4">
                <fieldset className="mb-4">
                  <label className="font-bold text-lg" htmlFor="email">
                    Email
                  </label>
                  <div className="relative flex flex-col gap-1 mt-2">
                    <Field
                      id="email"
                      className="text-sm font-normal text-black border-2 rounded-md py-2 px-4 border-[#0540F2] focus:outline-none focus:border-blue-600"
                      name="email"
                      type={toggle ? "text" : "email"}
                      placeholder="Enter Your Email Address"
                    />
                    <div className="absolute top-2 right-3 text-blue-800 cursor-pointer">
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
                  {errors.email && touched.email && (
                    <div className="text-red-600 mt-1">{errors.email}</div>
                  )}
                </fieldset>
                <button
                  className="w-full border-2 mt-8 border-blue-600 py-2 bg-blue-600 rounded-full text-base font-semibold text-white"
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
  );
};

export default ForgotPassword;
