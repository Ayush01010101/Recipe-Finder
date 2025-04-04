import React, { useState } from "react";
import Confetti from "./Confetti";
import VegIcon from "../assets/veg-icon.png";
import NonVegIcon from "../assets/non-veg-icon.png";
import {useNavigate } from "react-router";
import { SupabaseContext } from "../Context/SupabaseContext";
import { useContext } from "react";
export default function ({ data }) {
  const navigation=useNavigate()
  const [PopperEffect, SetpopperEffect] = useState(false);
  if(!(new URLSearchParams(window.location.search).get("Recipeid"))){
    navigation("/")
  }
  const recipeid = new URLSearchParams(window.location.search).get("Recipeid");
  
  const Supabase=useContext(SupabaseContext)
  return (
    <>
      <div className="h-full w-full  md:flex flex-wrap justify-center ">
     
        <div className="image h-full w-full border flex flex-col items-center">
          <img
            src={data.image}
            alt="Sorry,Food Image Not Avaliable"
            className="h-[45%] md:w-[50%] w-full md:rounded-t-2xl object-cover"
          />
        </div>

        <div className="fixed block bottom-0 overflow-y-auto overflow-x-hidden  p-1  bg-white h-[65%]  w-full rounded-2xl">
          <div className="p-5 flex justify-center">
            <div className="font-medium text-2xl  w-full  flex justify-between items-center ml-4">
              <p>{data.title}</p>

              <img
                src={data.vegetarian ? VegIcon : NonVegIcon}
                alt="foodimage"
                className="h-5 w-5 object-cover"
              />
            </div>
          </div>

          {/* cards */}

          <div className="cards mt-2 w-full flex justify-center items-center gap-6">
            <div className="card-1 font-medium flex flex-col justify-center items-center shadow-sm rounded-2xl p-3 h-[65px] w-[120px] ">
              <p>{data.readyInMinutes} Min</p>
              <p className="font-normal opacity-70 text-sm">Time</p>
            </div>

            <div className="card-1 font-medium flex flex-col justify-center items-center shadow-sm rounded-2xl p-3 h-[65px] w-[120px] ">
              <p>{data.healthScore}</p>
              <p className="font-normal opacity-70 text-sm">HealthScore</p>
            </div>
          </div>
          {/* cards ends here */}

          {/* ingredients */}
          <div className="ingredients  w-full mt-7">
            <h2 className="font-medium text-xl ml-10">Ingredients</h2>
            <div className="ingi-cards flex justify-center flex-wrap   mx-10 p-3 min-h-40">
              {/* mapcards */}
              {data?.extendedIngredients?.map((ingredient) => {
                return (
                  <div
                    key={crypto.randomUUID()}
                    className="flex my-2 flex-col justify-center p-3 shadow-sm items-center min-h-16 rounded-2xl w-36 "
                  >
                    <img
                      src={`https://img.spoonacular.com/ingredients_500x500/${ingredient.image}`}
                      className="p-3 h-14 w-24 rounded-2xl object-contain "
                    />
                    <p className="flex justify-center w-full text-center items-center">
                      {ingredient.nameClean}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="button max-w-full justify-center flex overflow-hidden">
            {PopperEffect && (
              <Confetti
                className=" bottom-26"
                mode="boom"
                particleCount={50}
                colors={["#ff577f", "#ff884b"]}
              ></Confetti>
            )}
            <button
              onClick={() =>{
                SetpopperEffect(true)
                Supabase.AddRecipe(data.title,data?.image,recipeid)
                setTimeout(() => {
                  navigation(`/cook/starttocook/?Recipeid=${recipeid}`)
                  
                }, 500);
              }}
              className="fixed cursor-pointer text-[16px] bottom-26 text-white bg-orange-600 py-2 font-medium px-10 hover:scale-105 transition-all duration-200 rounded-2xl"
            >
              Start Cooking
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
