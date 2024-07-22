import React, { useState } from 'react';
import axios from 'axios';

const ProfileCreation = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/profile', profile);
      alert('Profile created successfully');
    } catch (error) {
      console.error('Error creating profile', error);
    }
  };

  return (
    <div>
      <h3>Create Profile</h3>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={profile.firstName} onChange={handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={profile.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={profile.password} onChange={handleChange} />
        </label>
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default ProfileCreation;
