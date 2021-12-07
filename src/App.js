import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import High from './pages/High';
import PopularProduct from './pages/PopularProduct';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PopularProduct />} />
      <Route path="/about" element={<About />} />
      <Route path="/high" element={<High />} />
      
    </Routes>
  );
}

export default App;