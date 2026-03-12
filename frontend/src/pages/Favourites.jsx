import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

const Favourites = () => {
    const { favorites } = useMovieContext();

    if (favorites.length > 0) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="favorites">
            <div className="favorites-empty">
                <span className="favorites-empty-icon">🎬</span>
                <h2>No Favorites Yet</h2>
                <p>Movies you save will appear here. Start exploring and hit the heart icon to add one.</p>
            </div>
        </div>
    );
}

export default Favourites;