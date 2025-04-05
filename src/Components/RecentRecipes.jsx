import React from 'react';
export default function ({ RecentRecipesData }) {

  return (
    <>
      <div className="h-56 overflow-hidden relative w-40 p-4 cursor-pointer flex flex-col gap-3 mt-2 justify-center items-center bg-white rounded-2xl shrink-0">
        {
          RecentRecipesData?.vegetarian?<img className='absolute left-2 top-2 h-5 w-5 object-cover' src=".https://lxjlasbebzfrcridpgjy.supabase.co/storage/v1/object/public/images/assets/veg-icon.png" alt="veg icon" />:<img className='absolute left-2 top-2 h-5 w-5 object-cover' src="https://lxjlasbebzfrcridpgjy.supabase.co/storage/v1/object/public/images/assets/non-veg-icon.png" alt="non-veg icon" />
        }
        
        <img
          src={RecentRecipesData.Image}
          alt="recipe image"
          className="block w-[100px] h-[100px]  object-cover rounded-2xl transition-all duration-300 hover:scale-105"
        />
          <p className="font-bold flex flex-wrap">
          {RecentRecipesData.Name.length >=11 ? RecentRecipesData.Name.slice(0,12) : RecentRecipesData.Name}
        
          {RecentRecipesData.Name?.length >= 11 ? (
            <span className="opacity-35">....</span>
          ) : null}
        </p>
      </div>
    </>
  );
}