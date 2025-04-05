# Recipe Finder Web Application

<div style="overflow-x: auto; white-space: nowrap; padding: 20px 0;">
  <img src="https://lxjlasbebzfrcridpgjy.supabase.co/storage/v1/object/public/images/Images/Homepage.png" style="display: inline-block; height: 300px; margin-right: 20px;" />
  <img src="https://lxjlasbebzfrcridpgjy.supabase.co/storage/v1/object/public/images/Images/CookPage.png" style="display: inline-block; height: 300px; margin-right: 20px;" />
  <img src="https://lxjlasbebzfrcridpgjy.supabase.co/storage/v1/object/public/images/Images/ProfilePage.png" style="display: inline-block; height: 300px; margin-right: 20px;" />
  <img src="https://lxjlasbebzfrcridpgjy.supabase.co/storage/v1/object/public/images/Images/Search.png" style="display: inline-block; height: 300px;" />
</div>

A modern recipe discovery platform built with React.js and Tailwind CSS, integrating Supabase for authentication/storage and Spoonacular API for recipe data.

## Features

- 🔐 User authentication (Signup/Login) using Supabase
- 📚 Recent recipes storage with Supabase
- 🔍 Recipe search by name using Spoonacular API
- 🖼️ Recipe details with ingredients and instructions
- 📱 Responsive design for all screen sizes
- 🧑🍳 User-specific recipe history

## Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Authentication**: Supabase Auth
- **Backend Storage**: Supabase Database
- **Recipe API**: [Spoonacular API](https://spoonacular.com/food-api)
- **Routing**: React Router

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/recipe-finder.git
```

2. Install dependencies:
```
cd recipe-finder
npm install
```
3. Create .env file in root directory:
```
VITE_SPOONACULAR_API="<Your_API_Key>"
VITE_PROJECT_URL="<Your_Project_Key>"
VITE_SUPABASE_APIKEY="<Your_Supabase_API_Key>"

```
4. Start development server:
```
npm start
```

<hr>