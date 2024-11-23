import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { IoClose } from "react-icons/io5";
import { Image } from "cloudinary-react";
import camera from "../../assets/camera.svg";
import close from "../../assets/close.svg";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  profileName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
const navigate = useNavigate;

const Userprofile = () => {
  return (
    <section className="flex flex-col">
      <div className="relative flex w-full min-h-[100px] justify-center">
        {/* bg image */}
        <Image
          className="absolute w-full h-[200px]"
          loading="Lazy"
          cloudName="dml48ptj8"
          publicId="https://res.cloudinary.com/dml48ptj8/image/upload/v1731674830/profile_ljafjn.jpg"
        ></Image>
        <div className="absolute py-2 flex flex-row justify-between bg-opacity-55 bg-white w-full">
          <IoClose className="mt-2" />
          <h1 className="text-black font-sora font-semibold text-sm mt-2">
            Edit Profile
          </h1>
          <button
            className="w-[50px] font-sora border-2 border-blue-600  bg-blue-600 rounded-full text-base font-semibold text-white"
            onClick={() => navigate("/")}
            type="submit"
          >
            Save
          </button>
        </div>
        {/* back display pic */}
        <div className="absolute w-1/4 flex flex-row items-center justify-center top-24 md:top-28 gap-3">
          <img
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
            src={camera}
            alt="photoplus"
          />
          <img
            className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
            src={close}
            alt="close"
          />
        </div>
      </div>
      {/* integrate display picture  remove the red border*/}
      <div className="flex flex-row  left-10 md:left-24 lg:left-32 absolute top-44 h-[100px] min-w-[80%] border-2 border-red-700">
        <div className="flex-1">
          <img src="" alt="DP" />
        </div>
        <div className="mt-6 font-sora text-base font-semibold ">
          <button className="border-2 mx-3 border-blue-600 rounded-md w-[120px] h-10 file:text-white  bg-blue-600">
            Change Profile
          </button>
          <button className="border-2 border-[#F1F3F4] rounded-md w-[120px] h-10 text-red-600 bg-[#F1F3F4">
            Change Profile
          </button>
        </div>
      </div>
      <hr className="mt-48 text-black" />
      {/* yup and fomik form*/}
      <div className="min-w-[80%] mt-6 ">
        <Formik
          initialValues={{
            profileName: "",
            userName: "",
            bio: "",
            location: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            // same shape as initial values
            console.log(values);
            // axios.get('http://localhost:8000/Users/'+values.email)
            // .then(reps=> {
            //   console.log(reps.data);
            //   if(reps.data.password === values.password) {
            //          setUser({isLoggedIn:true,data: {email: values.email,fullname: values.fullName,role: reps.data.role}})

            //         notify()
            //         setTimeout(() => {
            //           redir('/contact')

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
            <Form className="flex flex-col gap-3 w-[80%] mx-auto ">
              <label
                className="font-sora font-semibold text-xs text-[#858487]"
                htmlFor="profileName"
              >
                Profile Name
              </label>
              <Field
                className="w-full outline-none text-black border rounded border-blue-600 py-3 pl-4"
                name="profileName"
                type="profileName"
                placeholder="Salami Taoreed Adebayo"
              />
              {errors.profileName && touched.profileName ? (
                <div className="text-red-600 text-[12px] ">
                  {errors.profileName}
                </div>
              ) : null}

              <label
                className="font-sora font-semibold text-xs text-[#858487]"
                htmlFor="email"
              >
                Username
              </label>
              <Field
                className="w-full outline-none text-black border rounded border-blue-600 py-3 pl-4"
                name="userName"
                type="userName"
                placeholder="@iamtsalami"
              />
              {errors.userName && touched.userName ? (
                <div className="text-red-600 text-[12px] ">
                  {errors.userName}
                </div>
              ) : null}

              <label
                className="font-sora font-semibold text-xs text-[#858487]"
                htmlFor="subject"
              >
                {" "}
                Bio
              </label>
              <Field
                className="w-full h-20 outline-none text-black border rounded border-blue-600 py-3 pl-4"
                name=" bio"
                type=" bio"
                placeholder="|Brand & Product Designer| Certified Builder| Chelsea FC Fan|Muslim| AS genotype|"
              />
              {errors.bio && touched.bio ? (
                <div className="text-red-600 text-[12px] ">{errors.bio}</div>
              ) : null}

              <label
                className="font-sora font-semibold text-xs text-[#858487]"
                htmlFor="message"
              >
                Location
              </label>
              <Field
                className="w-full outline-none text-black border rounded border-blue-600 py-3 pl-4"
                name="location"
                type="location"
                placeholder="Ibadan,Nigeria"
              />
              {errors.location && touched.location ? (
                <div className="text-red-600 text-[12px] ">
                  {errors.location}
                </div>
              ) : null}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Userprofile;
