import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import LoadingPage from './LoadingPage';
import Result from './Result';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/loading" element={<LoadingPage />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  </BrowserRouter>
);
