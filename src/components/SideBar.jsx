import Hotel1 from '../assets/Hotel/Hotel1.jpg'
import Hotel2 from '../assets/Hotel/Hotel2.jpg'
import Hotel3 from '../assets/Hotel/Hotel3.jpg'

export default function SideBar({ children, isOpen, falseSideBar }) {
    return (
        <>
            <div>
                <div className={`w-full h-screen  shadow-lg bg-white z-50 fixed top-0 right-0 p-4 transition duration-300 lg:w-[35%] ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <button onClick={falseSideBar} className="text-black font-bold text-2xl bg-gray-50 px-3 rounded-md absolute right-3 active:bg-shingle-fawn-300">
                        X
                    </button>
                    <h1 className="text-3xl mt-10 font-bold">Hotel Selected</h1>
                    {children}

                    <div className="bg-gray-100 h-screen overflow-y-scroll w-full mr-10 mt-5 rounded-xl shadow-xl fixed">
                        <div className="btn-press-anim grid grid-cols-3 bg-white h-40 cursor-pointer hover:bg-shingle-fawn-100">
                            <div className=" w-40 h-36">
                                <p className="text-lg font-bold mt-2">Hotel Name</p>
                                <img src={Hotel1} className='h-20 mt-4 w-36' />
                            </div>
                            <div className=" w-32 ml-5">
                                <p className="text-md font-medium ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur
                                </p>
                            </div>
                            <div className=" w-10 ml-[30%] mt-5">
                                <p className="text-3xl font-bold">$123</p>
                            </div>
                        </div>
                        <div className="btn-press-anim grid grid-cols-3 bg-white h-40 cursor-pointer hover:bg-shingle-fawn-100">
                            <div className=" w-40 h-36">
                                <p className="text-lg font-bold mt-2">Hotel Name</p>
                                <img src={Hotel2} className='h-20 mt-4 w-36' />
                            </div>
                            <div className=" w-32 ml-5">
                                <p className="text-md font-medium ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur
                                </p>
                            </div>
                            <div className=" w-10 ml-[30%] mt-5">
                                <p className="text-3xl font-bold">$123</p>
                            </div>
                        </div>
                        <div className=" btn-press-anim grid grid-cols-3 bg-white h-40 cursor-pointer hover:bg-shingle-fawn-100">
                            <div className=" w-40 h-36">
                                <p className="text-lg font-bold mt-2">Hotel Name</p>
                                <img src={Hotel3} className='h-20 mt-4 w-36' />
                            </div>
                            <div className=" w-32 ml-5">
                                <p className="text-md font-medium ">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur
                                </p>
                            </div>
                            <div className=" w-10 ml-[30%] mt-5">
                                <p className="text-3xl font-bold">$123</p>
                            </div>
                        </div>

                        <div className='flex flex-center'>
                            <div>
                                <p className='mt-10 font-bold text-3xl'> Total: $123 </p>
                            </div>
                        </div>
                    </div>
                </div>
                {isOpen && <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50">
                </div>}
            </div>
        </>
    )
}