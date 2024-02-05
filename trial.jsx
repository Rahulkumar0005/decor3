import React, { useState } from 'react';

const Trial = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Update the state with the selected file
    setSelectedFile(file);

    // Display a preview of the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Create FormData object
      const formData = new FormData();

      // Append the file to the FormData object
      formData.append('image', selectedFile, selectedFile.name);

      // Now you can send the formData to your server using a library like Axios or fetch
      // For this example, let's just log the FormData object
      console.log(formData);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Trial;
