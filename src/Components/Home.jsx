import React, { useEffect, useState } from "react";
import Input from "./Input";
import { Hero_Sidebar_Data } from "../Data";
import { RandomRecipesContext } from "../Context/RandomRecipesContext";
import HeroSidebar from "./HeroSidebar";
import Recipes from "./Popups/Recipes";
import RandomRecipes from "./RandomRecipes";
import RecipeInfo from "./Popups/RecipeInfo";
import { SupabaseContext } from "../Context/SupabaseContext";
import RecentRecipes from "./RecentRecipes";
import { RecentRecipesContext } from "../Context/RecentRecipesContext";
import { useContext } from "react";
export default function Home () {
  const [CardData,SetcardData]=useState(null)
  const [RecentDish]=useContext(RecentRecipesContext)
  const [ShowRecipe,SetshowRecipe]=useState(false)
  const Supabase=useContext(SupabaseContext)
  const [RandomDish]=useContext(RandomRecipesContext)
  const onSubmit=(data)=>{
    try {
      fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_SPOONACULAR_API}&titleMatch=${data.recipename}`)
      .then((res)=>res.json())
      .then(res=>SetshowRecipe(res.results))
    } catch (error) {
      
      alert("Plese try after some time ")
    }
  }

  return (
    <div className="p-5 flex flex-col w-full min-h-full ">
      <h2 className="font-bold text-3xl w-[80%] opacity-95">
        What Do You Want To Cook Today?
      </h2>
      <Input onSubmit={onSubmit} placeholder={"Search Recipe"} />
      <HeroSidebar onSubmit={onSubmit} DishData={Hero_Sidebar_Data} />
      <h2 className="font-medium text-2xl mt-10 opacity-95">Random Recipes</h2>

      {/* Random Recipes */}
     
      <div className="div flex min-h-[20vh] rounded-2xl overflow-y-hidden overflow-x-auto mt-5 gap-3 shrink">
        {RandomDish ?RandomDish.map((dish) => {
          return (
            
              <div key={dish.id} onClick={()=>SetcardData(dish)}>
                <RandomRecipes key={dish.id} RandomRecipesData={dish} />

              </div>
              
            
            )
          }) : <div className="text-xl font-medium text-center">Sorry Random Recipes Not Avaliable </div>}
      </div>
          
         {/* recent recipes  */}
        
        <h2 className="mt-5 opacity-95 font-medium text-2xl">Recent Recipes</h2>
        <div className="div flex min-h-[20vh] rounded-2xl overflow-y-hidden overflow-x-auto mt-5 gap-3 shrink">
        {RecentDish.map((dish) => {
          return (
            
              <div key={dish.id} onClick={()=>SetcardData(dish)}>
                <RecentRecipes key={dish.id} RecentRecipesData={dish} />

              </div>
              
            
            )
          })}

        </div>

        {CardData && <RecipeInfo data={CardData} SetcardData={SetcardData}/>}
        {ShowRecipe && <Recipes  ShowRecipe={ShowRecipe} SetshowRecipe={SetshowRecipe}/>}
    </div>
  );
}
