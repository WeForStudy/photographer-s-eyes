import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './app.scss';

import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import Home from './pages/home/Home';

import Landscape from './pages/landscape/Landscape';
import Cityscape from './pages/cityscape/Cityscape';
import Architecture from './pages/architecture/Architecture';
import Portrait from './pages/portrait/Portrait';
import Commercial from './pages/commercial/Commercial';
import Lifescape from './pages/lifescape/Lifescape';
import Project from './pages/project/Project';
import Contact from './pages/contact/Contact';


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
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
