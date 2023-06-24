import React, { useState } from 'react'
import { mainMenu } from '../assets/Data'
import { RxDashboard } from 'react-icons/rx'

export default function Navicon() {
    const [toggle, setToggle] = useState(false);
  return (
    <>
    <div className={`${toggle ? "scale-1" : "scale-0" } fixed w-screen overflow-x-hidden flex justify-center z-20 bottom-8 transition-all duration-300`}>
        <div className="flex sm:gap-8 gap-6 bg-black rounded-xl p-4">
            {mainMenu.map((main) => {
                return (
                    <div className="p-2 rounded-full bg-glass" key={main.id}
                    onClick={() => {
                        setToggle(false);
                    }}
                    >
                        <a href={`#${main.href}`} className='text-xl text-white'>{main.icon}</a>
                    </div>
                )
            })}
        </div>
    </div>
    <div className="fixed right-0 top-[10%] z-20 cursor-pointer bg-[darkorange]" 
    onClick={() => {
        setToggle(!toggle)
    }}
    >
        <RxDashboard  className='text-3xl text-white'/>
    </div>
    </>
  )
}
