import React from 'react';
import { Link } from 'react-router-dom';
const Navber = () => {

    const menuItems = <>
        <li>
            <Link className='p-0 mr-3 bg-inherit' to='/'>
                <button className='btn btn-outline btn-secondary'>Home</button>
            </Link>
        </li>
        <li tabIndex={0}>
            <a className="p-0 mr-3 justify-between bg-inherit" href='#about'>
                <button className='btn btn-outline btn-secondary'>About</button>
            </a>
            {/* <ul className="p-2">
                <li><Link>About</Link></li>
                <li><Link>Submenu 2</Link></li>
            </ul> */}
        </li>
        <li>
            <Link className='p-0 mr-3 bg-inherit'>
                <button className='btn btn-outline btn-secondary'>Contact</button>
            </Link>
        </li>
        <li>
            <Link className='p-0 m-0 bg-inherit' to='/blog'>
                <button className='btn btn-outline btn-secondary'>Blog</button>
            </Link>
        </li>
    </>

    return (
        <div>
            <div className="navbar justify-between ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">Reshad</Link>
                </div>
                <div className=" navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;