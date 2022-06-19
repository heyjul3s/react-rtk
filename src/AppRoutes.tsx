import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Error404, Home } from '@/pages';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={Home} />
      <Route path="*" element={Error404} />
    </Routes>
  );
}
