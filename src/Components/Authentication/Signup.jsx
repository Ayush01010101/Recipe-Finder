import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import { IoEyeOffOutline,IoEyeOutline } from "react-icons/io5";
export default function ({onsubmit,Isloading}) {


  const [showpassword,Setshowpassword]=useState(false)
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
    
  } = useForm();
  
  const formsubmitaction=()=>{
    onsubmit(getValues())
  }
  

  const navigation=useNavigate()
  return (
    <>
      <section className="bg-gray-50 flex h-screen justify-center items-center">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create an account
              </h1>
              <form onSubmit={handleSubmit(formsubmitaction)} className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                      },
                    })}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  
                  <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 flex justify-between items-center w-full p-2.5 ">
                  <input
                    type={showpassword?"text":"password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="outline-none border-none"
                    required
                    {...register("password")}
                  />
                  <span className="cursor-pointer" >{showpassword?<IoEyeOutline onClick={()=>Setshowpassword(false)} />:<IoEyeOffOutline onClick={()=>Setshowpassword(true)}/>}</span>

                  </div>


                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border outline-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                    {...register('confirm password',{required:true,validate:(value)=>{
                      const {password}=getValues()
                      return password==value || "password should matched"
                    }})}
                  />
                  <span className="text-sm text-red-500">{errors['confirm password']?.message}</span>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500">
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline"
                        onClick={()=>navigation('/terms')}
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-black cursor-pointer bg-blue-300  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500">
                  Already have an account?{" "}
                  <a
                    className="font-medium text-primary-600 hover:underline"
                    onClick={()=>navigation('/login')}
                  >
                    {Isloading?<svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"> </svg>:"Login here"}
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
