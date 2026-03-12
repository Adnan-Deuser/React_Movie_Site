<div align="center">
  <img src="https://img.icons8.com/ios-filled/100/646CFF/film-reel.png" width="90" height="90" alt="Film Reel">
  
  <h1>CinemaOnline</h1>


 <p>
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img src="https://img.shields.io/badge/TMDB_API-01B4E4?style=for-the-badge&logo=the-movie-database&logoColor=white" />
  </p>
</div>

## Core Features
Lightning Fast Discovery: Powered by Vite for near-instant HMR and optimized production builds.

Dynamic Metadata: Real-time data fetching for movie details, ratings, and cast information.

Responsive Theater UI: A mobile-first design that looks stunning on everything from a 4k monitor to a smartphone.

Intuitive Navigation: Smooth routing between categories (Trending, Top Rated, Genres) using React Router.

Rich Media integration: High-resolution poster galleries and trailer embeds.

## 🛠️ Tech Stack
Frontend Core
Framework: React (Functional Components & Hooks)

Build Tool: Vite

Styling: Tailwind CSS (with Glassmorphism effects)

Icons: Lucide-React

Data & State
API: TMDB (The Movie Database)

Fetching: Axios / Fetch API

Routing: React Router 6

## 📁 Project Structure
```
├── src/
│   ├── components/    # Reusable UI (Cards, Navbar, Footer)
│   ├── hooks/         # Custom hooks for API fetching
│   ├── pages/         # View components (Home, MovieDetail, Search)
│   ├── services/      # API configuration and endpoints
│   ├── assets/        # Global styles and static images
│   └── App.jsx        # Root component & Routes
```

## Setup Guide
1. Prerequisites
Node.js (v18+)
A TMDB API Key (Get one here)

2. Installation
Bash
### Clone the repository
```
git clone https://github.com/yourusername/cineflow.git](https://github.com/Adnan-Deuser/React_Movie_Site.git
```

### Navigate to directory
```
cd cineflow
```

### Install dependencies
```
npm install
3. Environment Config
Create a .env file in the root:
```
Code snippet
```
VITE_TMDB_API_KEY=your_api_key_here
VITE_BASE_URL=https://api.themoviedb.org/3
```
### 4. Run Development
```
Bash
npm run dev
```
### 🚀 Future Roadmap
[ ] User Watchlists (using Firebase or LocalStorage)

[ ] Interactive Trailer Modals

[ ] AI-powered Movie Recommendations

[ ] Multi-language Support (i18n)
