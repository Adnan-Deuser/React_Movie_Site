import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

const Favourites =()=>{
    const {favorites} = useMovieContext();

    if(favorites.length >0) {
        return (
        <div className="favorites">
                <h2>Your Favorites</h2>
        <div className="movies-grid">
                {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
            </div>
        )
    }
    return(
        <div className="favorites-empty">
            <h2>No Favourite Movies Yet</h2>
            <p>Start adding your favourite movies here and it will appear here</p>
        </div>
    )
}
export default Favourites