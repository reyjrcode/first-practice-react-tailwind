import { AiOutlinePlayCircle } from "react-icons/ai";
import SingleRoom from '../assets/rooms/SingleRoom.png'
import Room1 from '../assets/rooms/Room1.jpg'
import Bed from '../assets/rooms/bed.svg?react'
import Bathtub from '../assets/rooms/bathtub.svg?react'
import AspectRatio from '../assets/rooms/aspectRatio.svg?react'
import River from '../assets/rooms/River.png'


export default function Rooms() {
    return (
        <>
            <div className="mt-4">
                <div className="fex flex-center flex-col p-2 relative">
                    <div data-aos="flip-down" className='lg:absolute lg:left-32 top-1 '>
                        <h1 className="font-bold text-2xl lg:text-5xl lg:font-extrabold">Rooms we recommend</h1>
                        <h1 className="font-bold text-2xl lg:text-5xl lg:font-extrabold">for our costumers.</h1>

                    </div>
                    <div className='flex flex-col lg:flex-row lg:gap-24 lg:mt-16'>
                        <div className="hover:bg-orange-50 cursor-pointer active:bg-white h-96 w-72 bg-white rounded-3xl mt-9 border shadow-xl flex flex-center flex-wrap relative">
                            <div>
                                <img src={SingleRoom} className='h-80' />
                            </div>
                            <div className='absolute top-72 left-10 mt-1'>
                                <p className='font-bold'>Single Room</p>
                            </div>
                            <div className='flex flex-row -mt-20 -ml-20 relative'>
                                <div className='h-9 w-11 relative'>
                                    <Bed className='h-8 inline-block' />
                                    <p className='absolute top-2 right-2 text-gray-500'>1</p>
                                </div>
                                <div className='h-9 w-11 relative'>
                                    <Bathtub className='h-8 inline-block' />
                                    <p className='absolute top-2 right-2 text-gray-500'>1</p>
                                </div>
                                <div className='h-9 w-11 relative'>
                                    <AspectRatio className='h-8 inline-block' />
                                    <p className='absolute top-2 -right-2 text-gray-500'>80</p>
                                </div>
                            </div>
                            <div className='relative'>
                                <h1 className='font-extrabold absolute -top-6 right-24'>$40
                                    <span className='text-gray-500 text-[8px]'>/day</span>
                                </h1>
                            </div>
                        </div>
                        <div className="hover:bg-orange-50 cursor-pointer active:bg-white h-96 w-72 bg-white rounded-3xl mt-9 border shadow-xl flex flex-center flex-wrap relative
                        ">
                            <div>
                                <img src={SingleRoom} className='h-80' />
                            </div>
                            <div className='absolute top-72 left-10 mt-1'>
                                <p className='font-bold'>Luxury Room</p>
                            </div>
                            <div className='flex flex-row -mt-20 -ml-20 relative'>
                                <div className='h-9 w-11 relative'>
                                    <Bed className='h-8 inline-block' />
                                    <p className='absolute top-2 right-2 text-gray-500'>2</p>
                                </div>
                                <div className='h-9 w-11 relative'>
                                    <Bathtub className='h-8 inline-block' />
                                    <p className='absolute top-2 right-2 text-gray-500'>1</p>
                                </div>
                                <div className='h-9 w-11 relative'>
                                    <AspectRatio className='h-8 inline-block' />
                                    <p className='absolute top-2 -right-4 text-gray-500'>130</p>
                                </div>
                            </div>
                            <div className='relative'>
                                <h1 className='font-extrabold absolute -top-6 right-24'>$40
                                    <span className='text-gray-500 text-[8px]'>/day</span>
                                </h1>
                            </div>
                        </div>
                        <div className="hover:bg-orange-50 cursor-pointer active:bg-white h-96 w-72 bg-white rounded-3xl mt-9 border shadow-xl flex flex-center flex-wrap relative">
                            <div>
                                <img src={SingleRoom} className='h-80' />
                            </div>
                            <div className='absolute top-72 left-10 mt-1'>
                                <p className='font-bold'>Single Room</p>
                            </div>
                            <div className='flex flex-row -mt-20 -ml-20 relative'>
                                <div className='h-9 w-11 relative'>
                                    <Bed className='h-8 inline-block' />
                                    <p className='absolute top-2 right-2 text-gray-500'>3</p>
                                </div>
                                <div className='h-9 w-11 relative'>
                                    <Bathtub className='h-8 inline-block' />
                                    <p className='absolute top-2 right-2 text-gray-500'>2</p>
                                </div>
                                <div className='h-9 w-11 relative'>
                                    <AspectRatio className='h-8 inline-block' />
                                    <p className='absolute top-2 -right-2 text-gray-500'>180</p>
                                </div>
                            </div>
                            <div className='relative'>
                                <h1 className='font-extrabold absolute -top-6 right-24'>$40
                                    <span className='text-gray-500 text-[8px]'>/day</span>
                                </h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='h-full w-full rounded-lg mt-4 flex flex-col lg:flex-row lg:mt-28' >
                <div className='lg:h-1/2 lg:ml-16 h-52 flex justify-center flex-wrap lg:w-[700px]' >
                    <div data-aos="flip-up" className='mt-4'>
                        <img src={Room1} className='w-72 rounded-xl shadow-xl h-52 lg:h-[400px] lg:w-[600px] lg:rounded-l-full lg:rounded-r-lg lg:border-white lg:border-8' />
                    </div>
                </div>
                <div className='lg:h-1/2 lg:w-2/3 h-96 lg:ml-6' >
                    <div className='flex justify-center flex-wrap'>
                        <div className=' text-3xl font-extrabold  lg:text-6xl mt-6' data-aos="fade-right"
                            data-aos-duration="1000">
                            <p>Discover our <span className='text-[#6A513D]'>History</span></p>
                        </div>
                        <div className='p-2 font-bold lg:text-2xl' data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col  h-full lg:flex-row mt-4 lg:mt-10'>
                <div className='h-full w-full p-4'>
                    <div className="mt-10" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <p className='font-bold text-lg opacity-50'>Benefits</p>
                        <p className=' text-2xl font-extrabold lg:text-4xl'>Why Us</p>
                    </div>

                    <div className='flex flex-center lg:justify-start flex-wrap' data-aos="fade-up"
                        data-aos-duration="1000">
                        <div className='mt-10'>
                            <button className='active:ring-4 active:ring-shingle-fawn-950
                            lg:hover:bg-[#6A513D]/50 lg:active:bg-[#6A513D] btn-press-anim
                            bg-[#3D5A6A]/20 h-16 w-48 rounded-xl text-xl font-extrabold hover:bg-[#6A513D]'>Excellent Service</button>
                        </div>
                        <div className='mt-4 lg:text-xl lg:font-medium'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        </div>


                        <div className='mt-10'>
                            <button className='active:ring-4 active:ring-shingle-fawn-950
                            lg:hover:bg-[#6A513D]/50 lg:active:bg-[#6A513D] btn-press-anim
                            bg-[#3D5A6A]/20 h-16 w-48 rounded-xl text-xl font-extrabold hover:bg-[#6A513D]'>Prime Local</button>
                        </div>
                        <div className='mt-4 lg:text-xl lg:font-medium'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        </div>
                        <div className='mt-10'>
                            <button className='active:ring-4 active:ring-shingle-fawn-950
                            lg:hover:bg-[#6A513D]/50 lg:active:bg-[#6A513D] btn-press-anim
                            bg-[#3D5A6A]/20 h-16 w-48 rounded-xl text-xl font-extrabold hover:bg-[#6A513D]'><span className='text-[#3D6A42] lg:hover:text-white lg:active:text-[#3D6A42]'>Delicious Dining</span></button>
                        </div>
                        <div className='mt-4 lg:text-xl lg:font-medium'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        </div>
                    </div>
                </div>
                <div className='h-full w-full' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <div className='relative lg:ml-24'>
                        <div className="mt-20 flex flex-center m-4 lg:-ml-7">
                            <img src={River} className="h-4/6" />
                        </div>

                        <div className="absolute  top-36 left-32 lg:top-64 lg:left-[40%] btn-press-anim cursor-pointer">
                            <AiOutlinePlayCircle size={110} className="fill-white hover:fill-black" />
                        </div>

                    </div>

                </div>
            </div >

        </>
    );
}