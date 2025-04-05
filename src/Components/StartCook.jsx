import React, { useEffect } from "react";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import DOMPurify from "dompurify";
import { FaRegCirclePlay } from "react-icons/fa6";
import { useContext } from "react";
import { SupabaseContext } from "../Context/SupabaseContext";
import Confetti from 'react-confetti-boom';
export default function ({ data }) {
  const [CookingStage, SetcookingStage] = useState(0);
  const [IngredientCount, SetingredientCount] = useState(0);
  const [CookingStep,Setcookingstep]=useState(0)
  const Supabase=useContext(SupabaseContext)
  const progress=Math.round((CookingStep+IngredientCount)/(data?.analyzedInstructions[0]?.steps.length-1 + data.extendedIngredients.length - 1)*100)
  return (
    <>
      <div className={`sticky ${progress==100 ? 'w-0 ': 'border-1 w-[85%]'}  md:w-[60%] h-2 rounded-2xl  transition-all duration-700 top-3`}>

        {/* progress color */}
        <div style={{width:`${progress}%`}} className={`h-full transition-all duration-500 bg-orange-400 rounded-2xl`}></div>
      </div>
      {/*ingridents sections */}
      
      {CookingStage == 0 && (
        <div
          key={IngredientCount}
          className={`h-full w-full flex justify-center items-center flex-col gap-4`}
        >
          <div className="text-xl font-medium text-center">
            {IngredientCount === data.extendedIngredients.length - 1
              ? "Done!!"
              : "Get Ready With"}
          </div>
          {IngredientCount === data.extendedIngredients.length - 1 && (
            <Confetti
              mode="boom"
              launchSpeed="2"
              x="1"
              y="1"
              particleCount={100}
              colors={["#ff577f", "#ff884b"]}
            />
          )}
          <div className="h-[30%] w-full flex justify-evenly  items-center">
            <button
              onClick={() => {
                if (IngredientCount > 0) {
                  SetingredientCount(IngredientCount - 1);
                }
              }}
              className="cursor-pointer"
            >
              <IoIosArrowBack size={24} />
            </button>
            <div className="h-full w-[70%] image-container rounded-2xl md:w-[30%] overflow-hidden shadow-black shadow-sm flex">
              <img
                src={`https://img.spoonacular.com/ingredients_500x500/${data?.extendedIngredients[IngredientCount].image}`}
                alt="Sorry, image is not avaliable"
                className="w-full h-full object-cover fade-in-animation md:object-contain"
              />
            </div>
            <button
              onClick={() => {
                if (data?.extendedIngredients.length - 1 > IngredientCount) {
                  SetingredientCount((prev) => prev + 1);
                }
                if(!(data?.extendedIngredients.length - 1 > IngredientCount)){
                  SetcookingStage(1)
                }
              }}
              className="cursor-pointer"
            >
              <IoIosArrowForward size={24} />
            </button>
          </div>

          <div className="text">
            <h2 className="text-2xl font-medium fade-in-animation">
              {data?.extendedIngredients[IngredientCount]?.nameClean}
            </h2>
          </div>

          <div className="text-center flex justify-center items-center p-3 overflow-y-auto overflow-x-hidden min-h-24 rounded-2xl bg-white w-[80%]">
            <h3 className="text-xl font-normal">
              {data?.extendedIngredients[IngredientCount]?.original}
            </h3>
          </div>

          <button
            onClick={() => {
              SetcookingStage(1)
              SetingredientCount(data?.extendedIngredients?.length - 1)
            }}
            className={`${
              IngredientCount === data.extendedIngredients.length - 1
                ? "animate-pulse"
                : ""
            } text-white mt-2 bg-orange-600 py-2 px-5 rounded-2xl cursor-pointer`}
          >
            {IngredientCount === data.extendedIngredients.length - 1
              ? "Next"
              : "Skip"}
          </button>
        </div>
      )}

      {/* summary section */}
      
      {CookingStage == 1 && (
        <div className="w-full h-full overflow-x-hidden overflow-y-auto flex  flex-col flex-wrap fade-in-animation items-center">
          <div className=" card p-3 md:w-[50%] mt-3 shadow-xl flex gap-7 flex-col items-center min-h-[50%]  m-3 rounded-2xl">
            <h1 className="text-3xl font-medium text-center  w-full">
              Summary of recipe
            </h1>

            <div
              className="text-[20px] min-h-full overflow-x-hidden overflow-y-auto"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.summary),
              }}
            ></div>
          </div>
          <button
            onClick={() => SetcookingStage(2)}
            className="fixed bottom-24 border px-8 hover:scale-110 cursor-pointer transition-all duration-300 py-3 font-medium text-[17px] bg-orange-600 text-white rounded-2xl"
          >
            Next
          </button>
        </div>
      )}

      {/* Recipe Section  */}
      {CookingStage == 2 && (
        <div className="w-full h-full  flex flex-col justify-center items-center">
         <div

          className={`h-full w-full flex justify-center items-center flex-col gap-4`}
        >
          {CookingStep === data?.analyzedInstructions[0]?.steps.length-1 && (
            <Confetti
              mode="fall"
              launchSpeed="2"
              x="1"
              y="1"
              particleCount={300}
              colors={["#ff577f", "#ff884b"]}
            />
          )}

          <div className="steps text-xl font-medium flex justify-center items-center flex-col">

            {CookingStep === data?.analyzedInstructions[0]?.steps.length-1 ?<p>Congratulation !!</p> 
            :<>
                <p>Steps</p>
                <p>{`${CookingStep + 1  }/${data?.analyzedInstructions[0]?.steps.length}`}</p>
            </>}
            
          </div>
          <div className="h-[20%] w-full flex justify-evenly  items-center">
            <button
              onClick={() => {
                if (CookingStep > 0) {
                  Setcookingstep((prev)=>prev-1);
                }
                if(!(CookingStep>0)){
                  SetcookingStage(1)
                }
              }}
              className="cursor-pointer"
            >
              <IoIosArrowBack size={24} />
            </button>
            <div className="h-full w-[70%] image-container rounded-2xl md:w-[30%] overflow-x-hidden overflow-y-auto shadow-black p-5  shadow-sm bg-white justify-center items-center   flex">
              <div className="my-8 p-4 font-medium">
              {data?.analyzedInstructions[0]?.steps[CookingStep].step}
                </div>
            </div>
            <button
              onClick={() => {
                if (data?.analyzedInstructions[0].steps.length - 1 > CookingStep) {
                  Setcookingstep((prev) => prev + 1);
                }
              }}
              className="cursor-pointer"
            >
              <IoIosArrowForward size={24} />
            </button>
          </div>
        
  
            
          <button
            onClick={()=>window.open(`https://www.youtube.com/results?search_query=${data.title} recipe`,{target:"_blank"})}
            className="border px-12 flex  justify-center items-center gap-2 hover:scale-110 cursor-pointer transition-all duration-300 mt-10 py-1 font-medium text-[17px] bg-orange-600 text-white rounded-2xl"
            >
            Watch On Youtube <FaRegCirclePlay />    
          </button>
          

          
        </div>
       
        </div>
      )}
    </>
  );
}
