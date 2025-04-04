import React from 'react'
export default function ({text}){
    return (
        <>
            <div className='fixed pop-up-to-down h-11 -top-12 border flex justify-center items-center
             p-4 bg-white md:w-[50vw] w-screen rounded-2xl'>
                <span>{text}</span>
               
            </div>
        </>
    )
}