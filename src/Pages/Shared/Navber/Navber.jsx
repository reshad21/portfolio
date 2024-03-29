import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navber = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        (toggle === false) ? setToggle(true) : setToggle(false);
    }

    const menuItems = <>
        <li>
            <Link className='p-0 mr-3 bg-inherit' to='/'>
                <button className='btn btn-outline border-orange-500 font-bold text-orange-500'>Home</button>
            </Link>
        </li>
        <li tabIndex={0}>
            <a className="p-0 mr-3 justify-between bg-inherit" href='#about'>
                <button className='btn btn-outline border-orange-500 font-bold text-orange-500'>About</button>
            </a>
        </li>
        <li>
            <Link className='p-0 m-0 bg-inherit' to='/blog'>
                <button className='btn btn-outline border-orange-500 font-bold text-orange-500'>Blog</button>
            </Link>
        </li>
    </>

    const dropdownItems = <>
        <div className="flex flex-col gap-1">
            <li>
                <Link className='p-0 bg-inherit' to='/'>
                    <button className='btn btn-outline w-full border-orange-500 font-bold text-orange-500'>Home</button>
                </Link>
            </li>
            <li tabIndex={0}>
                <a className="p-0 justify-between bg-inherit" href='#about'>
                    <button className='btn btn-outline w-full border-orange-500 font-bold text-orange-500'>About</button>
                </a>
            </li>
            <li>
                <Link className='p-0 bg-inherit' to='/blog'>
                    <button className='btn btn-outline w-full border-orange-500 font-bold text-orange-500'>Blog</button>
                </Link>
            </li>
            <li>
                <a className='p-0 bg-inherit' href="https://drive.google.com/file/d/14xxcfqPLbdsj15H1YB3IqtkUQWTFWu1y/view?usp=sharing">
                    <button className='btn btn-outline w-full border-orange-500 font-bold text-orange-500'>Download Resume</button>
                </a>
            </li>
        </div>
    </>

    return (
        <div>
            <div className='fixed top-0 z-30 w-full lg:px-[90px] md:px-[30px] backdrop-blur'>
                <div className="navbar justify-between ">
                    <div className="w-full flex justify-between">
                        <Link className="btn btn-ghost normal-case text-2xl font-semibold text-slate-300">RESHAD</Link>
                        <div className="dropdown">
                            <Link onClick={handleToggle} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </Link>
                            <ul className={toggle ? 'block absolute z-50 right-0 w-52 menu menu-compact mt-3 p-2 shadow bg-[#000000a6] rounded-box ' : 'hidden'}>
                                {dropdownItems}
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menuItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;