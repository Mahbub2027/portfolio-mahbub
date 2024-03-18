// import React from 'react';

const Skills = () => {
    return (
        <div id="skills" className='w-10/12 mx-auto my-20 '>
            <h2 className='text-4xl text-center font-bold my-10'>Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-5">
               
                <div className="w-80 lg:w-96 space-y-2">
                    <div className="flex justify-between">
                        <h2 className="font-bold">HTML</h2> <p className="text-warning">85%</p>
                    </div>
                    <progress className="progress progress-warning w-80 lg:w-96" value="80" max="100"></progress>  <br />
                    <div className="flex justify-between">
                        <h2 className="font-bold">CSS</h2> <p className="text-warning">80%</p>
                    </div>
                    <progress className="progress progress-warning w-80 lg:w-96" value="80" max="100"></progress> <br />
                    <div className="flex justify-between">
                        <h2 className="font-bold">TailwindCSS</h2> <p className="text-warning">90%</p>
                    </div>
                    <progress className="progress progress-warning w-80 lg:w-96" value="90" max="100"></progress> <br />
                    <div className="flex justify-between">
                        <h2 className="font-bold">JavaScript</h2> <p className="text-warning">70%</p>
                    </div>
                    <progress className="progress progress-warning w-80 lg:w-96" value="70" max="100"></progress> <br />
                    <div className="flex justify-between">
                        <h2 className="font-bold">Bootstrap</h2> <p className="text-warning">75%</p>
                    </div>
                    <progress className="progress progress-warning w-80 lg:w-96" value="75" max="100"></progress> <br />
                </div>
                <div className="w-80 lg:w-96 space-y-2">
                    <div className="flex justify-between">
                        <h2 className="font-bold">React</h2> <p className="text-warning">75%</p>
                    </div>
                    <progress className="progress progress-warning w-80 lg:w-96" value="75" max="100"></progress>  <br />
                    <div className="flex justify-between">
                        <h2 className="font-bold">NodeJs</h2> <p className="text-warning">50%</p>
                    </div>
                    <progress className="progress progress-warning w-80 lg:w-96" value="50" max="100"></progress>  <br />
                    <div className="flex justify-between">
                        <h2 className="font-bold">Express</h2> <p className="text-warning">50%</p>
                    </div>
                    <progress className="progress progress-warning w-80 lg:w-96" value="50" max="100"></progress> <br />
                    <div className="flex justify-between">
                        <h2 className="font-bold">MongoDB</h2> <p className="text-warning">70%</p>
                    </div>
                    <progress className="progress progress-warning w-80 lg:w-96" value="70" max="100"></progress> <br />
                    <div className="flex justify-between">
                        <h2 className="font-bold">Firebase</h2> <p className="text-warning">70%</p>
                    </div>
                    <progress className="progress progress-warning w-80 lg:w-96" value="70" max="100"></progress> <br />
                    
                </div>
            </div>
        </div>
    );
};

export default Skills;