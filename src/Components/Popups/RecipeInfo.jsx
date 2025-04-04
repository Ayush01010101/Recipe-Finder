import React from "react";
import { createPortal } from "react-dom";
import { IoCloseCircle } from "react-icons/io5";
import {useNavigate } from "react-router";
import { PiCookingPotThin } from "react-icons/pi";
export default function ({data,SetcardData}) {

  const RecipeCode=data.id?data.id:data.RecipeCode
  const navigation=useNavigate()
  return createPortal(
    <>
      <div onClick={(e)=>SetcardData(false)} className={`bg-black/30 h-full w-full flex  flex-col justify-center items-center`}>
     
      <IoCloseCircle onClick={()=>SetcardData(false)} className="cursor-pointer mb-24" size={45}/>
        <div onClick={(e)=>e.stopPropagation()}  className={`group overflow-y-auto pop-down-to-up overflow-x-hidden transition-all duration-3000 bg-white fixed bottom-0  left-0 w-full h-[50vh] e rounded-t-3xl flex flex-col items-center`}>
        
            <div className="dish-name mt-7 flex justify-center items-center flex-col">
            <h3 className="font-medium text-3xl text-center">{data.title?data.title:data.Name}</h3>
            
            </div>

            <div className="font-light text-xl image  w-[250px] rounded-2xl h-[200px] category mt-4 ">
                <img src={data.image?data.image:data.Image} className="h-full w-full object-cover rounded-2xl" />
            </div>


            {/* this section is under maintaince */}
            {/* <div className="ingredients bg-gray-400 rounded-2xl p-5 w-[250px] mt-10 flex flex-col items-center">
                <h2 className="font-medium text-[18px] self-start">Ingredients</h2>
                <div className="items flex flex-col gap-1 mt-5">
                    <span>Mirch</span>
                    <span>Chocolate</span>
                    <span>Corinder</span>
                </div>
            </div> */}

            <button onClick={(e)=>{
              e.stopPropagation()
              navigation(`/cook/?Recipeid=${RecipeCode}`)
            }} className="fixed bottom-4 z-100 mt-7 cursor-pointer hover:scale-105 transition-all duration-300 text-white font-medium py-3 px-6 rounded-2xl bg-orange-600 flex justify-center pointer-events-auto  items-center gap-3 ">Let's Cook it <PiCookingPotThin size={20}/>  </button>

        </div>
      </div>
    </>,
    document.querySelector("#portal")
  );
}
