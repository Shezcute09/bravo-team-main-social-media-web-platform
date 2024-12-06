import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IoClose } from 'react-icons/io5';
import camera from '../../assets/camera.svg';
import close from '../../assets/close.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Userprofile = () => {
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem('jwtToken');
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

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

  const handlePictureSave = async () => {
    if (!profilePicture) {
      alert('No picture selected.');
      return;
    }

    const formData = new FormData();
    formData.append('profilePicture', profilePicture);

    try {
      const response = await axios.post('your-upload-endpoint', formData, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Profile picture uploaded successfully.');
      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      alert('Failed to upload profile picture. Please try again.');
    }
  };

  const handleSubmit = async (values) => {
    console.log('Form submitted:', values);

    try {
      const formattedData = {
        bio: values.bio,
        location: values.location,
        username: values.username,
        name: values.name,
      };

      const response = await axios.put('your-update-endpoint', formattedData, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          'Content-Type': 'application/json',
        },
      });

      alert('Form submitted successfully.');
      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
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
              <div className="absolute py-2 flex flex-row justify-between bg-opacity-55 bg-white w-full">
                <IoClose className="mt-2" />
                <h1 className="text-black font-sora font-semibold text-sm mt-2">
                  Edit Profile
                </h1>
                <button
                  className="w-[50px] font-sora border-2 border-blue-600 bg-blue-600 rounded-full text-base font-semibold text-white"
                  type="button"
                  onClick={submitForm}
                >
                  Save
                </button>
              </div>
            </div>

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
                    src={'/path-to-default-image.png'}
                    alt="Default"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                )}
              </div>
              <div className="mt-10 font-sora text-base font-semibold">
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
                {/* Other Form Fields */}
              </Form>
            </div>
          </>
        )}
      </Formik>
    </section>
  );
};

export default Userprofile;
