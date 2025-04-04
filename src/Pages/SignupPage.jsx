import React, { useEffect, useState } from 'react'
import Signup from '../Components/Authentication/Signup'
import { useContext } from 'react'
import { useNavigate } from 'react-router'
import { SupabaseContext } from '../Context/SupabaseContext'
import LinkSend from '../Components/Popups/LinkSend'
import HomePage from './HomePage'
export default function(){
    const [Islinksent,Setislinkset]=useState(false)
    const navigation=useNavigate()
    const [error,Seterror]=useState('')
    const Supabase=useContext(SupabaseContext)
    useEffect(()=>{
        navigation("/")
        
    },[])


    const onsubmit=(data)=>{
        
        Supabase.SignupUser(data.email,data['confirm password'])
        .then((res)=>{
           
            if(res[0]?.user?.user_metadata?.email_verified == true){
                alert("Account Is Already Exists !!")
                navigation("/login")
                Setislinkset(false)
            }
            else{
                Setislinkset(data.email)
            }
        })
        .catch((error)=>{
          
            Seterror('There is some error , try after some time')
        })
        
        
        
    }
    
    return(
        <>  
            
            {Islinksent && <LinkSend email={Islinksent}/>}
            <span className='text-red-500 font-extralight'>{error}</span>
            <Signup onsubmit={onsubmit}/>
            
        </>
    )
}