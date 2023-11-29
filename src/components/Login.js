import React, { useState } from 'react';
import loginImage from './Goku.webp'; // Replace with the correct path to your image file

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(username);
  };

  return (
    <div style={loginContainerStyle}>
      {/* Add the image on the left side */}
      <div style={imageContainerStyle}>
        <img src={loginImage} alt="Login" style={imageStyle} />
      </div>

      {/* Login form on the right side */}
      <div style={loginFormStyle}>
        <h2>Login</h2>
        <div>
          <label htmlFor="loginUsername">Username:</label>
          <input type="text" id="loginUsername" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="loginPassword">Password:</label>
          <input type="password" id="loginPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

// Styles
const loginContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  margin: '20px', // Add margin to the entire container
};

const imageContainerStyle = {
  flex: '1',
  marginRight: '20px', // Add margin to the right of the image
};

const imageStyle = {
  width: '100%',
  height: 'auto',
};

const loginFormStyle = {
  flex: '1',
};

export default Login;
