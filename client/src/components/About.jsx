import React from 'react';
import ProfilePicture from '../assets/profile_picture.png';

const About = () => {
    return (
        <div name="about" className='w-full bg-white py-[6rem] px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={ProfilePicture} alt='/' />
                <div className='flex flex-col justify-center'>
                    {/* <p className='text-[#9F2B68] font-bold '>DATA ANALYTICS DASHBOARD</p> */}
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 font-signature'>About me</h1>
                    <div className="space-y-4">
                        <p className="text-justify font-cursive">
                            Hello,
                        </p>
                        <p className="text-justify font-cursive">
                            Embracing the principle that "Knowledge is the pathway to new horizons,"
                            I navigate my career in software engineering with a relentless pursuit of innovation and learning.
                        </p>
                        <p className="text-justify font-cursive">
                            At ConnectWise, I spearheaded the development of innovative cybersecurity solutions, leveraging my
                            expertise in ReactJS, AngularJS, MySQL, Node.js, AWS, and my skills as a certified Ethical Hacker (CEH).
                            My work ensures products meet NIST compliance and exceed user expectations.
                        </p>
                        <p className="text-justify font-cursive">
                            Recently, I celebrated graduating with a Master of Science in Computer Science from Stevens Institute
                            of Technology, specializing in Software Development and Cyber Security. My passion for technology,
                            backed by a publication in pupil detection using machine learning, fuels my ambition to tackle
                            real-world problems with cutting-edge solutions.
                        </p>
                        <p className="text-justify font-cursive">
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