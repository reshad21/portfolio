import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../BannerSection/Banner';
import Gallery from './../Gallery/Gallery';

const Home = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <Banner></Banner>
            <Gallery></Gallery>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;