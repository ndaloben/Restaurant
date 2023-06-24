import React from 'react'
import { recipes } from '../assets/Data'

export default function Recipe() {
  return (
    <div className='section overflow-x-hidden' id='recipe'>
      <div className="flex flex-col items-center">
        <div className="text-3xl text-center font-bold mb-16">Our Top Dishes</div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {recipes.map(recipe => {
            return (
              <div className="p-4 shadow-lghover:shadow transition-all duration-300 cursor-pointer" key={recipe.id}>
              <img src={recipe.image} alt="" className="rounded-lg mb-4"/>
              <div className="flex items-center justify-between mb-4">
              <div className="md:text-xl text-[1rem] font-semibold">{recipe.name}</div>
              <div className="flex items-center gap-3">
              <button>-</button>
              <span className="text-[0.85rem]">2</span>
              <butoon>+</butoon>
              </div>
              </div>
              <span className='text-[0.85rem] mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rerum mollitia nihil quisquam voluptas blanditiis at optio amet, eveniet aspernatur quia dolores accusamus expedita assumenda corporis exercitationem vel, accusantium minus.</span>
              <div className="flex items-center justify-between">
              <span>{recipe.price}</span>
              <span className="btn cursor-pointer p-3">Add To Cart</span>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
