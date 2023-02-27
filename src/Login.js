import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './Login.css';
import Game from './Game';

function Login({ history }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const usersRef = firebase.firestore().collection('Login user');
      const query = await usersRef.where('simon', '==', username).where('moor', '==', password).get();
      if (!query.empty) {
        history.push('/game');
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred while logging in');
    }
  };

  return (
    <Router>
      <Route exact path="/login">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-input-container">
            <label className="login-label" htmlFor="username-input">
              Username:
            </label>
            <input
              id="username-input"
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className="login-input"
            />
          </div>
          <div className="login-input-container">
            <label className="login-label" htmlFor="password-input">
              Password:
            </label>
            <input
              id="password-input"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="login-input"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </Route>
      <Route exact path="/game" component={Game} />
    </Router>
  );
}

export default Login;
