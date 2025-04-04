import React from 'react'
import StartCook from '../Components/StartCook'
import { RecipeDataContext } from '../Context/RecipeDataContext'
import { useContext } from 'react'
export default function (){
    const [data,setdata]=useContext(RecipeDataContext)
   
    return (
        <>
            <div className='w-screen h-screen flex justify-center items-center flex-col'>
                
                <StartCook data={data}/>
            </div>
        
        </>
    )
}