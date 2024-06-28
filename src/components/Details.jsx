import { SlArrowDown } from "react-icons/sl";
import Hotel from '../assets/hotel.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";

export default function Details() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='mt-6'>
            <div className='flex flex-center' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div >
                    <img src={Hotel} className='w-full lg:w-screen lg:h-screen' />
                </div>
            </div>
            <div className='flex flex-center ' data-aos="zoom-out-down">
                <div className='z-50 h-auto bg-white border w-auto mx-3 -mt-7 rounded-md p-1 flex flex-row justify-between '>
                    <div className='relative h-14 bg-gray-100 w-[25%]  lg:h-16 lg:w-40'>
                        <h1 className="text-md font-bold mt-3">Date</h1>
                        <div className='absolute top-4 right-1'>
                            <SlArrowDown size={20} />
                        </div>
                    </div>
                    <div className='relative h-14 bg-gray-100 w-[25%] border-l-2  border-gray-200 lg:h-16 lg:w-40'>
                        <h1 className="text-md font-bold mt-3">Guest</h1>
                        <div className='absolute top-4 right-1'>
                            <SlArrowDown size={20} />
                        </div>
                    </div>
                    <div className='relative h-14 bg-gray-100 w-[25%] border-l-2  border-gray-200 lg:h-16 lg:w-40'>
                        <h1 className="text-md font-bold mt-3">Room</h1>
                        <div className='absolute top-4 right-1'>
                            <SlArrowDown size={20} />
                        </div>
                    </div>
                    <div className='relative h-14 bg-gray-100 w-[25%] border-l-2  border-gray-200 flex flex-center lg:h-16 lg:w-40'>
                        <div className="w-">
                        <input text='text' className="w-full bg-orange-300 text-md pl-1" placeholder="Search"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}