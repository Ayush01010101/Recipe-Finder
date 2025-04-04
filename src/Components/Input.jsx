import React from'react'
import { CiSearch, CiServer } from "react-icons/ci";
import FilterSearch from './FilterSearch';
export default function({placeholder,onSubmit}){
    const Handlesubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
    
        onSubmit(data)
      };
    return(
        <>
            <form onSubmit={Handlesubmit}>

            <div className="input-container flex gap-4 items-center w-full mt-7 rounded-2xl p-5 bg-white">
                

                <span><CiSearch size={20}/></span>
                <input name='recipename' className='outline-0 w-full' type="text" placeholder={placeholder} />
                <FilterSearch/> 
                
            </div>
            </form>

        </>
    )
}