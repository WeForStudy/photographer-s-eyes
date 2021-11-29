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
            {/* @ts-ignore: Unreachable code error */}
            <Route index path="/home" element={<Home />} />
            {/* {
              navs.map(nav => (
                <Route path={nav.to} element={() => nav.element} ></Route>
              ))
            } */}
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
