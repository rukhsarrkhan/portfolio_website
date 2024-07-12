import React from 'react';
import Typed from 'react-typed';
import { FaArrowRight } from 'react-icons/fa';
import resume from '../assets/resume.pdf';
import womanImage from '../assets/undraw_woman_ffrd.svg';

const Landing = () => {
    return (
        <div name="home" className='text-black min-h-screen w-full flex items-center justify-center'>

            <div className='max-w-screen-lg w-full flex flex-col md:flex-row items-center justify-between text-center md:text-left '>
                <div className='md:w-3/4'>
                    <h1 className='text-4xl sm:text-4xl md:text-5xl font-bold mb-4 font-signature'>
                        Hi, I'm Rukhsar Rashid Khan
                    </h1>
                    <div className='flex justify-center md:justify-start items-center mb-6'>
                        <p className='text-2xl sm:text-3xl md:text-4xl font-bold'>
                            A
                        </p>
                        <Typed
                            className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#020101] ml-2'
                            strings={['Software Engineer', 'Full Stack Developer', 'Cyber Security Engineer']}
                            typeSpeed={120}
                            backSpeed={140}
                            loop
                        />
                    </div>
                    <p className='text-xl md:text-2xl font-medium text-gray-700 italic mb-8 max-w-2xl mx-auto md:mx-0'>
                        A highly motivated and creative Software Developer with expertise in Cyber Security and Frontend Development. Proven success in creating innovative solutions and delivering high-quality projects across domains.
                    </p>
                    <a href={resume} target="_blank" rel="noreferrer" className='inline-block'>
                        <button className='bg-[#dddee0] text-black font-medium py-3 px-6 rounded-full border border-[#4a596c] hover:bg-[#b35573] hover:text-white transition duration-300 flex items-center'>
                            Résumé <FaArrowRight className="ml-2" />
                        </button>
                    </a>
                </div>
                <div className='md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0'>
                    <img src={womanImage} alt="Illustration of a woman" className='w-3/4 md:w-full lg:w-3/4' />
                </div>
            </div>
        </div>
    );
};

export default Landing;
