// src/main.jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './Home.jsx';
import TherapyPage from './TherapyPage.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';

function MainApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <>
      {/* Global Styles */}
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

      <Router>
        {!isLoggedIn ? (
          // Show login page if not logged in
          <App onLoginSuccess={handleLoginSuccess} />
        ) : (
          // Show protected routes if logged in
          <Routes>
            <Route path="/" element={<Home onLogout={handleLogout} />} />
            <Route path="/therapy" element={<TherapyPage onLogout={handleLogout} />} />
            {/* Placeholder routes for future pages */}
            <Route path="/assessment" element={<Home onLogout={handleLogout} />} />
            <Route path="/guides" element={<Home onLogout={handleLogout} />} />
            {/* Redirect any unknown route to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </Router>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
