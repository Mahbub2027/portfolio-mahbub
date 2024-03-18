// import React from 'react';
// import { Scrollspy } from 'react-scrollspy';
// import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>


        <li><a href="">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        {/* <NavLink to='/#'><li>Home</li></NavLink>
        <NavLink to='/#about'><li>About</li></NavLink>
        <NavLink to='/#project'><li>Projects</li></NavLink>
        <NavLink to='/#skills'><li>Skills</li></NavLink>
        <NavLink to='/#contact'><li>Contact</li></NavLink> */}
    </>
    return (
        <div className=" bg-slate-800 text-white  w-full shadow-md">
            <div className=" navbar px-14 inline-block md:inline-flex">
                <div className="navbar-start inline">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 md:p-2 shadow text-black bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a style={{ fontFamily: 'Dancing Script' }} className="text-2xl">Md. Mahbub Alam</a>
                </div>

                <div className="navbar-end hidden lg:flex">
                    <ul className=" text-base font-semibold menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;