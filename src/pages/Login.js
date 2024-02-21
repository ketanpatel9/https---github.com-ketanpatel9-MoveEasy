import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login.css'; // Make sure your CSS file is correctly referenced

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isNewUser) {
      // Logic for signing up a new user
      console.log('Sign up logic goes here', { username, password, firstName, lastName, address, email });
    } else {
      // Logic for logging in an existing user
      console.log('Login logic goes here', { username, password });
    }
    navigate('/dashboard');
  };

  const handleGoogleSignIn = () => {
    // Logic for Google Sign-In
    console.log('Google Sign-In logic goes here');
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>{isNewUser ? 'Sign up' : 'Sign in'}</h2>
        <form onSubmit={handleSubmit}>
          {isNewUser && (
            <>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </>
          )}
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            {isNewUser ? 'SIGN UP' : 'LOGIN'}
          </button>
          <button type="button" onClick={handleGoogleSignIn} className="google-sign-in-button">
            Sign in with Google
          </button>
        </form>
        <p onClick={() => setIsNewUser(!isNewUser)}>
          {isNewUser ? 'Already have an account? Sign in' : 'New user? Sign up here'}
        </p>
      </div>
    </div>
  );
}

export default Login;
