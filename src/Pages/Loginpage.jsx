import React from 'react'
import { useState,useContext } from 'react'
import Login from '../Components/Authentication/Login'
import { useNavigate } from 'react-router'
import PopUpToDown from '../Components/Popups/PopUpToDown'
import { SupabaseContext } from '../Context/SupabaseContext'
export default function (){
    const [Showpopup,SetshowPopup]=useState(false)
    const navigation=useNavigate()
    const [error,Seterror]=useState('')
    const Supabase=useContext(SupabaseContext)
  
    const onSubmit=(data)=>{
        
        Supabase.LoginUser(data.email,data.password)
        .then((res)=>{
            if(res?.error?.status == 400 && res.error?.code == 'invalid_credentials'){
                alert("User Not Found")
                SetshowPopup(true)
                
            }
            else{
                navigation("/") 
                window.location.reload()
            }
        })
        .catch((error)=>{
            
            alert("Error while login , Please try after some time")
        })
      
    }

    return (
        <>  
            {Showpopup && <PopUpToDown text={'User Not Found !! Invalid Credentials'}/>}
            <span className='sticky'>{error}</span>
            <Login onSubmit={onSubmit}/>

        </>
    )   
}