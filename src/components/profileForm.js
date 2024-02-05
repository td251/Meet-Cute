// src/components/ProfileForm.js
import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import './ProfileForm.css'; // Import the CSS file

const ProfileForm = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [bio, setBio] = useState('');
  const [prompts, setPrompts] = useState({
    prompt1: '',
    prompt2: '',
    // Add more prompts as needed
  });

  const handleImageUpload = (images) => {
    // Limit the number of images to 4
    const limitedImages = images.slice(0, 4);
    setSelectedImages(limitedImages);
  };

  const handlePromptsChange = (event, promptKey) => {
    setPrompts((prevPrompts) => ({
      ...prevPrompts,
      [promptKey]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log({ selectedImages, bio, prompts });
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <ImageUpload onUpload={handleImageUpload} />
      <div className="uploaded-images">
        {selectedImages.map((image, index) => (
          <img key={index} src={URL.createObjectURL(image)} alt={`Uploaded ${index + 1}`} />
        ))}
      </div>
      <textarea
        placeholder="Write something about yourself..."
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <div>
        <label>Prompt 1:</label>
        <input
          type="text"
          value={prompts.prompt1}
          onChange={(e) => handlePromptsChange(e, 'prompt1')}
        />
      </div>
      <div>
        <label>Prompt 2:</label>
        <input
          type="text"
          value={prompts.prompt2}
          onChange={(e) => handlePromptsChange(e, 'prompt2')}
        />
      </div>
      {/* Add more prompts as needed */}
      <button type="submit">Save Profile</button>
    </form>
    
    {/* Footer with quakeztm and copyright symbol */}
    <div className="footer">
      QUAKEZ ©
    </div>
  </div>
);
};
export default ProfileForm;
