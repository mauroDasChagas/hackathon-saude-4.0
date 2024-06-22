// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DoctorHome from './pages/DoctorHome';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './hooks/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctorHome" element={<ProtectedRoute element={<DoctorHome />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;