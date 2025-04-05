import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { SupabaseContext } from "../Context/SupabaseContext";
import { useNavigate } from "react-router";
import { UserDataContext } from "../Context/UserDataContext";
export default function ({total_count}) {
    const navigation=useNavigate()
    const Supabase=useContext(SupabaseContext)
    const Userdata=useContext(UserDataContext)
    const HandleClick=async()=>{
        try {
            await Supabase.Logout()
            localStorage.removeItem("Userid")
            navigation('/')
            window.location.reload()
        } catch (error) {
            alert("Failed to logout!! try after some time")
        }
    }
  return (
    <>
      <div className="h-full w-full flex-col items-center flex">
        <div className="p-7 w-full md:w-[50%] h-full flex flex-col">
          <div className="userinformation flex justify-center items-center gap-8 bg-white p-5 rounded-xl">
            <FaRegUserCircle size={40} />

            <div className="username">
                <p className="font-medium">{Userdata?.data?.user?.email}</p>
                <p className="opacity-65">{Userdata?.data?.user?.id?.split('-')[4]}</p>
            </div>
          </div>
          
          <div className="options mt-5 h-[40vh] rounded-2xl flex flex-col  bg-white overflow-hidden shadow-xl">
            <div className="option bg-gray-100  font-medium  mt-7 h-[50px] rounded-2xl mx-3 flex items-center justify-between p-2.5">
              <span>Total Recipes</span>
              <span>{total_count}</span>
            </div>

            <div className="option bg-gray-100  font-medium  mt-7 h-[50px] rounded-2xl mx-3 flex items-center justify-between p-2.5 opacity-60">
              <span>Favourite Recipes</span>
              <span>0</span>
            </div>


          
          </div>
          <button onClick={HandleClick} className="bg-red-500 px-5 py-3 rounded-2xl mt-12 cursor-pointer hover:scale-110 transition-all duration-300 text-white border shadow-2xl font-bold text-[17px] ">Logout</button>
        </div>


      </div>
    </>
  );
}
