// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About'; 
import PostDetails from './Pages/PostDetails'; 
import NotFound from './Pages/NotFound'; 
import Footer from './Components/Footer';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signin" element={<SignIn />} /> 
        <Route path="/signup" element={<SignUp />} /> 
      </Routes>
      <Footer /> {/* Moved Footer here to appear on all pages */}
    </Router>
  );
}

export default App;
