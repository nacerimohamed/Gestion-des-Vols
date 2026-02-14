import MovieCard from "../components/MovieCard";

export default function Home({ movies }) {
  return (
    <div style={{ padding: "40px", backgroundColor: "#1c1c1c", minHeight: "100vh" }}>
      <h1 style={{
        textAlign: "center",
        color: "#ffcc00",
        fontSize: "3rem",
        marginBottom: "10px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        Movie App 🎬
      </h1>

      <p style={{
        textAlign: "center",
        color: "#ddd",
        fontSize: "1.2rem",
        marginBottom: "40px"
      }}>
        Découvrez vos films recherchés ou populaires !
      </p>

      {movies.length === 0 ? (
        <p style={{ textAlign: "center", color: "#aaa", fontSize: "1.1rem" }}>
          Aucun film recherché pour le moment
        </p>
      ) : (
        <div style={{
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
