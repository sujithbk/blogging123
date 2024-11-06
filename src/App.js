// App.js

import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ExplorePage from './ExplorePage';
import CollegeDetailsPage from './CollegeDetailsPage';
import PathwaysPage from './PathwaysPage';
import AdminLoginPage from './AdminLoginPage';
import AdminPage from './AdminPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/colleges" element={<CollegeDetailsPage />} />
          <Route path="/pathways" element={<PathwaysPage />} />
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/courses" element={<AdminPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
