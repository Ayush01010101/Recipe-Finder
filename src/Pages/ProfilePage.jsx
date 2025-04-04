import React, { useState } from 'react'
import Profile from '../Components/Profile'
import { useContext } from 'react'
import { SupabaseContext } from '../Context/SupabaseContext.jsx'
export default function (){
    const [TotalRecipeCount,SetTotalRecipeCount]=useState(0)
    const Supabase=useContext(SupabaseContext)
    Supabase.GetRecipeCount()
    .then((res)=>SetTotalRecipeCount(res))
    
    return (
        <>
            <div  className='w-screen h-screen'>

            <Profile total_count={TotalRecipeCount}/>

            </div>
        </>
    )
}