import React from 'react';
import { motion } from 'framer-motion';
import blindAssistantImg from './images/blind_assistant.jpg';
import salonManagementImg from './images/salon_management.jpg';
import movieRecommendationImg from './images/movie_recommendation.avif';

const projectVariant = {
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto p-4 pt-20 font-serif text-medium">
      <h2 className="font-serif text-4xl text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.div className="bg-white p-4 rounded-lg shadow-lg" whileHover="hover" variants={projectVariant}>
          <img src={blindAssistantImg} alt="Blind Assistant System" className="w-full h-48 object-cover rounded-t-lg" />
          <h3 className="text-xl font-bold mt-4">Blind Assistant System</h3>
          <p className="mt-2">Developed a website to assist visually impaired individuals by detecting objects in their path and providing distance notifications.</p>
          <p className="mt-2 font-semibold">Technologies Used: Python, Flask, MySql, HTML, CSS, JavaScript</p>
        </motion.div>
        <motion.div className="bg-white p-4 rounded-lg shadow-lg" whileHover="hover" variants={projectVariant}>
          <img src={salonManagementImg} alt="Salon Management System" className="w-full h-48 object-cover rounded-t-lg" />
          <h3 className="text-xl font-bold mt-4">Salon Management System</h3>
          <p className="mt-2">Created a web application for booking salon appointments.</p>
          <p className="mt-2 font-semibold">Technologies Used: ASP.NET, C#, MySQL, Visual Studio 2019.</p>
        </motion.div>
        <motion.div className="bg-white p-4 rounded-lg shadow-lg" whileHover="hover" variants={projectVariant}>
          <img src={movieRecommendationImg} alt="Movie Recommendation System" className="w-full h-48 object-cover rounded-t-lg" />
          <h3 className="text-xl font-bold mt-4">Movie Recommendation System</h3>
          <p className="mt-2">Built a recommendation system for suggesting movies based on user preferences and watch history.</p>
          <p className="mt-2 font-semibold">Technologies Used: Python, Machine Learning</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
