import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import './styles.css';
import NewTicketPage from './components/NewTicketsForm';
import SettingsPage from './components/SettingsPage';
import NotificationsPage from './components/NotificationsPage';
import UsersPage from './components/UsersPage';
import HelpPage from './components/HelpPage';
import ReportsPage from './components/ReportsPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/tickets/new" element={<NewTicketPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/reports" element={<ReportsPage />} />











        
        {/* autres routes... */}
        {/* Autres routes */}
      </Routes>
    </Router>
  );
}

export default App;