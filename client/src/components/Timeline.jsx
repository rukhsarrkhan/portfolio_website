import { Chrono } from "react-chrono";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';

const Timeline = () => {
    return (
        <Chrono
            items={[
                {
                    title: "May 2015 - May 2019",
                    cardTitle: "Bachelors Of Engineering - Computer Engineering",
                    cardSubtitle: "Mumbai University, Mumbai, India",
                    cardDetailedText: `Relevant Courses: Data structures, Object Oriented Programming, Database Management Systems, Software Engineering`,
                    media: {
                        name: "University_of_Mumbai",
                        source: {
                            url:
                                "https://t4.ftcdn.net/jpg/05/90/48/51/360_F_590485181_l1BPVf30t9svIJzNETZDZeuysHBRfjSO.jpg"
                        },
                        type: "IMAGE"
                    },
                },
                {
                    title: "July 2019 - July 2021",
                    cardTitle: "Software Engineer",
                    cardSubtitle: `ConnectWise LLC, Mumbai, India`,
                    cardDetailedText: `• Achieved NIST cybersecurity compliance for over 500 partners by developing interactive forms for a Risk Assessment tool
                    utilizing Angular JS, MySQL, and NodeJS
                    • Applied Agile SCRUM methodologies and employed Github across 5 projects, thereby strengthening product SDLC
                    • Designed and presented architecture of log retention flow to over 20 stakeholders for archiving partner data using AWS
                    services, including Glacier, SNS and S3 buckets, and FortiSIEM to ensure data retention for audits
                    • Automated ticket workflow for incidents detected in SentinelOne SIEM using Golang, enabling Network Operations
                    Center technicians to eliminate manual monitoring and ticket creation, resulting in a 50% increase in productivity
                    • Constructed PySpark scripts for seamless data transfer from Cassandra to Snowflake, accelerating data persistence and
                    Looker integration, leading to actionable insights for optimizing the usage analytics of 3 products`,
                    media: {
                        name: "connectwise",
                        source: {
                            url:
                                "https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg"
                        },
                        type: "IMAGE"
                    },
                },
                {
                    title: "July 2021 - July 2022",
                    cardTitle: "Senior Software Engineer",
                    cardSubtitle: `ConnectWise LLC, Mumbai, India`,
                    cardDetailedText: `• Led a 6 member team to develop a React JS based Endpoint Detection & Response product, facilitating vulnerability
                    scanning via OVAL definitions and delivering a robust security portfolio to 400+ partners
                    • Architected Golang and Cassandra backend microservices, employing optimized plugins, GraphQL, REST APIs and Kafka
                    for 30% quicker responses and 40% boosted system efficiency in seamless device scanning
                    • Created a Ansible - Jenkins CI/CD flow for 6 Golang backend microservices and 3 frontend UI repositories, achieving a
                    flawless software integration phase with zero rollbacks and roll forwards
                    • Directed over 30 partner releases, leveraging Graylog for monitoring and debugging with exceptional project delivery
                    • Communicated across 10 cross functional team and coordinated a defect free product delivery`,
                    media: {
                        name: "connectwise",
                        source: {
                            url:
                                "https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg"
                        },
                        type: "IMAGE"
                    },
                },
                {
                    title: "Jun 2022 - Jul 2023",
                    cardTitle: "Digital Technology Intern",
                    cardSubtitle: `Star Union Dai-ichi Life Insurance Company`,
                    cardDetailedText: `• Enhanced "YouMatter" Android app's Home Screen using Java, Kotlin and XML in Android Studio, resulting in a 25%
                    boost in user engagement and improved navigation efficiency`,
                    media: {
                        name: "internship",
                        source: {
                            url:
                                "https://www.paleurafrica.be/wp-content/plugins/page-layout-builder/images/bg/geometricBGs43.jpg"
                        },
                        type: "IMAGE"
                    },
                },
                {
                    title: "Aug 2023 - Dec 2023",
                    cardTitle: "Graduate Peer Leader",
                    cardSubtitle: `Stevens Institute of Technology`,
                    cardDetailedText: `• Nurtured peer-mentor bonds by actively maintaining consistent communication with mentees.`,
                    media: {
                        name: "Stevens",
                        source: {
                            url:
                                "https://www.stevens.edu/_next/image?url=https%3A%2F%2Fdownloads.ctfassets.net%2Fmviowpldu823%2F6acsiB2ERGCvzovrV7LrvZ%2F47e1f01f779e2757b8771174adc0c3d1%2FCampus_Aeriel_w_UCC_-_Recropped.png%3Fw%3D2400%26h%3D1350%26f%3Dleft%26q%3D80%26fit%3Dfill&w=2400&q=80"
                        },
                        type: "IMAGE"
                    },
                },
                {
                    title: "Aug 2022 - Dec 2023",
                    cardTitle: "Master of Science - Computer Science",
                    cardSubtitle: `Stevens Institute of Technology, Hoboken, United States`,
                    cardDetailedText: `Relevant Courses: Web Programming I & II, Operating Systems, Algorithms, Cryptography, Advanced Algorithm Design &
                    Implementation, Fundamentals of Cyber Security, Privacy in Network World, Engineering Programming: Python`,
                    media: {
                        name: "Stevens",
                        source: {
                            url:
                                "https://www.stevens.edu/_next/image?url=https%3A%2F%2Fdownloads.ctfassets.net%2Fmviowpldu823%2F6acsiB2ERGCvzovrV7LrvZ%2F47e1f01f779e2757b8771174adc0c3d1%2FCampus_Aeriel_w_UCC_-_Recropped.png%3Fw%3D2400%26h%3D1350%26f%3Dleft%26q%3D80%26fit%3Dfill&w=2400&q=80"
                        },
                        type: "IMAGE"
                    },
                },
                {
                    title: "",
                    // cardTitle: "Master of Science - Computer Science",
                    // cardSubtitle: `Stevens Institute of Technology, Hoboken, United States`,
                    // cardDetailedText: `Relevant Courses: Web Programming I & II, Operating Systems, Algorithms, Cryptography, Advanced Algorithm Design &
                    // Implementation, Fundamentals of Cyber Security, Privacy in Network World, Engineering Programming: Python`,
                    // media: {
                    //     name: "Stevens",
                    //     source: {
                    //         url:
                    //             "https://www.stevens.edu/_next/image?url=https%3A%2F%2Fdownloads.ctfassets.net%2Fmviowpldu823%2F6acsiB2ERGCvzovrV7LrvZ%2F47e1f01f779e2757b8771174adc0c3d1%2FCampus_Aeriel_w_UCC_-_Recropped.png%3Fw%3D2400%26h%3D1350%26f%3Dleft%26q%3D80%26fit%3Dfill&w=2400&q=80"
                    //     },
                    //     type: "IMAGE"
                    // },
                },
            ]}
            cardWidth={800}
            cardHeight={425} // sets the height of the timeline card to 200px
            mediaHeight={200} // sets the height of the media element to 100px
            contentDetailsHeight={120} // sets the height of the detailed text to 80px
            readMore={true}
            theme={{
                primary: "lightgrey",
                secondary: "lightblue",
                cardBgColor: "white",
                cardForeColor: "black",
                titleColor: "black",
                titleColorActive: "white",
                iconBackgroundColor: "lightblue",
            }}
            mode="HORIZONTAL"
            textOverlay
            slideShow
            enableDarkToggle
        >
            <div className="chrono-icons">
                <SchoolIcon style={{ fontSize: 30, color: 'darkgrey' }} />
                <WorkIcon style={{ fontSize: 30, color: 'darkgrey' }} />
                <WorkIcon style={{ fontSize: 30, color: 'darkgrey' }} />
                <WorkIcon style={{ fontSize: 30, color: 'darkgrey' }} />
                <WorkIcon style={{ fontSize: 30, color: 'darkgrey' }} />
                <SchoolIcon style={{ fontSize: 30, color: 'darkgrey' }} />
                <StarIcon style={{ fontSize: 30, color: 'darkgrey' }} />
            </div>
        </Chrono>
    );
};

export default Timeline;