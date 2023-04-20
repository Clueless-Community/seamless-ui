import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { Head } from 'next/document';
import React, { useState } from 'react'

const ContactUs = () => {
    const maxSubjectInputLength = 150;
    const handleReset = () => {
        setEmail('');
        setSubject('');
        setMessage('');
    };

    function handleSubmit() {
        fetch('https://formsubmit.co/ajax/official.cluelesscommunity@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                email,
                subject,
                message,
            }),
        })
            .then((response) => response.json()).then(handleReset)
            .catch((error) => console.log(error));
    }


    const [email, setEmail] = useState<string | undefined>();
    const [subject, setSubject] = useState<string | undefined>();
    const [message, setMessage] = useState<string | undefined>();

    return (
        <div className='index-bg overflow-hidden '>
                <Navbar />
            <div className="relative px-20">
                <div className="green-gradient absolute z-0 opacity-70 sm:top-60 top-[40%] left-10 sm:-left-64 "></div>
                <div className="green-gradient absolute z-0 opacity-70 sm:-right-52 sm:bottom-0 hidden sm:block "></div>
                {/* <div className="green-gradient absolute z-0 left-[40%] scale-70 opacity-50 top-[30%]"></div> */}
                <div className=" mb-12 mr-4 pl-6">
                    <div className=" flex flex-col md:hidden items-start justify-start px-0 ">
                        <h1 className="text-white text-4xl font-semibold sm:text-3xl sm:font-semibold md:text-5xl md:font-bold pt-7">
                            Contact Us
                        </h1>
                        <p className="text-green-400 font-normal text-[18px] sm:text-xl mt-5 mb-[13%]">
                            Have any questions? We would love to hear from you
                        </p>
            </div>

                    <div className="flex flex-col-reverse md:flex-row items-center  w-full  justify-between pt-[4%]">
                        <div className=" w-full md:w-[50%] lg:w-[35%]">
                            <h1 className="hidden md:block text-white text-2xl font-semibold md:text-3xl sm:font-semibold lg:text-5xl md:font-bold">
                                Contact Us
                            </h1>
                            <p className="hidden md:block text-green-400 font-normal md:text-base lg:text-xl mt-5 mb-[7%] ">
                                Have any questions? We would love to hear from you
                            </p>
                            <form
                                onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
                                    e.preventDefault();
                                    handleReset();
                                    handleSubmit();
                                }}
                            >
                                <div className="flex flex-col w-full md:w-[80%] lg:w-full">
                                    <input
                                        className="inp-secondary mt-[5%]"
                                        name="email"
                                        type="email"
                                        placeholder="Write your Email"
                                        value={email}
                                        required
                                        onChange={(
                                            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                                        ): void => {
                                            setEmail(e.target.value);
                                        }}
                                    />

                                    <input
                                        className="inp-secondary mt-[8%]"
                                        type="text"
                                        placeholder="Enter the subject"
                                        id="outlined-textarea"
                                        name="Subject"
                                        required
                                        value={subject}
                                        onChange={(
                                            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                                        ): void => {
                                            setSubject(e.target.value);
                                        }}
                                        maxLength={maxSubjectInputLength}
                                    />

                                    <textarea
                                        className="inp-secondary mt-[8%]"
                                        rows={7}
                                        placeholder="How can we help you?"
                                        id="outlined-textarea"
                                        name="Feedback"
                                        required
                                        value={message}
                                        onChange={(
                                            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                                        ): void => {
                                            setMessage(e.target.value);
                                        }}
                                    />
                                    <div className="flex items-center justify-center md:block">
                                        <button
                                            className="h-[40px] w-[150px] text-base items-center  mt-6 bg-green-500 text-white border rounded-lg border-green-500"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* <div className='flex  justify-center mb-[70px] md:mb-0 md:w-[70%] '> */}

                        <img
                            className="w-[80%] sm:w-[70%] mb-[70px] md:mt-[110px] md:w-[46%] mr-[0] lg:mr-[35px] lg:w-[40%] "
                            src="/input.png"
                            alt=""
                        />
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs