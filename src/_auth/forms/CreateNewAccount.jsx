import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { Image } from "cloudinary-react";

import bravo from "../../assets/images/bravo.svg";
import dot from "../../assets/images/dot.svg";
import user from "../../assets/images/user.svg";
import eyeicon from "../../assets/images/eyeicon.svg"; // Add an eye-open icon
import eyeiconclosed from "../../assets/images/eyeiconclosed.svg"; // Add an eye-closed icon for hiding password
import { useNavigate } from "react-router-dom";

const CreateNewAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      month: "",
      day: "",
      year: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),

      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"), // Adding confirm password validation
      month: Yup.number()
        .required("Month is required")
        .min(1, "Invalid month")
        .max(12, "Invalid month"),
      day: Yup.number()
        .required("Day is required")
        .min(1, "Invalid day")
        .max(31, "Invalid day"),
      year: Yup.number()
        .required("Year is required")
        .min(1900, "Invalid year")
        .max(new Date().getFullYear(), "Invalid year"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className=" flex gap-[154px] ">
      <div className="create-new-account1 w-[45vw] bg-[#0540F2] flex flex-col justify-center items-center">
        <div className="spinner mb-[55px]">
          <img src={bravo} alt="" />
          <h3 className=" sora-text text-5xl font-bold leading-[60.48px] text-white">
            BravoNet
          </h3>
        </div>{" "}
        <h5 className="sora-text text-[32px] font-semibold leading-[10px] text-center text-white">
          Welcome to BravoNet
        </h5>
        <Image
          className="my-[5px]"
          cloudName="df54hjsrx"
          publicId="https://res.cloudinary.com/df54hjsrx/image/upload/v1730462559/Welcome_faffqg.png"
        ></Image>
        <p className="text-[#D9D9D9] text-center text-xl leading-[25.2px] mb-[38px]">
          Connect, share, and discover in a <br /> space created just for you.
          Let’s get <br /> started!
        </p>
        <img src={dot} alt="" />
      </div>

      <div className="create-new-account2 w-[30vw] pt-[130px] pb-[155px] ">
        <form
          onSubmit={formik.handleSubmit}
          className="sora-tex flex flex-col gap-4"
        >
          <h5 className="sora-text h5">Create your Account</h5>
          <div>
            <label htmlFor="fullName">First Name</label>
            <div className="relative flex items-center mt-1">
              <input
                className="input focus:outline-none focus:border-blue-600"
                id="fullName"
                placeholder="Enter Full name"
                name="fullName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
              />
              <span className="absolute right-4">
                <img
                  src={user}
                  alt="User icon"
                  className="h-5 w-5 text-blue-600"
                />
              </span>
            </div>
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-red-600 text-sm mt-1">
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>

          <div>
            <label htmlFor="email">Email Address</label>
            <div className="relative flex items-center mt-1">
              <input
                className="input focus:outline-none focus:border-blue-600"
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
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

          <div>
            <label>Date of Birth</label>
            <div className="flex gap-1">
              <div>
                <label htmlFor="">Month</label>
                <input
                  className="input focus:outline-none focus:border-blue-600 w-[193px]"
                  id="month"
                  name="month"
                  type="number"
                  placeholder="Month"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.month}
                />
                {formik.touched.month && formik.errors.month ? (
                  <div className="text-red-600 text-sm mt-1">
                    {formik.errors.month}
                  </div>
                ) : null}
              </div>

              <div>
                <label htmlFor="Day">Day</label>
                <input
                  className="input focus:outline-none focus:border-blue-600 w-[78px]"
                  id="day"
                  name="day"
                  type="number"
                  placeholder="10"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.day}
                />
                {formik.touched.day && formik.errors.day ? (
                  <div className="text-red-600 text-sm mt-1">
                    {formik.errors.day}
                  </div>
                ) : null}
              </div>
              <div>
                <label htmlFor="Year">Year</label>
                <input
                  className="input focus:outline-none focus:border-blue-600 w-[119px]"
                  id="year"
                  name="year"
                  type="number"
                  placeholder="19xx"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.year}
                />
                {formik.touched.year && formik.errors.year ? (
                  <div className="text-red-600 text-sm mt-1">
                    {formik.errors.year}
                  </div>
                ) : null}
              </div>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <div className="relative flex items-center mt-1">
                <input
                  className="input focus:outline-none focus:border-blue-600"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  type={showPassword ? "text" : "password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <span
                  className="absolute right-4 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  <img
                    src={!showPassword ? eyeiconclosed : eyeicon} // Change icon based on password visibility
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
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="relative flex items-center mt-1">
              <input
                className="input focus:outline-none focus:border-blue-600"
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"} // Dynamic type based on showConfirmPassword
                placeholder="Confirm password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              <span
                className="absolute right-4 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                <img
                  src={!showConfirmPassword ? eyeiconclosed : eyeicon}
                  alt="Toggle password visibility"
                  className="h-5 w-5 text-blue-600"
                />
              </span>
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-600 text-sm mt-1">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>
          <div className="mt-[70px]">
            <button
              className="button-bg-blue "
              type="submit"
              onClick={() => navigate("/login")}
            >
              Next
            </button>

            <p className="text-center sora-text p mt-[5px]">
              Already have an account?{" "}
              <Link to="/login" className="text-[#0540F2]">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewAccount;
