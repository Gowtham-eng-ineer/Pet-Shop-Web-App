// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'; 
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import Header from './components/Header';
import Cats from './components/CATS';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      <Header /> {/* Include the Header component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route  
          path="/signup"
          element={<Signup handleSignup={setLoggedInUser} />}
        />
        <Route
          path="/login"
          element={<Login handleLogin={setLoggedInUser} />}
        />
      </Routes>

      {loggedInUser && (
        <h2>Welcome, DEAR CLIENT {loggedInUser.username}✌</h2>
      )}

      <Footer />
    </Router>
  );
};

export default App;
