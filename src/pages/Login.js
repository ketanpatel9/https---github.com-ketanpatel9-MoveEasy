// Login.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login.css'; // Make sure your CSS file is correctly referenced

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // You will need to add logic for authenticating the user here
    console.log('Login logic goes here');
    // navigate('/dashboard');
  };

  const handleGoogleSignIn = () => {
    // You will need to implement Google Sign-In logic here
    console.log('Google Sign-In logic goes here');
    // navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" placeholder="Username" name="username" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" name="password" required />
          </div>
          <button type="submit" className="login-button">LOGIN</button>
          <button type="button" onClick={handleGoogleSignIn} className="google-sign-in-button">
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;