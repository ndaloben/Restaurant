import React from 'react'
import { 
  footerSocials, 
  footerContacts, 
  mainMenu, 
  explores, 
  payments
} from '../assets/Data'

export default function Footer() {
  return (
    <div className='section overflow-x-hidden'>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-20">
        <div>
        <div className="text-xl font-semibold mb-4">FoodPalace</div>
        <span className="mb-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam autem inventore fugit vel at accusantium, voluptatum beatae rem reprehenderit nobis placeat quisquam accusamus quidem ratione consectetur sequi. Minima, perferendis consectetur?
        </span>
         </div>
         <div>
        <div className="flex items-center gap-4">
          <span className="">Our Socials</span>
          <div className="h-[2px] w-12 bg-black"></div>
          {footerSocials.map((footerSocial, index) => {
            return (
              <div key={index}>
              <a href="/#" >{footerSocials}</a>
              </div>
            )
          })}
        </div>
        </div>
       
        <div className="grid grid-cols-2">
          <div>
            <span className="font-semibold text-[1.1rem] mb-6">Main Menu</span>
            {mainMenu.map((menu) => {
             return  <div className="mb-2" key={menu.id}>
                <a href={`#${menu.href}`}>{menu.text}</a>
              </div>
            })}
          </div>
          <div>
            <h3 className="font-semibold text-[1.1rem] mb-4">Explore</h3>
            {
              explores.map((explore, index) => {
                return (
                  <div className="mb-2" key={index}>
                    <a href="/#">{explore}</a>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-[1.1rem] mb-4">Contact</h3>
          {footerContacts.map((footerContact) => {
            return (
              <div className="flex items-ccenter gap-4 mb-4" key={footerContact.id}>
              <div className="text-xl">
              {footerContact.icon}
              </div>
              <div>{footerContact.text}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-4 pb-8">
        <div>Copyright &#169; <span className='font-bold'>TechWolf</span> .All rights reserved</div>
        <div className="flex gap-2">
          {payments.map((payment, index) => {
            return (
              <div key={index}>
              <img src={payment} alt='' className='w-10'/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
