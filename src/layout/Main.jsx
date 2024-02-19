// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";

const Main = () => {
    return (
        <div>
            <div className="bg-slate-900 text-white"><Navbar></Navbar></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;