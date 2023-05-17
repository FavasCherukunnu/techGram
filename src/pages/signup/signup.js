import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform signup logic here
    // For example, you can make an API request to register the user

    // Reset form inputs
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="signup-page root">
      <div className="flexCol">
        <h1 className="hero_title">SIGN UP</h1>
        <form onSubmit={handleSubmit}>
          <h2 className="medium_title1">Username</h2>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="rect"
          />
          <h2 className="medium_title1">Email</h2>
          <input className="rect"
            type="email"
            value={email}
            onChange={handleEmailChange}
            
          />
          <h2 className="medium_title2">Password</h2>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="rect"
          />
          <div className="content_box">
            <button type="submit" className="medium_title11">SIGN UP</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
