// import React from 'react';
import { useEffect } from 'react';
import projectTour from '../../../assets/tourist-guide.png';
import careerMaker from '../../../assets/career-maker.png';
import automotive from '../../../assets/automative.png';

import Aos from "aos";
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(()=>{
        Aos.init({duration: 3000});
    },[])
    return (
        <div className="w-10/12 mx-auto my-20">
            <h2 className="text-4xl font-bold text-center mb-10">Recent Works</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 '>
                <div className='border-2 rounded-xl relative overflow-hidden max-w-sm'>
                    <p className=''><img   className='h-[440px] w-full transition-transform duration-300 transform-gpu hover:scale-105' src={projectTour} alt="" /></p>
                    <h2 className='text-xl font-bold p-3 my-1'>Tourist guide website</h2>
                    <p className='text-justify text-sm p-3'>This is a Tourist Guide online platform that provides comprehensive information and resources for travelers seeking guidance on popular destinations in Bangladesh.</p>
                    <div className='flex flex-wrap gap-20 p-3 text-xl'>
                        <a className='text-blue-600' href="https://github.com/Mahbub2027/tourist-guide-client">Github Link</a>
                        <a className='text-blue-600' href="https://psychotic-industry.surge.sh/">Live Link</a>
                    </div>

                </div>
                <div className='border-2 rounded-xl relative overflow-hidden max-w-sm'>
                    <p className=''><img   className='h-[440px] w-full transition-transform duration-300 transform-gpu hover:scale-105' src={careerMaker} alt="" /></p>
                    <h2 className='text-xl font-bold p-3 my-1'>Home Career Services website</h2>
                    <p className='text-justify text-sm p-3'>Here user can watch available services of different types and also show service provider info. User can messages us any query for services.</p>
                    <div className='flex flex-wrap gap-20 p-3 text-xl'>
                        <a className='text-blue-600' href="https://github.com/Mahbub2027/career-maker-client">Github Link</a>
                        <a className='text-blue-600' href="https://home-career.web.app/">Live Link</a>
                    </div>

                </div>
                <div className='border-2 rounded-xl relative overflow-hidden max-w-sm'>
                    <p className=''><img   className='h-[440px] w-full transition-transform duration-300 transform-gpu hover:scale-105' src={automotive} alt="" /></p>
                    <h2 className='text-xl font-bold p-3 my-1'>Automotive Store website</h2>
                    <p className='text-justify text-sm p-3'>Allow users to browse vehicles based on various criteria such brand name. Provide detailed information with high-quality images, specifications, and pricing information.</p>
                    <div className='flex flex-wrap gap-20 p-3 text-xl'>
                        <a className='text-blue-600' href="https://github.com/Mahbub2027/automotive-store-client">Github Link</a>
                        <a className='text-blue-600' href="https://automotive-store-eb3dd.web.app/">Live Link</a>
                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default Projects;