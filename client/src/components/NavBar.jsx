import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { MdFace2 } from "react-icons/md";

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [activeNav, setActiveNav] = useState('');

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "projects",
        },
        {
            id: 4,
            link: "experience",
        },
        {
            id: 5,
            link: "contact",
        },
    ];

    const handleSetActive = (link) => {
        console.log("link", link);
        setActiveNav(link);
        setNav(false);
    };

    return (
        <div className="flex justify-between items-center h-20 md:h-24 w-full mx-auto px-4 text-white fixed top-0 left-0 right-0 z-50 backdrop-filter backdrop-blur-lg">
            <div>
                <Link to="home" smooth duration={500} onSetActive={() => handleSetActive("home")}>
                    <MdFace2 className="text-5xl ml-2 cursor-pointer text-[#ffffff] hover:text-[#b35573]" />
                </Link>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className={`px-4 cursor-pointer capitalize font-medium hover:text-[#b35573] transition duration-300 ${activeNav === link ? 'text-black' : 'text-white'}`}
                    >
                        <Link
                            to={link}
                            smooth
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-70}
                            onSetActive={() => handleSetActive(link)}
                        >
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  text-gray-500">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className={`px-4 cursor-pointer capitalize py-6 text-4xl ${activeNav === link ? 'text-white' : 'text-gray-500'}`}
                        >
                            <Link
                                to={link}
                                smooth
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-70}
                                onClick={() => handleSetActive(link)}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavBar;