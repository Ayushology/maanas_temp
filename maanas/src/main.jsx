import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './Home.jsx';

import TherapyPage from "./TherapyPage.jsx";// No need to import './index.css' if styles are injected via <style> tag
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// However, in a real project, this is where your main CSS import would typically go.
import './index.css';
function MainApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {/* Global Styles for the entire application */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Lora:wght@700&family=Poppins:wght@400;500;600;700&display=swap');
          
          body { 
            font-family: 'Poppins', sans-serif; 
          }
          .font-pacifico { font-family: 'Pacifico', cursive; }
          .font-lora { font-family: 'Lora', serif; }
          .font-poppins { font-family: 'Poppins', sans-serif; }

          @keyframes fade-in-up { 
            0% { opacity: 0; transform: translateY(20px); } 
            100% { opacity: 1; transform: translateY(0); } 
          }
          .animate-fade-in-up { 
            animation: fade-in-up 0.5s ease-out forwards; 
          }

          @keyframes float { 
            0% { transform: translateY(0px) rotate(0deg); } 
            50% { transform: translateY(-20px) rotate(10deg); } 
            100% { transform: translateY(0px) rotate(0deg); } 
          }
        `}
      </style>
      
      {isLoggedIn ? (
        <Home onLogout={handleLogout} />
      ) : (
        <App onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
);