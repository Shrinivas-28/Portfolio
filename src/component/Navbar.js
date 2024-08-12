import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full shadow-lg z-50 font-serif text-medium">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-serif text-3xl">Shrinivas Kamble</h1>
        <ul className="text-base flex space-x-4">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#education" className="hover:text-gray-400">Education</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#certificates" className="hover:text-gray-400">Certificates</a></li>
          <li><a href="#experience" className="hover:text-gray-400">Experience</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;