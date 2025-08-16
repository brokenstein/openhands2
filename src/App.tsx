import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import WhoWeAre from './WhoWeAre';
import WhatWeDo from './WhatWeDo';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/who-we-are">Who We Are</Link></li>
            <li><Link to="/what-we-do">What We Do</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Welcome to AI Web Creators</h1>
      <p>We build beautiful, effective websites for small businesses, leveraging the power of AI to design, implement, and launch your online presence.</p>
    </div>
  );
}

export default App;
