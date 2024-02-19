// import React from 'react';

import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Banner from "../Banner/Banner";
import Projects from "../MyProjects/Projects";

const Home = () => {
    return (
        <div className="bg-slate-900 text-white">
            
            <Banner></Banner>
            <div className="bg-slate-800 py-1"><About></About></div>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;