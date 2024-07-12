import ExperienceElements from "./ExperienceElements";
import schoolIcon from "../assets/school.svg";
import workIcon from "../assets/work.svg";

export default function Experience({ defaultColor }) {
    return (
        <div name='experience' className="flex flex-col items-center py-16 w-full overflow-hidden">
            {ExperienceElements.map((element) => {
                const color = defaultColor || `bg-${element.color}-500`;

                return (
                    <div key={element.id} className="flex flex-col md:flex-row m-4 relative w-full max-w-[90%] md:max-w-[700px]">
                        <div className={`bg-black w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden`}></div>
                        <div className={`bg-black w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}></div>
                        <div className="hidden items-start w-64 pt-0.5 relative sm:flex">
                            <div className="w-4/5 pt-2 text-black">{element.date}</div>
                            <div className={`bg-black w-px h-full translate-x-5 translate-y-10 opacity-30`}></div>
                            <img
                                src={element.icon === "school" ? schoolIcon : workIcon}
                                alt="icon"
                                className={`${color} w-10 p-1 rounded-lg z-20`}
                            />
                            <div className={`bg-black h-px w-8 translate-y-5 opacity-30`}></div>
                        </div>
                        <div className="border border-[#66b4c1] rounded-lg px-4 py-4 bg-[#ffffff] text-center z-10 w-full md:w-[700px] mx-auto">
                            <div className="text-base md:text-lg font-medium">{element.title}</div>
                            <div className="text-black mb-4 sm:mb-6 text-xs sm:text-base">
                                {element.location}
                                <span className="sm:hidden">| {element.date}</span>
                            </div>
                            <img
                                src={element.icon === "school" ? schoolIcon : workIcon}
                                alt="icon"
                                className={`${color} w-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden`}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
