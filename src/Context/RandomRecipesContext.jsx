import React from 'react'
import { createContext, useState, useEffect } from 'react';
export const RandomRecipesContext = createContext();

export const RandomRecipeDataProvider = ({ children }) => {
  const [randomDish, setRandomDish] = useState(null);

    useEffect(()=>{
        try{
          fetch(`https://api.spoonacular.com/recipes/random?number=5&include-tags=indian&apiKey=${import.meta.env.VITE_SPOONACULAR_API}`)
          .then((res)=>res.json())
          .then(data=>{
            setRandomDish(data.recipes)
          })  
    
        }catch(error){
          alert("error from backend , Please try again after some time ")
        }
      },[])
  

  return (
    <RandomRecipesContext.Provider value={[ randomDish,setRandomDish ]}>
      {children}
    </RandomRecipesContext.Provider>
  );
};