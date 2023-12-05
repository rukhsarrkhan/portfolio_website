import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IMG_6863 from '../IMG_6863.JPG';
import IMG_6725 from '../IMG_6725.JPG';
import ProjectCard from "./ProjectCard";
import nurture_nest from "../nurture_nest.jpeg";
import nirwana from "../nirwana.jpeg";
import drowsiness from "../drowsiness.png";
import songsearch from "../songsearch.png";
import cpu from "../cpu.jpeg";
import portfolio from "../portfolio.jpeg";


const images = [IMG_6725, IMG_6863, IMG_6725];

function PortfolioCard() {

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    return (
        <>
            <div className="p_block"></div>

            <Grid container spacing={2}>
                <ProjectCard
                    cardImg={nurture_nest}
                    images={images}
                    cardTitle="Nurture Nest"
                    cardDesc={'Javascript • React JS • Redux • Node JS • Mongo DB • CSS'}
                    projDesc="Nurture-Nest allows a user to manage their child with their meal plans, vaccine history and doctor appointments. Moreover, it is also a nanny hiring platform where once the nanny is assigned, the user(parent) can chat with the nanny to give instructions etc. The nanny would also be able to view the details of a child (meal plans, vaccines and doctor appointments) making it easier to take care of the child without remembering a lot of stuff making the life of both parent and the nanny easier."
                    link={'https://github.com/rukhsarrkhan/nurture-nest'}
                />
                <ProjectCard
                    cardImg={nirwana}
                    images={images}
                    cardTitle="Nirwana - Music Escape"
                    cardDesc={'Javascript • React JS • Redux • Node JS • Mongo DB • CSS'}
                    projDesc="A Web Application that will give access to a wide range of songs from creators all over the world. Users will be able to create playlists, shuffle songs, explore new genres and even share them with your friends. This will be of similar idea as the popular music platform called spotify."
                    link={'https://github.com/rukhsarrkhan/nirwana-music-escape'}
                />
                <ProjectCard
                    cardImg={drowsiness}
                    images={images}
                    cardTitle="Human Drowsiness Detection System"
                    cardDesc={'Java • Python • Android • Raspberry pi 3 • Raspberry Pi Camera module • Gps/Gprs module (PAM-7Q) • Node mcu '}
                    projDesc="An IOT/ Android based project where we ensure the safety of car drivers,by detecting drowsiness. Using Raspberry PI3 and a normal PIcamera module (compatible with RPI), through python opencv we detect whether a driver is feeling sleepy or not by tracking his eyes. Using gps modem and gsm modem and accelerometer sensor we can detect whenever a car is involved in accident, For android app, we have included normal signup login page along with Firebase-auth sign-in page."
                    link={'https://github.com/rukhsarrkhan/HumanDrowsinessDetectionSystem'}
                />
                <ProjectCard
                    cardImg={songsearch}
                    images={images}
                    cardTitle="Song Search Engine"
                    cardDesc={'Python • HTML'}
                    projDesc="The Music Search Engine is a command-line tool that enables users to search for specific words within a collection of music-related Wikipedia links. The project utilizes a Trie data structure for efficient word searches and incorporates stop words to enhance search accuracy."
                    link={'https://github.com/rukhsarrkhan/song-search-engine'}
                />
                <ProjectCard
                    cardImg={cpu}
                    images={images}
                    cardTitle="CPU Scheduling Simulation"
                    cardDesc={'Java'}
                    projDesc="The CPU Scheduling Simulator is a Java program designed to simulate and analyze the performance of three CPU scheduling algorithms: First-Come-First-Serve (FCFS), Shortest Job First (SJF), and Round Robin (RR). The simulation is performed on a set of processes, and the program generates an output file with key performance metrics."
                    link={'https://github.com/rukhsarrkhan/cpu-scheduling-simulation'}
                />
                <ProjectCard
                    cardImg={portfolio}
                    images={images}
                    cardTitle="Portfolio Website"
                    cardDesc={'JavaScript • React JS'}
                    projDesc="My Portfolio Project"
                    link={'https://github.com/rukhsarrkhan/portfolio_website'}
                />

            </Grid>
        </>
    );
}

export default PortfolioCard;