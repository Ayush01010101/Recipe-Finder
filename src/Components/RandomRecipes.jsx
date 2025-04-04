import React from "react";
import { useNavigate } from "react-router";
export default function ({ RandomRecipesData }) {
  const navigation = useNavigate();
  return (
    <>
      <div className="h-56 overflow-hidden relative w-40 p-4 cursor-pointer flex flex-col gap-3 mt-2 justify-center items-center bg-white rounded-2xl shrink-0">
        <div>

        {RandomRecipesData?.vegetarian ? (
          <img
          className="absolute left-2 top-2 h-5 w-5 object-cover"
          src="https://lxjlasbebzfrcridpgjy.supabase.co/storage/v1/object/public/images/assets/veg-icon.png"
          alt="veg icon"
          />
        ) : (
          <img
          className="absolute left-2 top-2 h-5 w-5 object-cover"
          src="https://lxjlasbebzfrcridpgjy.supabase.co/storage/v1/object/public/images/assets/non-veg-icon.png"
          alt="non-veg icon"
          />
        )}
        </div>

        <div className="h-[100px] w-[100px]">

        <img
          className="block w-[100px] h-[100px]  object-cover rounded-2xl transition-all duration-300 hover:scale-105"
          src={RandomRecipesData.image}
          alt="recipe image"
          />
          </div>
        <p className="font-bold flex flex-wrap">
          {RandomRecipesData.title.length >=11 ? RandomRecipesData.title.slice(0,12) : RandomRecipesData.title}
        
          {RandomRecipesData.title?.length >= 11 ? (
            <span className="opacity-35">....</span>
          ) : null}
        </p>
      </div>
    </>
  );
}
