import * as React from 'react';
import DoctorAnswers from './pages/DoctorAnswers/DoctorAnswers';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/ask-doctor" element={<DoctorAnswers />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
