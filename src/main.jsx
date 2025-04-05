import React, { useEffect } from "react";
import Loginpage from "./Pages/Loginpage.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Terms from "./Terms.jsx";
import "./index.css";
import SignupPage from "./Pages/SignupPage.jsx";
import Homepage from "./Pages/HomePage.jsx";
import { SupabaseContext } from "./Context/SupabaseContext.jsx";
import SupaBase from "./SupaBase/SupaBase.js";
import App from "./App.jsx";
import CookPage from "./Pages/CookPage.jsx";
import StartCookPage from "./Pages/StartCookPage.jsx";
import RouteProtection from "./Components/RouteProtection.jsx";
import { Outlet } from "react-router";
import ProfilePage from "./Pages/ProfilePage.jsx";
import { RandomRecipeDataProvider } from "./Context/RandomRecipesContext.jsx";
import { RecentRecipesProvider } from "./Context/RecentRecipesContext.jsx";
const Supabase = new SupaBase(
  import.meta.env.VITE_PROJECT_URL,
  import.meta.env.VITE_SUPABASE_APIKEY
);

createRoot(document.getElementById("root")).render(
  <SupabaseContext.Provider value={Supabase}>
     <RandomRecipeDataProvider>
      <RecentRecipesProvider>


     
     
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Homepage/>} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<Loginpage />} />

          {/* Protected Routes */}
          <Route element={<RouteProtection><Outlet /></RouteProtection>}>
            <Route path="/cook" element={<CookPage />} />
            <Route path="/cook/starttocook" element={<StartCookPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

        </Route>
        <Route path="*" element={<h1 className="text-3xl font-bold h-screen w-screen flex justify-center items-center">404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    </RecentRecipesProvider>
    </RandomRecipeDataProvider>
  </SupabaseContext.Provider>
);
