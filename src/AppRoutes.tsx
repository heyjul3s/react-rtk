import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Error404, Home } from '@/pages';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}
