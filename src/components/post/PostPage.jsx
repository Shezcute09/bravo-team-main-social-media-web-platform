import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = () => {
  const [uploadProgress, setUploadProgress] = useState(0);

  const redir = useNavigate();

  const jwtToken = localStorage.getItem('jwtToken');

  // Validation Schema
  const validationSchema = Yup.object({
    content: Yup.string()
      .required('Post content is required.')
      .max(500, 'Content cannot exceed 500 characters.'),
    files: Yup.mixed().test(
      'fileSize',
      'Each file must be less than 5MB.',
      (value) => {
        if (!value || !value.length) return true; // Allow empty file uploads
        return Array.from(value).every((file) => file.size <= 5242880); // 5MB in bytes
      }
    ),
  });

  // Initial Form Values
  const initialValues = {
    content: '',
    files: null,
  };

  // Submit Handler
  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    formData.append('content', values.content);
    if (values.files) {
      Array.from(values.files).forEach((file) =>
        formData.append('files', file)
      );
    }

    try {
      const response = await axios.post(
        'https://bravonet.onrender.com/api/posts',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${jwtToken}`,
          },
          onUploadProgress: (progressEvent) => {
            const percentage = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentage);
          },
        }
      );

      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }

      alert('Post created successfully!');
      console.log('Server Response:', response.data);
      resetForm();
      setUploadProgress(0);
      redir('/home');
    } catch (error) {
      if (error.response) {
        console.error('Server Error:', error.response.data);
        alert('Failed to create the post. Please try again.');
      } else {
        console.error('Error:', error.message);
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Create a New Post
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-4">
            {/* Content Field */}
            <div>
              <label
                htmlFor="content"
                className="block text-gray-600 font-medium mb-2"
              >
                Post Content
              </label>
              <Field
                as="textarea"
                id="content"
                name="content"
                placeholder="Write your post content here..."
                className="w-full p-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:outline-none"
                rows={6}
              />
              <ErrorMessage
                name="content"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* File Upload Field */}
            <div>
              <label
                htmlFor="files"
                className="block text-gray-600 font-medium mb-2"
              >
                Attach Media Files
              </label>
              <input
                id="files"
                name="files"
                type="file"
                multiple
                accept="image/*,video/*"
                onChange={(e) => setFieldValue('files', e.target.files)}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
              />
              <ErrorMessage
                name="files"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Upload Progress */}
            {uploadProgress > 0 && (
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-sm text-gray-600">{uploadProgress}%</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
            >
              Create Post
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreatePostPage;
