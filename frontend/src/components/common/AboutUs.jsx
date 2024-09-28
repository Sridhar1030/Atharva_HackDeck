import React from 'react';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
            {/* About Us Section */}
            <div className="w-full max-w-5xl text-center">
                <h1 className="text-5xl font-bold text-[#004272] mb-6">About Us</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Welcome to the official voting platform created by the talented students of <strong>Vidyavardhini’s College of Engineering and Technology (VCET)</strong>. Our platform aims to provide a seamless, secure, and transparent voting experience for users. This project showcases our skills in software development, teamwork, and dedication to building innovative solutions.
                </p>
            </div>

            {/* Project Details */}
            <div className="w-full max-w-5xl mt-12 grid md:grid-cols-2 gap-8">
                {/* Vision */}
                <div className="p-6 bg-[#ace8fe] shadow-md rounded-lg">
                    <h2 className="text-3xl font-semibold text-[#004272] mb-4">Our Vision</h2>
                    <p className="text-md text-gray-800">
                        To build a secure and user-friendly voting system that empowers communities to make their voices heard, ensuring that every vote counts in a digital world.
                    </p>
                </div>
                {/* Mission */}
                <div className="p-6 bg-[#ace8fe] shadow-md rounded-lg">
                    <h2 className="text-3xl font-semibold text-[#004272] mb-4">Our Mission</h2>
                    <p className="text-md text-gray-800">
                        To provide an efficient and transparent voting platform that demonstrates the technical capabilities of VCET students while contributing to real-world solutions.
                    </p>
                </div>
            </div>

            {/* Developers Section */}
            <div className="w-full max-w-5xl mt-16">
                <h2 className="text-4xl font-semibold text-[#004272] mb-8 text-center">Meet Our Developers</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Developer 1: Omkar Laad */}
                    <div className="p-6 bg-white border border-[#ace8fe] shadow-lg rounded-lg text-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Omkar Laad"
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-[#004272] mb-2">Omkar Laad</h3>
                        <p className="text-md text-gray-600">Full-Stack Developer</p>
                        <div className="flex justify-center space-x-4 mt-4">
                            <a href="https://github.com/Omi-laad" className="text-[#004272] hover:text-gray-700">
                                <i className="fab fa-github fa-lg"></i> GitHub
                            </a>
                            <a href="#" className="text-[#004272] hover:text-gray-700">
                                <i className="fab fa-linkedin fa-lg"></i> LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Developer 2: Pavan Rasal */}
                    <div className="p-6 bg-white border border-[#ace8fe] shadow-lg rounded-lg text-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Pavan Rasal"
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-[#004272] mb-2">Pavan Rasal</h3>
                        <p className="text-md text-gray-600">Backend Developer</p>
                        <div className="flex justify-center space-x-4 mt-4">
                            <a href="https://github.com/Pavan-0228" className="text-[#004272] hover:text-gray-700">
                                <i className="fab fa-github fa-lg"></i> GitHub
                            </a>
                            <a href="#" className="text-[#004272] hover:text-gray-700">
                                <i className="fab fa-linkedin fa-lg"></i> LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Developer 3: Sridhar Pillai */}
                    <div className="p-6 bg-white border border-[#ace8fe] shadow-lg rounded-lg text-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Sridhar Pillai"
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-[#004272] mb-2">Sridhar Pillai</h3>
                        <p className="text-md text-gray-600">Full Stack Developer</p>
                        <div className="flex justify-center space-x-4 mt-4">
                            <a href="https://github.com/Sridhar1030" className="text-[#004272] hover:text-gray-700">
                                <i className="fab fa-github fa-lg"></i> GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/sridharpillai/" className="text-[#004272] hover:text-gray-700">
                                <i className="fab fa-linkedin fa-lg"></i> LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Developer 4: Sahil Potale */}
                    <div className="p-6 bg-white border border-[#ace8fe] shadow-lg rounded-lg text-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Sahil Potale"
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-[#004272] mb-2">Sahil Potale</h3>
                        <p className="text-md text-gray-600">UI/UX Designer</p>
                        <div className="flex justify-center space-x-4 mt-4">
                            <a href="#" className="text-[#004272] hover:text-gray-700">
                                <i className="fab fa-github fa-lg"></i> GitHub
                            </a>
                            <a href="#" className="text-[#004272] hover:text-gray-700">
                                <i className="fab fa-linkedin fa-lg"></i> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
