import React from "react";

const Project = ({ cardImg, image, cardTitle, cardDesc, projDesc, link }) => {
    const [showModal, setShowModal] = React.useState(false);

    const handleOpenSite = () => {
        window.open(link, '_blank');
    };

    const closeModal = (e) => {
        if (e.target.id === "backdrop") {
            setShowModal(false);
        }
    };

    return (
        <>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-full h-60 mx-auto mt-8 bg-white object-cover' src={cardImg} alt="/" />
                <h2 className='text-2xl font-bold text-center py-4'>{cardTitle}</h2>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8'>{cardDesc}</p>
                </div>
                <button className='bg-[#c78eac] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3' onClick={() => setShowModal(true)}>Learn More</button>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        onClick={closeModal}
                        id="backdrop"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-4xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {cardTitle}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-700 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <img
                                    alt="nature"
                                    className="h-[24rem] w-full rounded-lg object-cover object-center p-4"
                                    src={image}
                                />
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        {projDesc}
                                    </p>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-[#c78eac] text-white active:bg-[#958c91] hover:bg-[#ca629a] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => handleOpenSite()}
                                    >
                                        View Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};

export default Project;