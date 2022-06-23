import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
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
