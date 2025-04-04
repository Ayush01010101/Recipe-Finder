import Cook from "../Components/Cook";
import React, { useEffect, useState } from 'react'
import { useContext } from "react";
import { RecipeDataContext } from "../Context/RecipeDataContext";
import CookLoading from "../Components/CookLoading";
export default function (){
    const searchParams = new URLSearchParams(window.location.search);
   const [RecipeData,SetrecipeData]=useState([])
const [RecipeContextData,SetrecipeContextData]=useContext(RecipeDataContext)
    const [loading,setloading]=useState(false)
    useEffect(()=>{
        try{
            fetch(`https://api.spoonacular.com/recipes/${searchParams.get("Recipeid")}/information?apiKey=${import.meta.env.VITE_SPOONACULAR_API}`)
            .then((res)=>res.json())
            .then((res)=>{
                SetrecipeData(res)
                setloading(true)
                SetrecipeContextData(res)
            })

        }catch(error){
            alert("Oops!! error from backend , Please try again after some time")
        }
        
    },[])
    return(
        <>  
            <div className="h-screen w-screen overflow-y-hidden">
            {loading ?  <Cook data={RecipeData}/>: <CookLoading/>}
           
            
            </div>
        </>
    )
}