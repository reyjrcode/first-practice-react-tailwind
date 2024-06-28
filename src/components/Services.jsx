import Wifi from '../assets/services/wifi.svg?react'
import BreakFast from '../assets/services/tea.svg?react'
import Electricity from '../assets/services/electric.svg?react'
import Parking from '../assets/services/car.svg?react'
import Swimming from '../assets/services/swimming.svg?react'
import Exercise from '../assets/services/dumbbell.svg?react'

export default function Services() {
    return (
        <>
            <div className="flex flex-center">
                <div><h1 className="text-[40px] font-bold">Services</h1></div>
            </div>
            <div className="lg:h-screen w-full grid lg:grid-cols-3 mt-3 p-10 lg:p-10">
                <div className="h-44 w-full lg:h-full   hover:bg-slate-50 -z-50 active:bg-slate-50/20  lg:z-50 flex flex-center" data-aos="flip-up">
                    <div className='-mt-13 btn-press-anim cursor-pointer'>
                        <Wifi className="w-16 h-16 btn-press-anim cursor-pointer" />
                        <p className='' >Free Wifi</p>
                    </div>
                </div>
                <div className="h-44 w-full lg:h-full   hover:bg-slate-50 -z-50 active:bg-slate-50/20  lg:z-50 flex flex-center" data-aos="flip-up">
                    <div className='-mt-13'>
                        <BreakFast className="w-16 h-16 btn-press-anim cursor-pointer" />
                        <p className=' ' >Break Fast</p>
                    </div>
                </div>
                <div className="h-44 w-full lg:h-full   hover:bg-slate-50 -z-50 active:bg-slate-50/20  lg:z-50 flex flex-center" data-aos="flip-up">
                    <div className='-mt-13'>
                        <Electricity className="w-16 h-16  btn-press-anim cursor-pointer" />
                        <p className=' ' >Free Electricity</p>
                    </div>
                </div>
                <div className="h-44 w-full lg:h-full   hover:bg-slate-50 -z-50 active:bg-slate-50/20  lg:z-50 flex flex-center" data-aos="flip-up">
                    <div className='-mt-13'>
                        <Parking className="w-16 h-16  btn-press-anim cursor-pointer" />
                        <p className=' ' >Parking Area</p>
                    </div>
                </div>
                <div className="h-44 w-full lg:h-full   hover:bg-slate-50 -z-50 active:bg-slate-50/20  lg:z-50 flex flex-center" data-aos="flip-up">
                    <div className='-mt-13'>
                        <Swimming className="w-16 h-16  btn-press-anim cursor-pointer" />
                        <p className=' ' >Swimming Pool</p>
                    </div>
                </div>
                <div className="h-44 w-full lg:h-full   hover:bg-slate-50 -z-50 active:bg-slate-50/20  lg:z-50 flex flex-center" data-aos="flip-up">
                    <div className='-mt-13'>
                        <Exercise className="w-16 h-16  btn-press-anim cursor-pointer" />
                        <p className=' ' >Exercise Space</p>
                    </div>
                </div>


            </div>
        </>
    );

}