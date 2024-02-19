// import React from 'react';
import aboutImg from '../../assets/Mahbub-full-bg-remove.png';
const About = () => {
    return (
        <div className=" w-10/12 mx-auto my-10 flex flex-col md:flex-row gap-16 items-center">
            
            <div className='w-1/3 mx-auto'>
                    <img className='border-2 px-10 mx-auto' src={aboutImg} alt="" />
            </div>
            <div className='w-2/3 mx-auto text-justify'>
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
            </div>
        </div>
    );
};

export default About;