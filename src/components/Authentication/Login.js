import React, { useState } from 'react';
import { loginUser } from '../../services/api';
import { useNavigate } from 'react-router-dom'; // For navigation after login

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      // Handle successful login
      // Assuming response contains a token
      localStorage.setItem('token', response.token); // Save token to localStorage
      navigate('/dashboard'); // Redirect to a protected route, like a dashboard
    } catch (err) {
      // Ensure err.message exists and handle different error types
      setError(err.message || 'An unexpected error occurred.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>Error: {error}</p>} {/* Display the error message */}
    </div>
  );
};

export default Login;


