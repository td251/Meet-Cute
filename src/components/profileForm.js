// src/components/ProfileForm.js
import React, { useState, useEffect } from 'react';
import ImageUpload from './ImageUpload';
import './ProfileForm.css'; // Import the CSS file

const ProfileForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [bio, setBio] = useState('');
  const [prompts, setPrompts] = useState({
    prompt1: '',
    prompt2: '',
  });
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);
  const [drinks, setDrinks] = useState('no');
  const [smokes, setSmokes] = useState('no');
  const [hidePreferences, setHidePreferences] = useState(false);

  const handleImageUpload = (image) => {
    setSelectedImage(image);
  };

  const handlePromptsChange = (event, promptKey) => {
    setPrompts((prevPrompts) => ({
      ...prevPrompts,
      [promptKey]: event.target.value,
    }));
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleDrinksChange = (event) => {
    setDrinks(event.target.value);
  };

  const handleSmokesChange = (event) => {
    setSmokes(event.target.value);
  };

  const handleHidePreferencesChange = () => {
    setHidePreferences((prevHidePreferences) => !prevHidePreferences);
  };

  useEffect(() => {
    // Calculate age based on the selected date of birth
    if (dob) {
      const birthDate = new Date(dob);
      const currentDate = new Date();
      const ageDiff = currentDate.getFullYear() - birthDate.getFullYear();

      // Check if birthday has occurred this year
      if (currentDate.getMonth() < birthDate.getMonth() ||
          (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        setAge(ageDiff - 1);
      } else {
        setAge(ageDiff);
      }
    }
  }, [dob]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log({
      selectedImage,
      bio,
      prompts,
      dob,
      age,
      drinks,
      smokes,
      hidePreferences,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ImageUpload onUpload={handleImageUpload} />
        <div className="uploaded-images">
          {selectedImage && (
            <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
          )}
        </div>
        <textarea
          placeholder="Write something about yourself..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        {/* Date of Birth Section */}
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            value={dob}
            onChange={handleDobChange}
          />
          {age !== null && (
            <p>Your age is: {age} years</p>
          )}
        </div>
        {/* Drinking and Smoking Preferences */}
        <div className>
          <label>Do you drink?</label>
          <div>
            <input
              type="radio"
              id="drinkYes"
              value="yes"
              checked={drinks === 'yes'}
              onChange={handleDrinksChange}
            />
            <label htmlFor="drinkYes">Yes</label>
            <input
              type="radio"
              id="drinkNo"
              value="no"
              checked={drinks === 'no'}
              onChange={handleDrinksChange}
            />
            <label htmlFor="drinkNo">No</label>
          </div>
        </div>
        <div>
          <label>Do you smoke?</label>
          <div>
            <input
              type="radio"
              id="smokeYes"
              value="yes"
              checked={smokes === 'yes'}
              onChange={handleSmokesChange}
            />
            <label htmlFor="smokeYes">Yes</label>
            <input
              type="radio"
              id="smokeNo"
              value="no"
              checked={smokes === 'no'}
              onChange={handleSmokesChange}
            />
            <label htmlFor="smokeNo">No</label>
          </div>
        </div>
        {/* Option to Hide Preferences */}
        <div>
          <input
            type="checkbox"
            id="hidePreferences"
            checked={hidePreferences}
            onChange={handleHidePreferencesChange}
          />
          <label htmlFor="hidePreferences">Hide drinking and smoking preferences from profile</label>

        </div>
        {/* Prompt 1 Section */}
        <div>
          <label>Prompt 1:</label>
          <input
            type="text"
            value={prompts.prompt1}
            onChange={(e) => handlePromptsChange(e, 'prompt1')}
          />
        </div>
        {/* Prompt 2 Section */}
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
        quakeztm ©
      </div>
    </div>
  );
};

export default ProfileForm;
