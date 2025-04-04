import { createClient } from "@supabase/supabase-js";

class SupaBase {
  constructor(projecturl, apikey) {
    this.supabase = createClient(projecturl, apikey);
    
    
  }

  // ========== AUTH METHODS ==========
  SignupUser = async (email, password) => {
    return await this.supabase.auth.signUp({ email, password });
  };

  GetUser = async () => {
    return await this.supabase.auth.getUser();
  };

  LoginUser = async (email, password) => {
    return await this.supabase.auth.signInWithPassword({ email, password });
  };

  Logout = async () => {
    await localStorage.clear()
    return await this.supabase.auth.signOut();
  };

  //DATABASE METHODS
  InsertUser = async (Email) => {
    try {
      const UserInformation = await this.supabase
        .from("Users")
        .insert({ Userid: JSON.parse(localStorage.getItem("Userid")), Email });
     
      return UserInformation;
    } catch (error) {
      alert("failed to store user in backend , Please try again ");
    }
  };

  AddRecipe=async (Name,Image,RecipeCode)=>{
    try {
      const recipe=await this.supabase.from("Recipes").insert({
        Userid:JSON.parse(localStorage.getItem("Userid")),
        Name,
        Image,
        RecipeCode
      })
      
    } catch (error) {
      
    }
  }

  GetUserRecipes = async (SelectValue,Limit=10) => {
    try {
      const { data, error } = await this.supabase
        .from("Recipes")
        .select(SelectValue)
        .eq("Userid", JSON.parse(localStorage.getItem("Userid")))
        .order('created_at', { ascending: false })
        .limit(Limit)
    
      return [data, error];
    } catch (error) {
      alert("failed to get recipes, Try again after some time");
    }
  };


  GetRecipeCount = async () => {

    const { count, error } = await this.supabase
      .from('Recipes')
      .select('*', { count: 'exact' })
      .eq('Userid',JSON.parse(localStorage.getItem("Userid")));

    if (error) {
      console.error("Error fetching recipe count:", error);
      return 0;
    }
    
    return count;
  };

}

export default SupaBase;
