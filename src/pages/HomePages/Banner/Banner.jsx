// import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import profileImg from '../../../assets/Mahbub1-remove.png';
const Banner = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col-reverse md:flex-row items-center  pt-20 mb-20 justify-between bg-slate-900'>
            <div className='flex flex-col '>
                <h2 className="font-bold text-white mt-7"><span className='text-3xl'>Hi, I'm</span>
                    <br /> <span className='text-4xl md:text-5xl'>Md. Mahbub Alam</span></h2>

                <h1 className='text-3xl md:text-4xl' style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'normal' }}>
                    {' '}
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Web Developer', 'Frontend Developer', 'React Developer', 'Programmer']}
                            loop={false}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                <p className='text-white border-2 border-white text-center font-medium mt-5 p-2 rounded-lg w-24 cursor-pointer hover:bg-white hover:text-slate-900'>Contact</p>
            </div>

            <div>
                <p><img src={profileImg} alt="" /></p>
            </div>
        </div>
    );
};

export default Banner;