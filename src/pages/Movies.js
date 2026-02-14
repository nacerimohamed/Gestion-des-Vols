import { useState } from "react";
import SearchForm from "../components/SearchForm";
import MovieCard from "../components/MovieCard";

export default function Movies({ movies, setMovies }) {
  const [loading, setLoading] = useState(false);

  const searchMovies = async (query) => {
    setLoading(true);

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=4a3b711b&s=${query}`
    );

    const data = await response.json();
    setMovies(data.Search ? data.Search : []);
    setLoading(false);
  };

  return (
    <div style={{ padding: "40px", backgroundColor: "#1c1c1c", minHeight: "100vh" }}>
      <h1 style={{
        textAlign: "center",
        color: "#ffcc00",
        fontSize: "2.5rem",
        marginBottom: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        Rechercher des Films 🎬
      </h1>

      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <SearchForm onSearch={searchMovies} />
      </div>

      {loading && <p style={{ textAlign: "center", marginTop: "20px", color: "#ddd" }}>Chargement...</p>}

      {movies.length === 0 ? (
        <p style={{ textAlign: "center", color: "#aaa", marginTop: "40px" }}>
          Aucun film trouvé
        </p>
      ) : (
        <div style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "25px",
        }}>
          {movies.map((movie) => (
            <div 
              key={movie.imdbID} 
              style={{
                backgroundColor: "#2a2a2a",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0,0,0,0.4)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.6)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.4)";
              }}
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
