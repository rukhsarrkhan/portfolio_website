import React from 'react';
import Project from "../components/Project";
import NurtureNest from '../assets/nurture_nest.jpeg';
import Nirwana from '../assets/nirwana.jpeg';
import Drowsiness from '../assets/drowsiness.png';
import SongSearch from "../assets/songsearch.png";
import Cpu from "../assets/cpu.jpeg";
import Portfolio from "../assets/portfolio.jpeg";
import Blogging from "../assets/blogging.png";
import DjangoBlogging from "../assets/django_blogging.jpeg";
import SmartInventory from "../assets/inventory.jpg";
import MunchMentor from "../assets/munchmentor.jpg";

const Projects = () => {
    return (
        <div name='projects' className='w-full py-8 px-4 text-black'>
            <div className='max-w-[1240px] mx-auto'>
                <h2 className='text-3xl sm:text-4xl font-bold text-center mb-8 font-signature'>Projects</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
                    <Project
                        cardImg={SmartInventory}
                        image={SmartInventory}
                        cardTitle="Smart Inventory"
                        cardDesc={'React.js • Python • Django • PostgresSQL • Tailwind CSS'}
                        projDesc="Designed & developed an inventory management system using React.js, Django & PostgreSQL in 48 hours. Optimized user experience by 90%, inclusivity & accessibility by using Tailwind CSS & lazy loading."
                        link={'https://github.com/rukhsarrkhan/kaizntree_be_challenge'}
                    />
                    <Project
                        cardImg={MunchMentor}
                        image={MunchMentor}
                        cardTitle="Munch Mentor"
                        cardDesc={'React Native • Expo • OpenAI • GPT-4 • Tailwind CSS'}
                        projDesc="Developed a React Native app with Expo, utilizing GPT-4 OpenAI to provide personalized meal recommendations. Incorporated user preferences, inventory & meal history, resulting in efficient 2-minute decision-making for meals."
                        link={''}
                    />
                    <Project
                        cardImg={Blogging}
                        image={DjangoBlogging}
                        cardTitle="BlogSphere Dynamics"
                        cardDesc={'Python • Django'}
                        projDesc="Engineered a dynamic blog site with Django, delivering a seamless, secure user experience through advanced data handling
                    and security protocols. Implemented Django's authentication system for secure user access and data integrity, increasing platform trust. Transformed the user interface using Crispy Forms and customized profiles, elevating user interaction and aesthetics."
                        link={'https://github.com/rukhsarrkhan/django_project'}
                    />
                    <Project
                        cardImg={NurtureNest}
                        image={NurtureNest}
                        cardTitle="Nurture Nest"
                        cardDesc="Javascript • React JS • Redux • Node JS • Mongo DB • CSS"
                        projDesc="Nurture-Nest allows a user to manage their child with their meal plans, vaccine history and doctor appointments. Moreover, it is also a nanny hiring platform where once the nanny is assigned, the user(parent) can chat with the nanny to give instructions etc. The nanny would also be able to view the details of a child (meal plans, vaccines and doctor appointments) making it easier to take care of the child without remembering a lot of stuff making the life of both parent and the nanny easier."
                        link={'https://github.com/rukhsarrkhan/nurture-nest'}
                    />
                    <Project
                        cardImg={Nirwana}
                        image={Nirwana}
                        cardTitle="Nirwana - Music Escape"
                        cardDesc={'Javascript • React JS • Redux • Node JS • Mongo DB • CSS'}
                        projDesc="A Web Application that will give access to a wide range of songs from creators all over the world. Users will be able to create playlists, shuffle songs, explore new genres and even share them with your friends. This will be of similar idea as the popular music platform called spotify."
                        link={'https://github.com/rukhsarrkhan/nirwana-music-escape'}
                    />
                    <Project
                        cardImg={Drowsiness}
                        image={Drowsiness}
                        cardTitle="Human Drowsiness Detection System"
                        cardDesc={'Java • Python • Android • Raspberry pi 3 • Raspberry Pi Camera module • Gps/Gprs module (PAM-7Q) • Node mcu '}
                        projDesc="An IOT/ Android based project where we ensure the safety of car drivers,by detecting drowsiness. Using Raspberry PI3 and a normal PIcamera module (compatible with RPI), through python opencv we detect whether a driver is feeling sleepy or not by tracking his eyes. Using gps modem and gsm modem and accelerometer sensor we can detect whenever a car is involved in accident, For android app, we have included normal signup login page along with Firebase-auth sign-in page."
                        link={'https://github.com/rukhsarrkhan/HumanDrowsinessDetectionSystem'}
                    />
                    <Project
                        cardImg={SongSearch}
                        image={SongSearch}
                        cardTitle="Song Search Engine"
                        cardDesc={'Python • HTML'}
                        projDesc="The Music Search Engine is a command-line tool that enables users to search for specific words within a collection of music-related Wikipedia links. The project utilizes a Trie data structure for efficient word searches and incorporates stop words to enhance search accuracy."
                        link={'https://github.com/rukhsarrkhan/song-search-engine'}
                    />
                    <Project
                        cardImg={Cpu}
                        image={Cpu}
                        cardTitle="CPU Scheduling Simulation"
                        cardDesc={'Java'}
                        projDesc="The CPU Scheduling Simulator is a Java program designed to simulate and analyze the performance of three CPU scheduling algorithms: First-Come-First-Serve (FCFS), Shortest Job First (SJF), and Round Robin (RR). The simulation is performed on a set of processes, and the program generates an output file with key performance metrics."
                        link={'https://github.com/rukhsarrkhan/cpu-scheduling-simulation'}
                    />
                    <Project
                        cardImg={Portfolio}
                        image={Portfolio}
                        cardTitle="Portfolio Website"
                        cardDesc={'JavaScript • React JS'}
                        projDesc="My Portfolio Project"
                        link={'https://github.com/rukhsarrkhan/portfolio_website'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;