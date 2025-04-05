import React from 'react'
import { createContext,useEffect,useState,useContext } from 'react'
import { SupabaseContext } from './SupabaseContext'
export const RecentRecipesContext=createContext([])

export function RecentRecipesProvider({children}){
    const Supabase=useContext(SupabaseContext)
    const [RecentDish,SetrecentDish]=useState([])
    useEffect(()=>{
        Supabase.GetUserRecipes('*')
        .then((res)=>{
          if(res[0]){
            SetrecentDish(res[0])
          }
        })
    
      },[])

      return (
        <RecentRecipesContext.Provider value={[RecentDish,SetrecentDish]}>
            {children}
        </RecentRecipesContext.Provider>
      )
}