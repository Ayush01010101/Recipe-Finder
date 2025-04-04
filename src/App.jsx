import React, { useState, useEffect, useRef,useContext } from "react";
import { Outlet } from "react-router";
import BottomBar from "./Components/BottomBar.jsx";
import { UserDataContext } from "./Context/UserDataContext.js";
import { RecipeDataContext } from "./Context/RecipeDataContext.js";
import { SupabaseContext } from "./Context/SupabaseContext.jsx";
function App() {
  const [RecipeData, SetrecipeData] = useState({});
  const [showBottomBar, setShowBottomBar] = useState(true);
  const [Userdata,Setuserdata]=useState({})
  const lastScrollY = useRef(0);
  const scrollableElement = useRef(null);
  const Supabase=useContext(SupabaseContext)


  useEffect(() => {
    const handleScroll = (e) => {
      const getScrollableParent = (element) => {
        if (!element) return window;
        const hasScrollbar = element.scrollHeight > element.clientHeight;
        if (hasScrollbar) return element;
        return getScrollableParent(element.parentElement);
      };

      const scrollContainer = getScrollableParent(e.target);
      const currentScroll =
        scrollContainer === window ? window.scrollY : scrollContainer.scrollTop;

      if (currentScroll > lastScrollY.current) {
        setShowBottomBar(false);
      } else {
        setShowBottomBar(true);
      }

      lastScrollY.current = currentScroll;
    };

    document.addEventListener("scroll", handleScroll, true);

    return () => document.removeEventListener("scroll", handleScroll, true);
  }, []);

  useEffect(()=>{
      try {
        Supabase.GetUser()
        .then((res)=>{
          Setuserdata(res)
         
        })
      } catch (error) {
        
      }
  },[])
  return (
    <RecipeDataContext.Provider value={[RecipeData, SetrecipeData]}>
      <UserDataContext.Provider value={Userdata} >

      <div 
        className="min-h-[100vh] off-padding bg-[#f9f5f2]"
        ref={scrollableElement}
        >
        <Outlet />
        {localStorage.length >= 2 && <BottomBar show={showBottomBar} />}
      </div>
        </UserDataContext.Provider>
    </RecipeDataContext.Provider>
  );
}

export default App;
