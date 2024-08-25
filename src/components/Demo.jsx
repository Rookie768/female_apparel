import React, { useState } from 'react';

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div>
      <label htmlFor="imageInput">Upload Image:</label>
      <input type="file" id="imageInput" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="User uploaded" style={{ maxWidth: '100%' }} />}
    </div>
  )
}
