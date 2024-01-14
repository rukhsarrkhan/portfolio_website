import React from 'react';
import Landing from './components/Landing';
import Navbar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Experience />
      <Contact />
      {/* <Timeline /> */}
      {/* <PortfolioCard /> */}
    </div>
  );
}

export default App;
