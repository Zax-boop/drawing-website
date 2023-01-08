import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

// function Home() {
//   return (
//     <>
//       {/* <HeroSection /> */}
//       <h1>Hello world!</h1>
//       <p>Hello World!</p>
//       <p>Hello World!</p>
//       <p>Hello World!</p>
//       <p>Hello World!</p>
//       <p>Hello World!</p>
//       <p>Hello World!</p>
//       <p>Hello World!</p>
//       <p>Hello World!</p>

//     </>
//   );
// }

export default App;