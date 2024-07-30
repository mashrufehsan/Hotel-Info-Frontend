import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HotelPage from './components/HotelPage';
import HomePage from './components/pages/HomePage';
import NotFoundPage from './components/pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/hotel/:slug" element={<HotelPage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
