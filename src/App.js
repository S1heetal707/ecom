import React from 'react';
import '../src/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Assuming HomePage is inside the pages folder
import SignUpPage from './pages/SignUpPage'; // Assuming SignUpPage is inside the pages folder
import LoginPage from './pages/LoginPage'; // Assuming LoginPage is inside the pages folder
import CategoryItemPage from './pages/CategoryItemPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login"  element={<LoginPage />} />
        <Route path="/category/:categoryName" element={<CategoryItemPage />} />
      </Routes>
    </Router>
  );
};

export default App;
