// src/components/Authentication/PasswordRecovery.js
import React, { useState } from 'react';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');

  const handleRecovery = () => {
    // Implement password recovery functionality here
    console.log('Recovering password for:', email);
  };

  return (
    <div className="password-recovery">
      <h2>Recover Password</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={handleRecovery}>Recover Password</button>
    </div>
  );
};

export default PasswordRecovery;
