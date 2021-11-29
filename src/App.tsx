import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './common/header/Header';
import Home from './pages/home/Home';
import navs from './common/const/navs';

import Landscape from './pages/landscape/Landscape';
import Cityscape from './pages/cityscape/Cityscape';
import Architecture from './pages/architecture/Architecture';
import Portrait from './pages/portrait/Portrait';
import Commercial from './pages/commercial/Commercial';
import Lifescape from './pages/lifescape/Lifescape';


function App() {
  // set default route
  if (window.location.pathname === '/') {
    window.history.replaceState('/home', '', '/home');
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/landscape" element={<Landscape />} />
            <Route path="/cityscape" element={<Cityscape />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/portrait" element={<Portrait />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/lifescape" element={<Lifescape />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;