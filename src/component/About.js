import React from 'react';
import ganeshphoto from './images/ganeshphoto.jpg';

const About = () => {
  return (
    <section id="about" className="container mx-auto p-4 pt-20">
        <div className="grid grid-cols-2">
          <div>
          <img 
          src={ganeshphoto} 
          alt="Me" 
          className="rounded-full w-40 shadow-lg border-4 border-gray-400 hover:shadow-2xl transition-shadow duration-300 ease-in-out" 
          />
          </div>
          <div className='text-right font-serif text-xl'>
            <p>Shrinivas Kamble</p>
            <p>Manjari Budruk, Pune</p>
            <a href="mailto:shrinivaskamble28@gmail.com" className="text-black hover:text-blue-500">shrinivaskamble28@gmail.com</a>
            <p>7972217258</p>
          </div>
          
        </div>
      <div className="text-center mt-4 font-serif text-medium">
        <h2 className="font-serif text-4xl">Objective</h2>
        <p className="mt-2 text-lg">Proactive and versatile software developer skilled in Java Full Stack Development, with foundational knowledge of React JS and database management experience. Ready to join a dynamic team and contribute to impactful projects.
        </p>
      </div>
    </section>
  );
}

export default About;