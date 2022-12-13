import React from 'react';
import homebg from '../../../assets/7095114_preview.png';
import ContactModal from '../ContactModal/ContactModal';

const Banner = () => {
    return (
        <div style={{
            background: `url(${homebg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'center right',
            backgroundSize: '50% 60%'

        }} >
            <div className="flex items-center align-middle h-[500px]">
                {/* <ParticleBackground /> */}
                <div className="banner-items">
                    <h1 className='text-4xl font-semibold'>I love to create <br /> beautiful and efficient  websites</h1>
                    <div className="mt-4">
                        <label htmlFor="my-modal-4" className='btn btn-outline btn-primary mr-3'>Discover Me</label>
                        <button className='btn btn-secondary'>Download Resume</button>

                        <ContactModal></ContactModal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;