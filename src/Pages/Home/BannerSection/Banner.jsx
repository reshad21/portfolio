import React from 'react';
import Typewriter from 'typewriter-effect';
import homebg from '../../../assets/7095114_preview.png';
import ContactModal from '../ContactModal/ContactModal';
const Banner = () => {

    return (
        <div>
            <div className="pt-16 pb-16">
                {/* <ParticleBackground /> */}
                <div className="banner-items flex flex-col-reverse lg:flex-row  justify-between items-center">

                    <div className="banner-left">
                        <h1 className='text-2xl font-semibold text-slate-200'>Rashed Uzzaman Reshad</h1>
                        <p className='text-normal text-slate-100'>Frontend Web Developer</p>
                        <h1 className='text-xl font-semibold text-orange-500'>
                            <Typewriter
                                options={{
                                    strings: ['Love to create beautiful and efficient  websites'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <div className="mt-4">
                            <label htmlFor="my-modal-4" className='btn btn-outline mr-3 border-orange-500 font-bold text-orange-500'>Contact Me</label>

                            <a href="https://drive.google.com/file/d/14xxcfqPLbdsj15H1YB3IqtkUQWTFWu1y/view?usp=sharing"><button className='btn btn-secondary'>Download Resume</button></a>
                            <ContactModal></ContactModal>
                        </div>
                    </div>

                    <div className="banner-right">
                        <img src={homebg} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;