import React from 'react'
import { createPortal } from "react-dom";
import { IoCloseCircle } from "react-icons/io5";
import { useNavigate } from 'react-router';
import { PiCookingPotThin } from "react-icons/pi";
export default function({ SetshowRecipe, ShowRecipe }) {
     const navigation=useNavigate()
     return createPortal(
       <>
         <div className={`bg-black/30 h-full w-[100vw] mx-auto flex flex-col items-center`}>
           <IoCloseCircle onClick={() => SetshowRecipe(false)} className="cursor-pointer fixed top-20" size={45}/>
           
           <div onClick={(e) => e.stopPropagation()} 
                className={`group overflow-y-auto w-full md:w-[50%] pop-down-to-up bg-white fixed bottom-0 h-[80%] rounded-t-3xl flex flex-col items-center`}>
             <div className="w-[90%] mt-8  py-8 flex flex-col gap-6"> 
               {ShowRecipe.map((recipe) => (
                 <div onClick={()=>{
                    navigation(`/cook?Recipeid=${recipe.id}`)
                 }} key={recipe.id} className='cursor-pointer hover:scale-105 transition-all duration-300 min-h-[120px] rounded-2xl bg-[#f9f5f2] w-full flex p-4 shadow-xl flex-shrink-0'>
                   <div className="w-[40%] md:w-[33%]">
                     <img 
                       className='rounded-3xl h-full w-full object-cover' 
                       src={recipe.image} 
                       alt="Dish" 
                     />
                   </div>
                   
                   <div className="flex-1 px-4 flex items-center">
                     <h2 className="text-xl font-medium line-clamp-2">{recipe.title}</h2>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </>,
       document.querySelector('#portal')
     )
   } 