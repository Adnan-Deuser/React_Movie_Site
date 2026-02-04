import MovieCard from "../components/MovieCard"
import {useState ,useEffect} from "react"
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"
function Home(){
    const [searchQuery,setSearchQuery] = useState("");
    const [movies,setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [Loading, setLoading] = useState(true)
    useEffect(() =>{
        const loadPopularMovies = async()=>{
            try{
                const popularmovies = await getPopularMovies();
                setMovies(popularmovies)
            }catch(error) {
                console.log(error)
                setError("Failed to Load Movies...")
            }
            finally{
                setLoading(false)
            }
        }

        loadPopularMovies();
    },[])

    const handleSearch= async(e) =>{
        e.preventDefault();
        if(!searchQuery.trim()) return
        if (Loading) return
        setLoading(true);
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (error) {
            console.log(error)
            setError("Failed to Search the Movies...😊")
        }
        finally{
            setLoading(false)
        }
    };
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                placeholder="search for Movies..." 
                className="search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} 
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="eror-message">{error}</div>}

            {Loading ? (
                <div className="loading">Loading...</div>
             ) :<div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
            }

        </div>
    )
}
export default Home