import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/425497f0-c09e-11ee-891f-6d871096fc6f"; // TODO - update to the correct endpoint


const Contact = () => {
    const [status, setStatus] = useState();
    const [showAlert, setShowAlert] = useState(true);
    const [warning, setWarning] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        setStatus(null);
        setWarning("");
        setShowAlert(true);

        const injectedData = {
            DYNAMIC_DATA_EXAMPLE: 123,
        };
        const inputs = e.target.elements;
        const data = {};
        let isFormValid = true;

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
                if (!inputs[i].value) {
                    isFormValid = false;
                }
            }
        }

        if (!isFormValid) {
            setWarning("Please fill out all fields.");
            return;
        }

        setWarning("");


        Object.assign(data, injectedData);

        fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.status === 422) {
                    Object.keys(injectedData).forEach((key) => {
                        const el = document.createElement('input');
                        el.type = 'hidden';
                        el.name = key;
                        el.value = injectedData[key];

                        e.target.appendChild(el);
                    });

                    e.target.setAttribute('target', '_blank');
                    e.target.submit();

                    throw new Error('Please finish the captcha challenge');
                }

                if (response.status !== 200) {
                    throw new Error(response.statusText);
                }

                return response.json();
            })
            .then(() => {
                setStatus("We'll be in touch soon.");
                e.target.reset();
            })
            .catch((err) => {
                setStatus(err.toString());
                e.target.reset();
            });
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };


    return (
        // <div name="contact" className="w-full bg-gradient-to-b from-black to-gray-800 py-20 text-white">
        <div name="contact" className="w-full  py-20 text-black">

            <div className="max-w-screen-lg mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8 font-signature">Contact</h2>
                <p className="text-center text-lg mb-12">Submit the form below to get in touch with me</p>

                <form
                    action={FORM_ENDPOINT}
                    onSubmit={handleSubmit}
                    method="POST"
                    className="max-w-md mx-auto"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full p-3 mb-4 border-2 border-gray-300 rounded-md text-black focus:outline-none focus:border-[#345c63] transition duration-300"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full p-3 mb-4 border-2 border-gray-300 rounded-md text-black focus:outline-none focus:border-[#345c63] transition duration-300"
                    />
                    <textarea
                        name="message"
                        placeholder="Enter your message"
                        rows="10"
                        className="w-full p-3 mb-4 border-2 border-gray-300 rounded-md text-black focus:outline-none focus:border-[#345c63] transition duration-300"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full text-black bg-[#3d6b74] py-3 px-6 rounded-md hover:bg-[#7F2255] transition duration-300">
                        Let's talk
                    </button>
                </form>

            </div>
            {status && showAlert &&
                <div className="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
                    role="alert" data-dismissible="alert">
                    <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Success alert!</span> I have received your email and will be in touch with you soon.
                    </div>
                    <button
                        type="button"
                        className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                        data-dismiss-target="alert"
                        aria-label="Close"
                        onClick={handleCloseAlert} >
                        <span className="sr-only">Close</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
            }
            {warning && showAlert &&
                <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                    role="alert" data-dismissible="alert">
                    <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Alert!</span> Change a few things up and try submitting again.
                    </div>
                    <button
                        type="button"
                        className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                        data-dismiss-target="alert"
                        aria-label="Close"
                        onClick={handleCloseAlert} >
                        <span className="sr-only">Close</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
            }
        </div>
    );
};

export default Contact;