import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import Education from './component/Education';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Certificates from './component/Certificates';
import Experience from './component/Experience';
import Contact from './component/Contact';
// import Admin from './component/Admin';
// import login from './component/Login';
import Footer from './component/Footer';

function App() {
  return (
    <div className="bg-gradient-to-r from-green-400 via-green-200 to-green-500 md:bg-gradient-to-l md:from-green-400 md:via-green-200 md:to-green-500 lg:bg-gradient-to-r lg:from-green-400 lg:via-green-200 lg:to-green-500">
        <Navbar />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Experience />
        <Contact />
        {/* <Admin/>
        <Login/> */}
        <Footer />
      </div>
    
  );
}

export default App;
