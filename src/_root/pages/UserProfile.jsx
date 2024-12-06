import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IoClose } from 'react-icons/io5';
import { Image } from 'cloudinary-react';
import camera from '../../assets/camera.svg';
import close from '../../assets/close.svg';
import img from '../../assets/images/image.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Userprofile = () => {
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem('jwtToken');
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(100, 'Must be 100 characters or less')
      .required('Required'),
    username: Yup.string()
      .min(2, 'Must be at least 2 characters')
      .matches(/^@/, 'Username must start with "@"')
      .required('Required'),
    bio: Yup.string().max(150, 'Bio must be 150 characters or less'),
    location: Yup.string()
      .max(100, 'Location must be 100 characters or less')
      .required('Location is Required'),
  });

  const initialValues = {
    name: '',
    username: '',
    bio: '',
    location: '',
  };

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  console.log('File to upload:', profilePicture);

  const handlePictureSave = async () => {
    if (!profilePicture) {
      alert('No picture selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', profilePicture);
    console.log(jwtToken);

    try {
      const response = await axios.post(
        'https://bravonet.onrender.com/api/uploads/profile_picture/upload-profile-picture',
        formData,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent) => {
            const percentage = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentage);
          },
        }
      );

      alert('Picture uploaded successfully');
      console.log('Server Response:', response.data);
    } catch (error) {
      if (error.response) {
        console.error('Server Error Response:', error.response.data);
        console.error('Status Code:', error.response.status);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
      alert('Failed to upload picture. Please try again');
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log('Form submitted:', values);

    try {
      const formattedData = {
        bio: values.bio,
        location: values.location,
        username: values.username,
        name: values.name,
      };

      // Send data to the remote server
      const response = await axios.put(
        'https://bravonet.onrender.com/api/profile/update-profile',
        formattedData,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
      alert('Form submitted successfully');
      console.log('Server Response:', response.data);
    } catch (error) {
      if (error.response) {
        console.error('Server Error Response:', error.response.data);
        console.error('Status Code:', error.response.status);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
      alert('Failed to submit form. Please try again');
    }

    navigate('/');
  };

  return (
    <section className="flex flex-col">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ submitForm }) => (
          <>
            <div className="relative flex w-full min-h-[100px] justify-center">
              {/* bg image */};
              <Image
                className="absolute w-full h-[200px]"
                loading="Lazy"
                cloudName="dml48ptj8"
                publicId="https://res.cloudinary.com/dml48ptj8/image/upload/v1731674830/profile_ljafjn.jpg"
              ></Image>
              ;
              <div className="absolute py-2 flex flex-row justify-between bg-opacity-55 bg-white w-full">
                <IoClose className="mt-2" />
                <h1 className="text-black font-sora font-semibold text-sm mt-2">
                  Edit Profile
                </h1>
                <button
                  className="w-[50px] font-sora border-2 border-blue-600 bg-blue-600 rounded-full text-base font-semibold text-white"
                  type="button"
                  onClick={submitForm} // Trigger form submission
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
            {/* <div className="flex gap-72 flex-row right absolute top-44 h-[100px] min-w-[50%]">
              <div className="">
                <img src={img} alt="DP" />
              </div>
              <div className="mt-10 font-sora text-base font-semibold ">
                <button className="border-2 mx-3 border-blue-600 rounded-md w-[150px] h-10 text-white  bg-blue-600">
                  Change Picture
                </button>
                <button className="border-2 border-[#F1F3F4] bg-[#F1F3F4] rounded-md w-[150px] h-10 text-red-600 bg-[#F1F3F4">
                  Save Picture
                </button>
              </div>
            </div>
            <hr className="mt-48 text-black" /> */}

            {/* Profile Picture Section */}
            <div className="flex gap-72 flex-row right absolute top-44 h-[100px] min-w-[50%]">
              <div>
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <img
                    src={img}
                    alt="Default"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                )}
                {uploadProgress > 0 && (
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 text-center">
                      {uploadProgress}%
                    </p>
                  </div>
                )}
              </div>
              <div className="flex mt-10 font-sora text-base font-semibold">
                <label className="border-2 mx-3 border-blue-600 rounded-md w-[150px] h-10 text-white bg-blue-600 flex items-center justify-center cursor-pointer">
                  Change Picture
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePictureChange}
                    className="hidden"
                  />
                </label>
                <button
                  onClick={handlePictureSave}
                  className="border-2 border-[#F1F3F4] bg-[#F1F3F4] rounded-md w-[150px] h-10 text-red-600"
                >
                  Save Picture
                </button>
              </div>
            </div>
            <hr className="mt-48 text-black" />

            {/* Formik Form */}
            <div className="min-w-[80%] mt-6">
              <Form className="flex flex-col gap-3 w-[80%] mx-auto">
                <label
                  className="font-sora font-semibold text-xs text-[#858487]"
                  htmlFor="name"
                >
                  Profile Name
                </label>
                <Field
                  className="w-full outline-none text-black border rounded border-blue-600 py-3 pl-4"
                  name="name"
                  type="text"
                  placeholder="Salami Taoreed Adebayo"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-600 text-[12px]"
                />

                <label
                  className="font-sora font-semibold text-xs text-[#858487]"
                  htmlFor="username"
                >
                  Username
                </label>
                <Field
                  className="w-full outline-none text-black border rounded border-blue-600 py-3 pl-4"
                  name="username"
                  type="text"
                  placeholder="@iamtsalami"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-600 text-[12px]"
                />

                <label
                  className="font-sora font-semibold text-xs text-[#858487]"
                  htmlFor="bio"
                >
                  Bio
                </label>
                <Field
                  as="textarea"
                  className="w-full h-20 outline-none text-black border rounded border-blue-600 py-3 pl-4"
                  name="bio"
                  placeholder="|Brand & Product Designer| Certified Builder| Chelsea FC Fan|Muslim| AS genotype|"
                />
                <ErrorMessage
                  name="bio"
                  component="div"
                  className="text-red-600 text-[12px]"
                />

                <label
                  className="font-sora font-semibold text-xs text-[#858487]"
                  htmlFor="location"
                >
                  Location
                </label>
                <Field
                  className="w-full outline-none text-black border rounded border-blue-600 py-3 pl-4"
                  name="location"
                  type="text"
                  placeholder="Ibadan, Nigeria"
                />
                <ErrorMessage
                  name="location"
                  component="div"
                  className="text-red-600 text-[12px]"
                />
              </Form>
            </div>
          </>
        )}
      </Formik>
    </section>
  );
};

export default Userprofile;
