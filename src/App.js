import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Contact from './pages/contact';
import Intro from './pages/intro';
import Projects from './pages/projects';
import Resume from './pages/resume';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/intro' Component={Intro} />
        <Route path='/projects' Component={Projects} />
        <Route path='/resume' Component={Resume} />
        <Route path='/contact' Component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
