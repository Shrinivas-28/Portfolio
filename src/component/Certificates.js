import React from 'react';
import fullstack from './pdf/YessInfotechCourse.pdf';
import python from './pdf/python.pdf';
import cybersecurity from './pdf/CYBERSECURITY.pdf';
import cybersecuritywork from './pdf/cybersecuritywork.pdf';

const Certificates = () => {
  return (
    <section id="certificates" className="container mx-auto p-4 pt-20 font-serif text-medium">
      <h2 className="font-serif text-4xl text-center">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 content-center">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl ">Full Stack Devlopment using Java</h3>
          <br/>
          <a 
          href={fullstack} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 "
        >
          View Certificate
        </a>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl">Basics Of Python</h3>
          <br/>
          <a 
          href={python} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 "
        >
          View Certificate
        </a>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl"> Cyber Security</h3>
        <br/>
        <a 
          href={cybersecurity} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 "
        >
          View Certificate
        </a>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg ">
          <h3 className="text-xl"> Put it on work - Cyber Security</h3>
        <br/>
        <a 
          href={cybersecuritywork} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 "
        >
          View Certificate
        </a>
        </div>
      </div>
    </section>
  );
}

export default Certificates;