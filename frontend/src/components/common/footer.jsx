import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'; // You can use react-icons for social media icons

const Footer = () => {
    return (
        <footer className="bg-[#004274] border-t  py-6">
            {/* Links Section */}
            <div className="flex justify-center md:space-x-10 mb-4 sm:space-x-6">
                <a href="#home" className="text-[#ace8fe] hover:text-orange-500 font-bold sm:mx-2">Home</a>
                <a href="#about" className="text-[#ace8fe] hover:text-orange-500 font-bold mx-2">About Us</a>
                <a href="#features" className="text-[#ace8fe] hover:text-orange-500 font-bold mx-2">Features</a>
                <a href="#contact" className="text-[#ace8fe] hover:text-orange-500 font-bold sm:mx-2">Contact Us</a>
            </div>

            {/* Social Icons Section */}
            <div className="flex justify-center space-x-6 mb-4">
                <a href="#" className="text-[#ace8fe] hover:text-[#ace8fe]">
                    <FaTwitter size={30} />
                </a>
                <a href="#" className="text-[#ace8fe] hover:text-orange-500">
                    <FaInstagram size={30} />
                </a>
                <a href="#" className="text-[#ace8fe] hover:text-orange-500">
                    <FaFacebook size={30} />
                </a>
            </div>

            {/* Copyright Section */}
            <div className="text-center text-[#ace8fe]">

                <p> © 2024 VotersPlatform. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;