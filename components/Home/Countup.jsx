"use client"

import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Countup = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
            <div className='border-t-[20px] border-b-[20px] py-8 border-[#c2272d] w-full'>
                <div className='font-poppins flex flex-col md:flex-row items-center pb-10 lg:pb-0 gap-10 text-center w-[960px] mx-auto '>
                    <div className='lg:w-[300px]'>
                        {
                            counterOn &&
                            <h1 className="text-3xl text-[#c2272d] mb-3 lg:text-[46px] font-bold">
                                <CountUp start={0} end={1} duration={2} />
                            </h1>
                        }
                        <h2 className="text-xl text-[#006837] font-bold">Districts</h2>
                    </div>
                    <div className='lg:w-[300px]'>
                        {
                            counterOn &&
                            <h1 className="text-3xl text-[#c2272d] mb-3 lg:text-[46px] font-bold">
                                <CountUp start={0} end={3} duration={2} />
                            </h1>
                        }
                        <h2 className="text-xl text-[#006837] font-bold">Upazila</h2>
                    </div>
                    <div className='lg:w-[300px]'>
                        {
                            counterOn &&
                            <h1 className="text-3xl text-[#c2272d] mb-3 lg:text-[46px] font-bold">
                                <CountUp start={0} end={1} duration={2} />
                            </h1>
                        }
                        <h2 className="text-xl text-[#006837] font-bold">Institute</h2>
                    </div>
                    <div className='lg:w-[300px]'>
                        {
                            counterOn &&
                            <h1 className="text-3xl text-[#c2272d] mb-3 lg:text-[46px] font-bold">
                                <CountUp start={0} end={34} duration={2} />
                            </h1>
                        }
                        <h2 className="text-xl text-[#006837] font-bold">Volunteers</h2>
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    );
};

export default Countup;