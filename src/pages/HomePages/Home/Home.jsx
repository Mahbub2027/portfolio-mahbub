// import React from 'react';

import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Skills from "../../Skills/Skills";
import Banner from "../Banner/Banner";
import Projects from "../MyProjects/Projects";

const Home = () => {
    return (
        <div className="bg-slate-900 text-white">
            
            <Banner></Banner>
            <div id="about" className="bg-slate-800 py-1"><About></About></div>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;