import React from 'react';

const UserProfile = () => {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    frequentFlyerNumber: 'FF1234567890',
  };

  return (
    <div className="profile">
      <h2>Profile Information</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Frequent Flyer Number:</strong> {user.frequentFlyerNumber}</p>
    </div>
  );
};

export default UserProfile;
