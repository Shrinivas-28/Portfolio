// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-5 font-serif text-medium hover:*:">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} My Portfolio</p>
        <p>Designed and Developed by Shrinivas Kamble</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/shrinivas-kamble-973a321ba/" className="hover:text-blue-500 text-blue-300">LinkedIn</a>
          <a href="https://github.com/Shrinivas-28" className="hover:text-blue-500 text-blue-300">GitHub</a>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
