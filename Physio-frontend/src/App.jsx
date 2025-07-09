import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* You can add more routes here */}
    </Routes>
  );
}

export default App;
