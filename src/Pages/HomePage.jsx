import React, { useEffect, useState, useContext } from "react";
import { lazy } from "react";
import { useNavigate } from "react-router";
import { UserDataContext } from "../Context/UserDataContext.js";
import { SupabaseContext } from "../Context/SupabaseContext.jsx";
const Home = lazy(() => import("../Components/Home.jsx"));
const SignupPage = lazy(() => import("./SignupPage.jsx"));

export default function Homepage() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const {error}=useContext(UserDataContext)
  const { data } = useContext(UserDataContext);
  
  const Supabase=useContext(SupabaseContext)
  const [Ismount,Setismount]=useState(false)
  const navigation=useNavigate()
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
          if(error){
            Setismount(true)
            setIsUserLoggedIn(false)
          }  
          if (data?.user?.user_metadata?.email_verified) {
            Setismount(true)
            setIsUserLoggedIn(true);
           
          
              localStorage.setItem('Userid',JSON.stringify(data.user.id))
  
              Supabase.InsertUser(data?.user?.email)
              
            

          }
        
      } catch (error) {
        Setismount(false)
      } 
    };

    checkAuthStatus();

    return () => {
     
    };
  }, [data]);





  if(Ismount&& isUserLoggedIn){
    return (<><Home/></>)
  }
  else if(Ismount && isUserLoggedIn==false ){
    return (<><SignupPage/></>)
  }
}
