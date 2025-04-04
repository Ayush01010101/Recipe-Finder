import React from "react";

export default function () {


  
  
  return (
    <>
      <div className="h-full w-full  md:flex flex-wrap justify-center opacity-60">
     
        <div className="image h-full w-full border flex flex-col items-center">
          
        </div>

        <div className="fixed block bottom-0 overflow-y-auto overflow-x-hidden  p-1  bg-white h-[65%]  w-full rounded-2xl">
          <div className="p-5 flex justify-center">
            <div className="font-medium text-2xl  w-full  flex justify-between items-center ml-4">
            

              
            </div>
          </div>

          {/* cards */}

          <div className="cards mt-2 w-full flex justify-center items-center gap-6">
            <div className="card-1 font-medium flex flex-col justify-center items-center shadow-sm rounded-2xl p-3 h-[65px] w-[120px] ">
              <p>{}</p>
              <p className="font-normal opacity-70 text-sm"></p>
            </div>

            <div className="card-1 font-medium flex flex-col justify-center items-center shadow-sm rounded-2xl p-3 h-[65px] w-[120px] ">
              <p>{}</p>
              <p className="font-normal opacity-70 text-sm"></p>
            </div>
          </div>
          {/* cards ends here */}

          {/* ingredients */}
          <div className="ingredients  w-full mt-7">
           
            <div className="ingi-cards flex justify-center flex-wrap   mx-10 p-3 min-h-40">
              
            </div>
          </div>

          
          
        </div>
      </div>
    </>
  );
}
