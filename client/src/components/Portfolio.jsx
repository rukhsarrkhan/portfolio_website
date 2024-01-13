import * as React from 'react';
import { Link } from "react-scroll";
import "../App.css";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PortfolioCard from "./PortfolioCard";
import AboutCard from "./AboutCard";
import About from "./About";
import TimelineComp from './Timeline';
import Contact from './Contact';

export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="App">
            <header className="nav">
                <nav className="nav__container__actions">
                    <ul>
                        <li>
                            <Link activeClass="active" smooth spy to="about">
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="timeline">
                                TIMELINE
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="projects">
                                PROJECTS
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" smooth spy to="contact">
                                CONTACT ME
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <section className='flex' id="about">
                <h1 className='module-header'>ABOUT</h1>
                <h3 className='header-bar'></h3>

                <About />
            </section>
            <section className='flex' id="timeline">
                <h1 className='module-header'>TIMELINE</h1>
                <h3 className='header-bar'></h3>
                <TimelineComp />
            </section>
            <section className='flex' id="projects">
                <h1 className='module-header'>PROJECT</h1>
                <h3 className='header-bar'></h3>

                <PortfolioCard />
            </section>
            <section className='flex' id="contact">
                <h1 className='module-header'>CONTACT ME</h1>
                <h3 className='header-bar'></h3>

                <Contact />
            </section>
        </div >

        // <Box sx={{ width: '100%', typography: 'body1' }} >
        //     <TabContext value={value} >
        //         <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="nav">
        //             <TabList
        //                 aria-label="lab API tabs example">
        //                 <Tab label="About" value="1" >
        //                     <Link activeClass="active" smooth spy to="about">
        //                         ABOUT
        //                     </Link>
        //                 </Tab>
        //                 <Tab label="Timeline" value="2" >
        //                     <Link activeClass="active" smooth spy to="timeline">
        //                         TIMELINE
        //                     </Link>
        //                 </Tab>
        //                 <Tab label="Project" value="3" >
        //                     <Link activeClass="active" smooth spy to="projects">
        //                         PROJECTS
        //                     </Link>
        //                 </Tab>
        //                 <Tab label="Contact" value="4" >
        //                     <Link activeClass="active" smooth spy to="contact">
        //                         CONTACT
        //                     </Link>
        //                 </Tab>
        //             </TabList>
        //         </Box>
        //         <section id="about">ABOUT</section>
        //         <TabPanel value="1">
        //             <AboutCard />
        //         </TabPanel>
        //         <section id="blog">TIMELINE</section>
        //         <TabPanel value="2">
        //             <TimelineComp />
        //         </TabPanel>
        //         <section id="projects">PROJECTS</section>
        //         <TabPanel value="3">
        //             <PortfolioCard />
        //         </TabPanel>
        //         <section id="contact">CONTACT ME</section>
        //         {/* <section id="about">
        //             <TabPanel value="1">
        //                 <AboutCard />
        //             </TabPanel>
        //         </section>
        //         <section id="timeline">
        //             <TabPanel value="2">
        //                 <TimelineComp />
        //             </TabPanel>
        //         </section>
        //         <section id="projects">
        //             <TabPanel value="3">
        //                 <PortfolioCard />
        //             </TabPanel>
        //         </section>
        //         <section id="contact">
        //             <TabPanel value="4">
        //                 <PortfolioCard />
        //             </TabPanel>
        //         </section> */}
        //     </TabContext >
        // </Box >
    );
}
