import React from 'react';
import Login from './Login.js';
import { GuessMyWord } from './Game'
import './index.css';
import Game from './Game'

function App() {
  return (
    <div>
    <h1 style={{ 
  textAlign: "center",
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "#0077ff",
  textShadow: "2px 2px 0 #ccc",
  margin: "50px 0",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  border: "1px solid #ccc",
  borderRadius: "10px",
  boxShadow: "0 5px 5px rgba(0, 0, 0, 0.1)"
}}>Herzlich willkommen zur abgewandelten Version von Glücksrad als Webapplikation</h1>
      <Game />
    
    </div>
  );
}

export default App



