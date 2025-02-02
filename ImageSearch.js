import React, { useState } from 'react';
import axios from 'axios';

function ImageSearch() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('https://your-backend-url.onrender.com/api/image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert(response.data.response);
    } catch (error) {
      alert('Error uploading image.');
    }
  };

  return (
    <div className="image-search">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default ImageSearch;
