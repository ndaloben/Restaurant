import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import pasta from '../assets/pasta.png'
import chef from '../assets/chef.jpg'

export default function About() {
  return (
    <div className='section overflow-x-hidden' id='about'>
      <div className="grid md:grid-cols-2 items-center mb-10">
        <div className="flex flex-col justify-center items-start gap-6">
          <div className="sm:text-3xl text-xl font-bold mb-6">Best food in the city one click away</div>
       
        <span className='text-sm opacity-70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum voluptate mollitia ratione dicta alias, quos nisi amet molestias similique eius doloremque impedit vel nulla accusantium? Dolor vero praesentium laboriosam amet.</span>
        <div className="btn">
          <a href="/#" className='text-white text-[0.85rem]'>
            Explore more
          </a>
          <FaArrowRight />
        </div>
        <div className="md:row-start-1">
          {/* pasta image  */}
          <img src={pasta} alt="" />
        </div>
      </div>
       </div>
       <div className="grid  md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="sm:text-3xl text-xl font-semibold mb-6">
            Our team of highly qualified chefs and skilled catering proffessionals prepare some of the best meals you ever tasted
          </div>
          <span className='text-sm opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rerum mollitia nihil quisquam voluptas blanditiis at optio amet, eveniet aspernatur quia dolores accusamus expedita assumenda corporis exercitationem vel, accusantium minus.</span>
        
        </div>
        <div className="">
           {/* chef image  */}
           <img src={chef} alt="" /> 
        </div>
       </div>
    </div>
  )
}
