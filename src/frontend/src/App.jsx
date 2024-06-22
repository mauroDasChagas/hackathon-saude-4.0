import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import DoctorHome from './pages/DoctorHome';
import PatientDetailsPage from './pages/PatientDetailsPage';
import NewTreatmentPage from './pages/NewTreatmentPage';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctorHome" element={<DoctorHome />} />
          <Route path="/patient/:id" element={<PatientDetailsPage />} />
          <Route path="/new-treatment" element={<NewTreatmentPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;