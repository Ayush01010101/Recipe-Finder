import React from 'react'
import { IoFilterOutline } from 'react-icons/io5'

export default function(){
    return (
        <>  
            <div onClick={()=>{
                alert("sorry , filter function is not avaliable yet")
            }} className="filter-container">
                <div className="filter">
                <IoFilterOutline size={20}/>
                </div>

            </div>

        </>
    )
}