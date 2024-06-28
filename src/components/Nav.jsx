import { BsBookmarkFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import KaonLogo from '../assets/Logo.svg?react'
import { useState } from 'react';



export default function Nav({onClickSideBar}) {
    const [isMobileMenuShown, setIsMobileMenuShown] =
        useState(false);
    return (
        <nav className="flex justify-between flex-wrap sticky top-0 z-50">
            <a href='#' className="btn-press-anim">
                <KaonLogo className="h-10 w-10  lg:h-16 lg:w-16" />
            </a>

            <button onClick={
                (() => setIsMobileMenuShown(!isMobileMenuShown))
            } className="focus:ring-2 ring-slate-300 rounded hover:bg-gray-200 lg:hidden">
                <GiHamburgerMenu size={35} />
            </button>
            <div className={` ${isMobileMenuShown == false && "hidden"} 
            lg:rounded-lg lg:border-none lg:shadow-lg lg:bg-white/10 w-full lg:block lg:w-auto lg:sticky  font-semibold cursor-pointer border mt-3`}>
                <ul className="lg:text-2xl lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 text-lg border border-gray-100 p-4 lg:bg-transparent lg:border-none lg:text-orange-300 ">
                    <li className="hover:bg-slate-300 hover:text-orange-300 ml-2  lg:hover:bg-transparent lg:hover:text-black"><a href="#">Home</a></li>
                    <li className="hover:bg-slate-300 hover:text-orange-300 ml-2  lg:hover:bg-transparent lg:hover:text-black"><a href="#">News</a></li>
                    <li className="hover:bg-slate-300 hover:text-orange-300 ml-2  lg:hover:bg-transparent lg:hover:text-black"><a href="#">Contact</a></li>
                    <li className="hover:bg-slate-300 hover:text-orange-300 ml-2  lg:hover:bg-transparent lg:hover:text-black"><a href="#">About</a></li>
                </ul>
            </div>
            <div onClick={onClickSideBar} className="fixed bottom-4 l-3 lg:static btn-press-anim cursor-pointer ">
                <div className="h-12 w-12 rounded-full shadow-lg flex-center hover:bg-orange-500 active:bg-orange-200 bg-orange-300 lg:h-16 lg:w-16">
                    <BsBookmarkFill size={20} className="hover:fill-white"/>
                </div>
            </div>
        </nav>
    )
}