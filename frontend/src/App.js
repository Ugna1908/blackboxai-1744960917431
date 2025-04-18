import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import LandingPage from './components/pages/LandingPage';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import DashboardNonSubscriber from './components/pages/DashboardNonSubscriber';
import DashboardSubscriber from './components/pages/DashboardSubscriber';
import AdminDashboard from './components/pages/AdminDashboard';
import ResumeAnalysis from './components/pages/ResumeAnalysis';
import LinkedInAnalysis from './components/pages/LinkedInAnalysis';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/analyze" element={<ResumeAnalysis />} />
          <Route path="/analyze-linkedin" element={<LinkedInAnalysis />} />
          <Route path="/dashboard" element={<DashboardNonSubscriber />} />
          <Route path="/dashboard-pro" element={<DashboardSubscriber />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
