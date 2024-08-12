import React from 'react';
import { motion } from 'framer-motion';

const skillsVariant = {
  hover: {
    scale: 1.1,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto p-4 pt-20 font-serif text-medium text-gray-900">
      <h2 className="font-serif text-4xl text-center mb-8">Skills</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <motion.div className="flex-1 p-4 rounded-lg bg-white bg-opacity-80 shadow-lg" whileHover="hover" variants={skillsVariant}>
          <h3 className="text-xl font-bold mb-4 text-center">Technical Skills</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-xl font-medium">Java</li>
            <li className="text-xl font-medium">C#</li>
            <li className="text-xl font-medium">MySQL</li>
            <li className="text-xl font-medium">HTML</li>
            <li className="text-xl font-medium">JavaScript</li>
            <li className="text-xl font-medium">CSS</li>
            <li className="text-xl font-medium">Python</li>
            <li className="text-xl font-medium">React</li>
            <li className="text-xl font-medium">Tailwind CSS</li>
          </ul>
        </motion.div>
        <motion.div className="flex-1 bg-white bg-opacity-80 p-4 rounded-lg shadow-lg" whileHover="hover" variants={skillsVariant}>
          <h3 className="text-xl font-bold mb-4 text-center">Soft Skills</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-xl font-medium">Communication</li>
            <li className="text-xl font-medium">Team Management</li>
            <li className="text-xl font-medium">Adaptability</li>
            <li className="text-xl font-medium">Problem Solving</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
