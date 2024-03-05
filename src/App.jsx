// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Proyecto from './Proyecto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/proyecto" element={<Proyecto />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> Manejar rutas no coincidentes
      </Routes>
    </Router>
  );
}

export default App;