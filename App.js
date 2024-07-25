
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ReviewsPage from './ReviewsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/reviews" element={<ReviewsPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;