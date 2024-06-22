// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './hooks/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import DoctorHome from './pages/DoctorHome';
import PatientDetailsPage from './pages/PatientDetailsPage';
import NewTreatmentPage from './pages/NewTreatmentPage';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctorHome" element={<ProtectedRoute element={<DoctorHome />} />} />>
          <Route path="/patient/:id" element={<ProtectedRoute element={<PatientDetailsPage />} />} />
          <Route path="/new-treatment" element={<ProtectedRoute element={<NewTreatmentPage />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;