import React from "react";

export default function DishCard({ DishData,onSubmit }) { 
  
  return (
    <div className="overflow-x-auto overflow-y-hidden min-h-[200px] flex gap-2 items-center rounded-2xl mt-5 bg-white ">
      {DishData.map((data) => (
        <div
          key={data.id}
          onClick={()=>{
            onSubmit({recipename:data.dishname})
          }}
          className= "rounded-2xl shadow-xl  cursor-pointer min-w-32 p-5 flex flex-col justify-center items-center gap-1"
        >
          <div className="h-20 w-20 flex justify-center items-center overflow-hidden">
            <img
              src={data.dishimage}
              alt={data.dishname}  
              className="object-contain h-full w-full"  
            />
          </div>
          <span className="font-bold opacity-95 text-center text-sm">
            {data.dishname}
          </span>
        </div>
      ))}
    </div>
  );
}