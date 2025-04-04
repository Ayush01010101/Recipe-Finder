import React from "react";
import { FaUser } from "react-icons/fa";
import { PiCookingPotFill } from "react-icons/pi";
import { NavLink } from "react-router";
import { MdHome } from "react-icons/md";

export default function ({show}) {
  return (
    <>
      <div className={`fixed bottom-0 left-0 right-0 bottomBar-container h-15 p-10 w-full bg-white rounded-3xl self-end flex items-center justify-around ${ show ? "translate-y-0" : "translate-y-full"}`}>
        <div className="item flex flex-col justify-center items-center cursor-pointer hover:bg-orange-100 p-2 rounded-2xl">
            <NavLink to='/' className={({isActive})=>`${isActive?'text-orange-600':"" } flex flex-col justify-center items-center`}>

            <MdHome size={30} />
            <p>Home</p>
            </NavLink>
              
         
        </div>

        {/* let's cook section  */}

        {/* <div className="item flex flex-col justify-center items-center cursor-pointer hover:bg-orange-100 p-2 rounded-2xl">
        <NavLink to={'/Cookbyingredients'} className={({isActive})=>`${isActive?'text-orange-600':'' } flex flex-col justify-center items-center`}>

            <PiCookingPotFill size={30} />
            <p>Let's Cook</p>
          </NavLink>
        </div> */}




        <div className="item flex flex-col justify-center items-center cursor-pointer hover:bg-orange-100 p-2 rounded-2xl">
        <NavLink to={'/profile'} className={({isActive})=>`${isActive?'text-orange-600':"" } flex flex-col justify-center items-center`}>
            <FaUser size={30} />
            <p>Profile</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}
