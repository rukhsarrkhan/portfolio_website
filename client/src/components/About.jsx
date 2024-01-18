import React from 'react';
import ProfilePicture from '../assets/profile_picture.jpg';

const About = () => {
    return (
        <div name="about" className='w-full bg-white py-[6rem] px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={ProfilePicture} alt='/' />
                <div className='flex flex-col justify-center'>
                    {/* <p className='text-[#9F2B68] font-bold '>DATA ANALYTICS DASHBOARD</p> */}
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 font-signature'>About me</h1>
                    <div class="space-y-4">
                        <p class="text-justify">
                            Hello,
                        </p>
                        <p class="text-justify">
                            I trust you are having a splendid week! I graduated from my Master's program in Computer Science
                            in December 2023. I have actively engaged with subjects such as Web Programming 1 and 2.
                            Within these courses, I have spearheaded the development of two MERN projects, skillfully utilizing technologies like React,
                            Node, Express, MongoDB, and Redux. 
                        </p>
                        <p class="text-justify">
                            My pursuit of comprehensive knowledge extends to integrating AWS and various services,
                            enriching the overall functionality and understanding of MERN applications. Prior to my master's program, I dedicated over
                            three years as a software engineer at ConnectWise, a prominent Florida-based company. In this role, I played a pivotal part
                            in frontend development for security projects. My proficiency encompasses React, Typescript, HTML, and CSS, with practical
                            application of Redux and Context API. 
                        </p>
                        <p class="text-justify">
                            Additionally, I have adeptly employed testing methodologies using Jest, implemented
                            optimization techniques such as lazy loading, and demonstrated expertise with tools like Yarn and Webpack. I am committed
                            to further honing my skills and knowledge, continuously seeking opportunities for growth and exploration within the dynamic
                            realm of software engineering.
                        </p>
                        <p class="text-justify">
                            Best Regards,
                            Rukhsar Rashid Khan
                        </p>
                    </div>
                    <div>
                    <a href="https://www.linkedin.com/in/rukhsarrashidkhan" target="_blank" rel="noopener noreferrer">
                        <button className='bg-black text-[#c78eac] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>View More</button>
                    </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;