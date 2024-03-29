import React from 'react';
import Typed from 'react-typed';
import { FaArrowRight } from 'react-icons/fa';
import resume from '../assets/resume.pdf';

const Landing = () => {
    return (
        <div name="home" className='text-white h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg  w-full h-screen mx-auto text-center flex flex-col justify-center'>
                {/* <p className='text-[#9F2B68] font-bold p-2'>
                    GROWING WITH DATA ANALYTICS
                </p> */}
                <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6 font-signature'>
                    Hi, I'm Rukhsar Rashid Khan
                </h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                        A
                    </p>
                    <Typed
                        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                        strings={['Software Engineer', 'Full Stack Developer', 'Cyber Security Engineer']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500 font-style: italic'>A highly motivated and creative Software Developer with expertise in Cyber Security and Frontend Development. Proven success in creating innovative solutions and delivering high-quality projects across domains.</p>
                <div>
                    <a href={resume} target="_blank" rel="noreferrer">
                        <button className='bg-[#9F2B68] w-[200px] rounded-md font-medium my-6 mx-auto py-3 flex items-center justify-center  text-black'>
                            Résumé <FaArrowRight className="ml-2" /> {/* Icon next to the text */}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Landing;