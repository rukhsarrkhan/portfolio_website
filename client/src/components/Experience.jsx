import ExperienceElements from "./ExperienceElements";
import schoolIcon from "../assets/school.svg";
import workIcon from "../assets/work.svg";

export default function Experience({ defaultColor }) {
    return (
        <div name='experience' className="flex flex-col items-center py-[6rem] bg-gradient-to-b from-white to-gray-800 text-black w-full overflow-hidden">
            {
                ExperienceElements.map((element) => {
                    const color = defaultColor || `bg-${element.color}-500`;
                    // const isSchool = element.icon === "school";

                    return (

                        <div key={element.id} className="flex flex-col md:flex-row m-4 relative w-full max-w-[90%] md:max-w-[700px]">                            <div
                            className={`bg-black w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden`}
                        ></div>
                            <div
                                className={`bg-black w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}
                            ></div>
                            <div className="hidden items-start w-64 pt-0.5 relative sm:flex">
                                <div className="w-4/5 pt-2 text-black">{element.date}</div>
                                <div
                                    className={`bg-black w-px h-full translate-x-5 translate-y-10 opacity-30`}
                                ></div>
                                <img
                                    src={element.icon === "school" ? schoolIcon : workIcon}
                                    alt="icon"
                                    className={`${color} w-10 p-1 rounded-lg z-20`}
                                />
                                <div
                                    className={`bg-black h-px w-8 translate-y-5 opacity-30`}
                                ></div>
                            </div>
                            <div className="border border-white rounded-lg px-4 py-4 bg-pink-300 text-center z-10 w-full md:w-[700px] mx-auto">
                                <div className="text-lg md:text-xl font-medium">{element.title}</div>
                                {/* <div className="text-sm md:text-base text-black mb-4 md:mb-6"> */}

                                <div className="text-black mb-6 sm:mb-8 sm:text-xs">
                                    {element.location}
                                    <span className="sm:hidden">| {element.date}</span>
                                </div>
                                {/* <div className="mb-4 text-left">{element.description}</div> */}
                                {/* <div className="flex flex-wrap mb-6 justify-center">
                                    {element.tech.map((tech, index) => {
                                        return (
                                            <span
                                                key={index}
                                                className="bg-white rounded-xl px-2 py-1 text-sm m-1"
                                            >
                                                {tech}
                                            </span>
                                        );
                                    })}
                                </div> */}
                                <img
                                    src={element.icon === "school" ? schoolIcon : workIcon}
                                    alt="icon"
                                    className={`${color} w-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden`}
                                />
                                {/* <a
                                    className={`${color} text-gray-950 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-white`}
                                >
                                    {element.buttonText}
                                </a> */}
                            </div>
                        </div>
                    );
                })
            }
        </div >
    );
};