import React from 'react';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import ProfilePicture from '../assets/profile_picture.png';

const About = () => {
    return (
        <div name="about" className='w-full py-[2rem] px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8'>
                <img className='w-[400px] mx-auto my-4' src={ProfilePicture} alt='Profile' />
                <div className='flex flex-col justify-center'>
                    <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold py-2 font-signature'>About me</h1>
                    <div className="space-y-4">
                        <p className="text-justify text-lg md:text-xl">
                            Graduated with Master of Science in Computer Science from Stevens Institute of Technology
                        </p>
                        <p className="text-justify text-lg md:text-xl">
                            With over 4 years of experience as a full stack software engineer, consistently delivered impactful results by enhancing project efficiencies
                            by over 30% through expertise in cybersecurity & cutting-edge software engineering technologies.
                        </p>
                    </div>
                    <div className='flex space-x-4 mt-4 py-2'>

                        <a href="https://www.linkedin.com/in/rukhsarrashidkhan" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='text-[#0077b5] text-4xl hover:text-[#005582] transition duration-300' />
                        </a>
                        <a href="https://github.com/rukhsarrkhan" target="_blank" rel="noopener noreferrer">
                            <FaGithub className='text-black text-4xl hover:text-gray-700 transition duration-300' />
                        </a>
                        <a href="https://leetcode.com/u/rukhsarkhan/" target="_blank" rel="noopener noreferrer">
                            <FaCode className='text-[#FFA116] text-4xl hover:text-[#CC8400] transition duration-300' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;