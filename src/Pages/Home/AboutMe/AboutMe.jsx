import { Progress } from 'flowbite-react';
import React from 'react';
const AboutMe = () => {
    return (
        <div className="" id='about'>
            <div className="flex flex-col w-full border-opacity-50 mt-7">
                <div className="divider"></div>
            </div>
            <h1 className='text-4xl font-bold text-center'>About <span className='text-orange-500'>Me</span></h1>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider"></div>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 mb-14 items-center'>
                <div className="">
                    <h1 className='text-4xl font-bold'>Why <span className='text-orange-500'>Hire Me</span> For Your Organization?</h1>
                    <p className='text-xl my-5 font-medium'>I am a MERN Stack developer who learned and was certified by Programming Hero. I have done many full-stack projects with React and Node js. I am an expert in React JS, Express JS, Node JS, MongoDB, JWT, JavaScript, Tailwind CSS, Bootstrap, Html5, and CSS3.My work experience and skills make me a great match for your job</p>
                </div>
                <div className="">
                    <div className="w-full mb-3">
                        <div className="text-base font-medium text-purple-700">
                            HTML
                        </div>
                        <Progress progress={95} color="indigo" label="95%" labelPosition="inside" size="xl" />
                    </div>
                    <div className="w-full mb-3">
                        <div className="text-base font-medium text-purple-700">
                            CSS
                        </div>
                        <Progress progress={90} color="indigo" label="90%" labelPosition="inside" size="xl" />
                    </div>
                    <div className="w-full mb-3">
                        <div className="text-base font-medium text-purple-700">
                            BOOTSTRAP
                        </div>
                        <Progress progress={90} color="indigo" label="90%" labelPosition="inside" size="xl" />
                    </div>
                    <div className="w-full mb-3">
                        <div className="text-base font-medium text-purple-700">
                            TAILWIND
                        </div>
                        <Progress progress={85} color="indigo" label="85%" labelPosition="inside" size="xl" />
                    </div>
                    <div className="w-full mb-3">
                        <div className="text-base font-medium text-purple-700">
                            JAVASCRIPT
                        </div>
                        <Progress progress={80} color="indigo" label="80%" labelPosition="inside" size="xl" />
                    </div>
                    <div className="w-full mb-3">
                        <div className="text-base font-medium text-purple-700">
                            REACT
                        </div>
                        <Progress progress={75} color="indigo" label="75%" labelPosition="inside" size="xl" />
                    </div>
                    <div className="w-full mb-3">
                        <div className="text-base font-medium text-purple-700">
                            NODE.JS
                        </div>
                        <Progress progress={65} color="indigo" label="65%" labelPosition="inside" size="xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;