import React from 'react';
import industrial from './images/industrial_traing.jpg';

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto p-4 pt-20 font-serif text-medium">
      <h2 className="font-serif text-4xl text-center">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 rounded-lg bg-white ">
          <h3 className="text-xl font-bold">.Net Developer Intern</h3>
          <p className="mt-2 text-lg">Realizer Technologies</p>
          <p>15 June 2020 - 20 August 2020</p>
          <p>Developed dynamic and responsive web forms using .Net and handled employee transfer requests.</p>
          <br />
          <a 
            href={industrial} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experience;
