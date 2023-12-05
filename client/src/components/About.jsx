import React from "react";
import AboutImg from "../rrk.jpg";

const About = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
                <img
                    src={AboutImg}
                    alt="Your Alt Text"
                    style={{ maxWidth: '400px', height: 'auto' }}
                />
            </div>
            <div style={{ flex: 1, marginRight: '100px', textAlign: 'left' }}>
                <p>
                    Hello,
                </p>
                <p>
                    I trust you are having a splendid week! Currently enrolled in a Master's program for Computer Science, with an anticipated graduation date in December 2023, I have actively engaged with subjects such as Web Programming 1 and 2. Within these courses, I have spearheaded the development of two MERN projects, skillfully utilizing technologies like React, Node, Express, MongoDB, and Redux. My pursuit of comprehensive knowledge extends to integrating AWS and various services, enriching the overall functionality and understanding of MERN applications.
                </p>
                <p>
                    Prior to my master's program, I dedicated over three years as a software engineer at ConnectWise, a prominent Florida-based company. In this role, I played a pivotal part in frontend development for security projects. My proficiency encompasses React, Typescript, HTML, and CSS, with practical application of Redux and Context API. Additionally, I have adeptly employed testing methodologies using Jest, implemented optimization techniques such as lazy loading, and demonstrated expertise with tools like Yarn and Webpack.
                </p>
                <p>
                    I am committed to further honing my skills and knowledge, continuously seeking opportunities for growth and exploration within the dynamic realm of software engineering.
                </p>
                <p>
                    Best Regards,
                </p>
                <p>
                    Rukhsar Rashid Khan
                </p>
            </div>
        </div>
    );
};

export default About;