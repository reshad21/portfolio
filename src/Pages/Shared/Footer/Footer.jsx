import React from 'react';
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center px-10 py-5 bg-orange-500 text-primary-content">
                <div>
                    <p className="font-bold">
                        Rashed Uzzaman Reshad. <br />FrontEnd Web Developer since 2021
                    </p>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/reshad.rashed.7" className='text-2xl'><FaFacebookSquare /></a>
                        <a href="https://github.com/reshad21" className='text-2xl'><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/rashed-uzzaman-reshad/" className='text-2xl'><FaLinkedin /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;