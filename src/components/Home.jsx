import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { heroIcons } from '../assets/Data'
import hero from '../assets/hero.png'

export default function Home() {
    return (
        <div className='section flex items-center xl:justify-center justify-start flex-wrap overflow-x-hidden' id='home'>
            <div className="flex flex-col flex-start gap-10">
                <div className="sm:text-[2.5rem] text-[1.8rem] font-bold">
                    Order Your <br /> Fav Food At An <br /> Affordable Price
                </div>
                <div className="btn">
                    <a href="/#">View Menu</a>
                    <FaArrowRight />
                </div>
                <div className="flex md:gap-6 gap-2 ">
                    {heroIcons.map((heroIcon, index) => {
                        return <div className="bg-black w-12 h-12 text-white flex items-center justify-center md:text3xl text-xl rounded-md" key={index}>{heroIcon}</div>
                    })}
                </div>
            </div>
           <div className="min-w-[200px] md:w-[600px] justify-self-center">
            <img src={hero} alt="hero-img" />
           </div>
        </div>
    )
}
