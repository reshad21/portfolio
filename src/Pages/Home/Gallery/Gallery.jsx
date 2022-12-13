import React from 'react';
import ByeCell from '../../../assets/bye-cell.png';
import OnlineLearing from '../../../assets/online-learining.png';
import WildPhotography from '../../../assets/wild-photographer.png';
const Gallery = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-bold'>My Recent Working <span className='text-3xl font-bold text-orange-500'>Projects</span></h1>

            <div className="my-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={ByeCell} alt="Shoes" className='h-[250px] object-cover w-full' /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Laptop Buy Sell</h2>

                        <div className="flex flex-wrap justify-center my-3 lg:mx-0 mx-5">
                            <div className="mr-2 py-1 px-2 border-2 border-accent rounded-xl mb-2">
                                <p className="text-xs text-accent">React</p>
                            </div>
                            <div className="mr-2 py-1 px-2 border-2 border-accent rounded-xl mb-2">
                                <p className="text-xs text-accent">Tailwind</p>
                            </div>
                            <div className="mr-2 py-1 px-2 border-2 border-accent rounded-xl mb-2">
                                <p className="text-xs text-accent">MongoDB</p>
                            </div>
                            <div className="mr-2 py-1 px-2 border-2 border-accent rounded-xl mb-2">
                                <p className="text-xs text-accent">Express</p>
                            </div>
                        </div>

                        <div className="card-actions justify-end">
                            <a href='https://github.com/reshad21/buy-sell-house-client-side' target="_blank" rel="noreferrer">
                                <button className="btn btn-sm btn-outline btn-secondary">Github</button>
                            </a>
                            <a href='https://buy-sell-house-1c114.web.app/' target="_blank" rel="noreferrer">
                                <button className="btn btn-sm btn-outline btn-secondary">Livesite</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={WildPhotography} alt="Shoes" className='h-[250px] object-cover w-full' /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Wild Life Photography</h2>
                        <div className="flex flex-wrap justify-center my-3 lg:mx-0 mx-5">
                            <div className="mr-2 py-1 px-2 border-2 border-accent rounded-xl mb-2">
                                <p className="text-xs text-accent">React</p>
                            </div>
                            <div className="mr-2 py-1 px-2 border-2 border-accent rounded-xl mb-2">
                                <p className="text-xs text-accent">Tailwind</p>
                            </div>
                            <div className="mr-2 py-1 px-2 border-2 border-accent rounded-xl mb-2">
                                <p className="text-xs text-accent">MongoDB</p>
                            </div>
                            <div className="mr-2 py-1 px-2 border-2 border-accent rounded-xl mb-2">
                                <p className="text-xs text-accent">Express</p>
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <a href='https://github.com/reshad21/wild-photographer-client' target="_blank" rel="noreferrer">
                                <button className="btn btn-sm btn-outline btn-secondary">Github</button>
                            </a>
                            <a href='https://winter-shopping-center.web.app/' target="_blank" rel="noreferrer">
                                <button className="btn btn-sm btn-outline btn-secondary">Livesite</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={OnlineLearing} alt="Shoes" className='h-[250px] object-cover w-full' /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Online Education</h2>
                        <div className="flex flex-wrap justify-center my-3 lg:mx-0 mx-5">
                            <div className="mr-2 py-1 px-2 border-2 border-accent rounded-xl mb-2">
                                <p className="text-xs text-accent">React</p>
                            </div>
                            <div className="mr-2 py-1 px-2 border-2 border-accent rounded-xl mb-2">
                                <p className="text-xs text-accent">Tailwind</p>
                            </div>
                            <div className="mr-2 py-1 px-2 border-2 border-accent rounded-xl mb-2">
                                <p className="text-xs text-accent">MongoDB</p>
                            </div>
                            <div className="mr-2 py-1 px-2 border-2 border-accent rounded-xl mb-2">
                                <p className="text-xs text-accent">Express</p>
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <a href='https://github.com/reshad21/react-edu-platform-client-side' target="_blank" rel="noreferrer">
                                <button className="btn btn-sm btn-outline btn-secondary">Github</button>
                            </a>
                            <a href='https://react-educationl-platform.web.app/' target="_blank" rel="noreferrer">
                                <button className="btn btn-sm btn-outline btn-secondary">Livesite</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Gallery;