import React from 'react';

const Education = () => {
  return (
    <section id="education" className="container  mx-auto p-4 pt-20 font-serif text-medium">
      <h2 className="font-serif text-4xl text-center">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-serif text-2xl ">Bachelor's Degree</h3>
          <p className="mt-2 text-lg">Smt. Kashibai Navale College of Engineering, Pune</p>
          <p>Computer Engineering, 2024</p>
          <p>First Class with Distiction</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-serif text-2xl">Diploma</h3>
          <p className="mt-2 text-lg">Trinity polytechnic, Pune</p>
          <p>Computer Engineering, 2021</p>
          <p>First Class</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-serif text-2xl">HSC</h3>
          <p className="mt-2 text-lg">R. R. Shinde junior college, Hadapsar</p>
          <p>Year 2018</p>
          <p>52.31</p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-serif text-2xl">SSC</h3>
          <p className="mt-2 text-lg">Lonkar Madhyamic Vidyalaya Mundhawa, Pune</p>
          <p>Year 2016</p>
          <p>70.20</p>
        </div>
        </div>
    </section>
  );
}

export default Education;
