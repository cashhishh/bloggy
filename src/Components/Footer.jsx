// src/components/Footer.jsx
import React from 'react';
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 ">
      <div className="container mx-auto text-center">
        <p className="mb-2">© 2024 Bloggy. All rights reserved.</p>
        <p className="mb-2">Created by The Bloggy Team</p>
        <p className="mt-2">
          <Link to ="/privacy" className="hover:text-gray-400">Privacy Policy</Link> | 
         <Link to="/terms" className="hover:text-gray-400"> Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
