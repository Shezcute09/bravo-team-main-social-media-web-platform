const handlePictureChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    setProfilePicture(file);
    setPreviewImage(URL.createObjectURL(file));
  }
};

const handlePictureSave = async () => {
  if (!profilePicture) {
    alert('No picture selected');
    return;
  }

  const formData = new FormData();
  formData.append('profilePicture', profilePicture);

  console.log('File to upload:', profilePicture.name);

  console.log('formData Contents: ');

  console.log('File selected:', profilePicture.name, profilePicture.type);

  try {
    const response = await axios.post('end-point', formData, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      onUploadProgress: (progressEvent) => {
        const percentage = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setUploadProgress(percentage);
      },
    });

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
</div>;
