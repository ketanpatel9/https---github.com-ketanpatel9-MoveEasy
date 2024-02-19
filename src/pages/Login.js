import React, { useState } from 'react';
import '../Login.css'; // Make sure to create and import your CSS file

function Login() {
  const [form, setForm] = useState({
    signInUsername: '',
    signInPassword: '',
    signUpUsername: '',
    signUpEmail: '',
    signUpPassword: '',
    signUpAddress: ''
  });
  const [isSignUp, setIsSignUp] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmitSignIn = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign In', form.signInUsername, form.signInPassword);
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Sign Up', form.signUpUsername, form.signUpEmail, form.signUpPassword, form.signUpAddress);
  };

  const toggleForms = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="container">
      {isSignUp ? (
        <form onSubmit={handleSubmitSignUp} className="sign-up-form">
          <h2 className="title">Sign up</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" name="signUpUsername" value={form.signUpUsername} onChange={handleChange} />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" name="signUpEmail" value={form.signUpEmail} onChange={handleChange} />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" name="signUpPassword" value={form.signUpPassword} onChange={handleChange} />
          </div>
          <div className="input-field">
            <i className="fas fa-address-card"></i>
            <input type="text" placeholder="Address" name="signUpAddress" value={form.signUpAddress} onChange={handleChange} />
          </div>
          <button type="submit" className="btn">Sign Up</button>
          <p className="social-text">Or Sign up with social platforms</p>
          <div className="social-media">
            {/* Add your social media links */}
          </div>
          <p className="account-text">
            Already have an account? <a href="#" onClick={toggleForms}>Sign in</a>
          </p>
        </form>
      ) : (
        <form onSubmit={handleSubmitSignIn} className="sign-in-form">
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" name="signInUsername" value={form.signInUsername} onChange={handleChange} />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" name="signInPassword" value={form.signInPassword} onChange={handleChange} />
          </div>
          <button type="submit" className="btn">Login</button>
          <p className="social-text">Or Sign in with social platforms</p>
          <div className="social-media">
            {/* Add your social media links */}
          </div>
          <p className="account-text">
            Don't have an account? <a href="#" onClick={toggleForms}>Sign up</a>
          </p>
        </form>
      )}
    </div>
  );
}

export default Login;

