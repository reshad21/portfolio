import React from 'react';
import Fade from 'react-reveal/Fade';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../BannerSection/Banner';
import Gallery from './../Gallery/Gallery';
const Home = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <Fade bottom>
                <Banner></Banner>
            </Fade>
            <Fade bottom>
                <Gallery></Gallery>
            </Fade>
            <Fade bottom>
                <AboutMe></AboutMe>
            </Fade>
        </div>
    );
};

export default Home;