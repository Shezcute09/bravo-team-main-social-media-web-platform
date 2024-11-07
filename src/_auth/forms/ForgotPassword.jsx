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
    <div className="h-screen w-full flex flex-row flex-wrap">
      {/* blue side */}
      <div className="bg-[#0540F2] w-[40%] h-screen text-white flex flex-col justify-center items-center">
        <div className="flex mt-10">
          <img className="w-[100px] h-[100px] -mt-5" src={logo} alt="" />
          <h1 className="ml-2 text-5xl font-bold">BravoNet</h1>
        </div>
        <div className="text-center justify-center ">
          <h1 className="text-3xl font-semibold mt-8">Welcome to BravoNet</h1>
          <Image
            className=""
            loading="lazy"
            cloudName="dml48ptj8"
            publicId="https://res.cloudinary.com/dml48ptj8/image/upload/v1730573582/Welcome-amico_1_xd73nr.png"
          ></Image>
          <p className="text-xl font-normal text-center text-white">
            Connect, share, and discover in a <br /> space created just for you.
            Let’s get <br /> started!
          </p>
          <img src={dots} alt="Dot" className="mt-8 mx-auto" />
        </div>
      </div>
      {/*white side */}
      <div className="justify-center items-center mx-auto mt-32">
        <div className="w-[600px]">
          <div className="flex">
            <MdOutlineKeyboardArrowLeft className="text-2xl" />
            <button
              onClick={() => redir("/login")}
              className="font-bold text-base text-black"
            >
              Back to Login
            </button>
          </div>
          <div>
            <h1 className="text-blue-600 font-bold text-3xl py-2">
              Forgot Password?
            </h1>
            <p className="font-normal text-base text-black">
              Don’t worry, happens to all of us. Enter your email below to{" "}
              <br />
              recover your password
            </p>
          </div>
          <div>
            {/* form */}
            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values, { resetForm }) => {
                resetForm();
                console.log(values);
                redir("/verify-code");

                // axios.get('http://localhost:8000/Users/'+values.email)
                // .then(reps=> {
                //   console.log(reps.data);
                //   if(reps.data.password === values.password) {
                //          setUser({isLoggedIn:true,data: {email: values.email,role: reps.data.role}})
                //         notify()
                //         setTimeout(() => {
                //           redir('/')

                //         }, 3000);
                //   }else{
                //     notify2()
                //  }
                // })
                // .catch(err=> {
                //  console.log(err)
                // })
              }}
            >
              {({ errors, touched }) => (
                <Form className="mt-8">
                  <fieldset>
                    <label className="font-bold text-xl" htmlFor="email">
                      Email
                    </label>
                    <div className="relative flex flex-col gap-1 ">
                      <Field
                        id="email"
                        className="text-sm font-normal text-black border-2 rounded-md py-2 px-4 border-[#0540F2] focus:outline-none focus:border-blue-600"
                        name="email"
                        type={toggle ? "text" : "email"}
                        placeholder="Enter Your Email Address"
                      />
                      <div className="absolute top-2 right-3 text-blue-800">
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
                  {errors.email && touched.email ? (
                    <div className="text-red-600">{errors.email}</div>
                  ) : null}
                  <button
                    className="w-full border-2 mt-[50px] border-blue-600  py-2 bg-blue-600 rounded-full text-base font-semibold text-white"
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
