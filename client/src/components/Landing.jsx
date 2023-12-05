import React from "react";
import Menu from "./Menu";
import LabTabs from "./Portfolio";
// import Fade from "react-reveal/Fade";

const Landing = () => {
    return (
        <>
            <div>
                <section className="App">
                    {/* <Fade top> */}
                    <h1>Hi! This is Rukhsar Rashid Khan </h1>
                    <blockquote>"Nice to meet you :)"</blockquote>
                    {/* </Fade> */}

                </section>
                {/* <Menu /> */}
            </div>
            <LabTabs />
        </>


    );
};

export default Landing;
