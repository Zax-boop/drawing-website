import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Pages/Home';
import AboutMe from './Components/Pages/AboutMe';
import Art from './Components/Pages/Art';
import Blog from './Components/Pages/Blog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Favorites from './Components/Pages/Favorites';
import MostRecent from './Components/Pages/MostRecent';
import Uncanny from './Components/Pages/Uncanny';
import All from './Components/Pages/All';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/about-me" element={<AboutMe/>} />
          <Route path="/art" element={<Art/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/most-recent" element={<MostRecent/>} />
          <Route path="/uncanny-valley" element={<Uncanny/>} />
          <Route path="/all" element={<All/>} />
        </Routes>
      </Router> 
    </>
    // HELLO WORLD!
  );
}

export default App;