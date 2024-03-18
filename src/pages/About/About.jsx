// import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import aboutImg from '../../assets/Mahbub-full-bg-remove.png';
const About = () => {
    return (
        <div className=" w-9/12 mx-auto my-40 flex flex-col lg:flex-row gap-16 items-center" >

            <div className='w-full lg:w-1/3 mx-auto'>
                <img className='border-2 rounded-xl px-10 mx-auto' src={aboutImg} alt="" />
            </div>
            <div className='w-full lg:w-2/3 mx-auto text-justify'>
                <h2 className="text-4xl font-bold mb-5">About me</h2>
                <p>Welcome to my portfolio! I'm Md. Mahbub Alam, a passionate
                    Frontend Developer based in Sylhet,Bangladesh.
                    I've dedicated myself to Fullstack Developer.</p> <br />
                <p>I'm excited to share my portfolio with you and showcase the projects
                    that represent the culmination of my skills, creativity, and
                    dedication. Thank you for visiting, and I look forward to the
                    opportunity to collaborate and create something amazing together.</p> <br />
                <p>Feel free to explore my portfolio, and don't hesitate to reach out if
                    you have any questions or would like to connect!</p>
                <div className='mt-5'>
                    <button className='bg-white py-2 px-4 rounded-lg text-slate-900 font-bold'>
                        <a className="flex items-center gap-3" href="https://drive.google.com/file/d/1IMGmAqr8NF7DFWwgSZZ-Eb1TpH-OabBa/view?usp=sharing" target='_blank'>
                        <MdOutlineFileDownload className="text-2xl" /> Resume</a></button>
                </div>
            </div>

        </div>
    );
};

export default About;