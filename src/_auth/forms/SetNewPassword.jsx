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
  password: Yup.string()
    .required("Please enter your new password")
    .matches(/^(?=.*[a-z])/, "Must contain one lowercase character")
    .matches(/^(?=.*[A-Z])/, "Must contain one uppercase character")
    .matches(/^(?=.*[0-9])/, "Must contain one number")
    .matches(/^(?=.*[!@#$%^&*])/, "Must contain one special character"),
});

const SetNewPassword = () => {
  let redir = useNavigate();
  let [toggle, setToggle] = useState(false);
  let [Newtoggle, setNewToggle] = useState(false);

  return (
    <div className="h-screen w-full flex">
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
            className="mx-auto"
            loading="lazy"
            cloudName="dml48ptj8"
            publicId="https://res.cloudinary.com/dml48ptj8/image/upload/v1730573582/Welcome-amico_1_xd73nr.png"
          ></Image>
          <p className="md:text-lg lg:text-2xl  font-normal text-center text-white">
            Connect, share, and discover in a <br /> space created just for
            you.Let’s get <br /> started!
          </p>
          <img src={dots} alt="Dot" className="mt-8 mx-auto" />
        </div>
      </div>
      {/* White Side */}
      <div className="flex-1 flex justify-center md:items-center px-4 py-16 md:py-20 lg:py-32">
        <div className="w-full max-w-md">
          <div className="flex items-center mb-4">
            <MdOutlineKeyboardArrowLeft className="text-2xl hidden md:flex" />
            <button
              onClick={() => redir("/login")}
              className="font-bold text-base text-black hidden md:flex ml-1"
            >
              Back to Login
            </button>
          </div>
          <h1 className="text-blue-600 font-bold text-3xl md:text-4xl mb-2 text-center max-md:text-left">
            Set a new password
          </h1>
          <p className="font-normal text-base text-black mb-6 text-center max-md:text-left">
            Your previous password has been reset. Please set a new password for
            your account.
          </p>

          {/* Form */}
          <Formik
            initialValues={{ password: "" }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              resetForm();
              console.log(values);
              redir("/login");
            }}
          >
            {({ errors, touched }) => (
              <Form className="mt-4">
                <fieldset className="mb-4">
                  <label className="font-bold text-lg" htmlFor="password">
                    Create New Password
                  </label>
                  <div className="relative flex flex-col gap-1 mt-2">
                    <Field
                      id="password"
                      className="text-sm font-normal text-black border-2 rounded-md py-2 px-4 border-[#0540F2] focus:outline-none focus:border-blue-600"
                      name="password"
                      type={toggle ? "text" : "password"}
                      placeholder="Enter New Password"
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
                  {errors.password && touched.password && (
                    <div className="text-red-600 mt-1">{errors.password}</div>
                  )}
                </fieldset>

                <fieldset className="mb-4">
                  <label className="font-bold text-lg" htmlFor="Newpassword">
                    Re-Enter New Password
                  </label>
                  <div className="relative flex flex-col gap-1 mt-2">
                    <Field
                      id="Newpassword"
                      className="text-sm font-normal text-black border-2 rounded-md py-2 px-4 border-[#0540F2] focus:outline-none focus:border-blue-600"
                      name="Newpassword"
                      type={Newtoggle ? "text" : "password"}
                      placeholder="Re-Enter New Password"
                    />
                    <div className="absolute top-2 right-3 text-blue-800 cursor-pointer">
                      {Newtoggle ? (
                        <PiEyeLight
                          onClick={() => setNewToggle((prev) => !prev)}
                        />
                      ) : (
                        <PiEyeSlashThin
                          onClick={() => setNewToggle((prev) => !prev)}
                        />
                      )}
                    </div>
                  </div>
                  {errors.Newpassword && touched.Newpassword && (
                    <div className="text-red-600 mt-1">
                      {errors.Newpassword}
                    </div>
                  )}
                </fieldset>

                <button
                  className="w-full mt-8 border-2 border-blue-600 py-2 bg-blue-600 rounded-full text-base font-semibold text-white"
                  type="submit"
                >
                  Set New Password
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
