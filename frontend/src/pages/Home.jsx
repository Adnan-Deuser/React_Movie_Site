import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { searchMovies, getPopularMovies } from "../services/api"
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies]           = useState([]);
    const [error, setError]             = useState(null);
    const [loading, setLoading]         = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.error(err);
                setError("Failed to load movies.");
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim() || loading) return;

        setLoading(true);
        setError(null);

        try {
            const results = await searchMovies(searchQuery);
            setMovies(results);
        } catch (err) {
            console.error(err);
            setError("Search failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button" disabled={loading}>
                    {loading ? "..." : "Search"}
                </button>
            </form>

            {error && (
                <div className="error-message">
                    <span>⚠</span> {error}
                </div>
            )}

            {loading ? (
                <div className="loading">
                    <div className="loading-spinner" />
                    <span>Loading movies...</span>
                </div>
            ) : (
                <div className="movies-grid">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;