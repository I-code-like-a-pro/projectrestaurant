import React from 'react'
import { ChefHat } from "lucide-react";
const Footer = () => {
  return (
    <div>
        <div className="bg-neutral-900 flex gap-3 items-start p-12 gap-40 mt-8 ">
          <div className=" grid grid-cols-1 mb-8">
            <div className="flex">
              <div className="bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center w-10 h-10 grid grid-cols-1">
              <ChefHat className="w-8 h-8 text-bg-dark"/>
            </div>
            <div className="grid grid-cols-1 items-center mx-2 mb-5">
              <h4 className="font-serif text-white text-lg ">
                Maison Étoile
              </h4>
              <p className="text-amber-400 tracking-widest uppercase">Fine Dining</p>
            </div>
            </div>
             <p className="text-wrap text-neutral-400 w-64">
              Experience the art of fine dining where 
              every dish tells a story of passion, precision, and perfection
            </p>
            
          </div>

          <div className="grid grid-cols-1 ">
            <div  className="text-gold text-lg">
              Contact
            </div>
            <p className="text-neutral-400 w-40">
              123 Gourmet Avenue

              New York, NY 10001

              Phone: (555) 123-4567

              Email: info@maisonetoile.com
            </p>
          </div>
          <div>
            <div className='text-gold text-lg'>
              Hours
            </div>
            <p className='text-neutral-400'>
              Tuesday - Thursday: 5:00 PM - 10:00 PM
            </p>
            <p className='text-neutral-400'>
              Friday - Saturday: 5:00 PM - 11:00 PM
            </p>
            <p className='text-neutral-400'>
              Sunday: 4:00 PM - 9:00 PM
            </p>
            <p className='text-neutral-400'>
              Monday: Closed
            </p>
          </div>
        </div>  
      
    </div>
  )
}

export default Footer
