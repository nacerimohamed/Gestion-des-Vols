import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=4a3b711b&i=${id}`
        );
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (loading) return <h2 style={{ textAlign: "center", color: "#fff" }}>Chargement...</h2>;
  if (!movie) return <h2 style={{ textAlign: "center", color: "#fff" }}>Film introuvable</h2>;

  return (
    <div style={{
      padding: "40px",
      backgroundColor: "#1c1c1c",
      minHeight: "100vh",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
    }}>
      <div style={{
        display: "flex",
        gap: "40px",
        maxWidth: "900px",
        flexWrap: "wrap",
      }}>
        {/* Poster */}
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
          alt={movie.Title}
          style={{
            width: "300px",
            height: "450px",
            objectFit: "cover",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.7)"
          }}
        />

        {/* Details */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <h1 style={{ color: "#ffcc00", marginBottom: "15px" }}>{movie.Title}</h1>
          <p><strong>Année :</strong> {movie.Year}</p>
          <p><strong>Genre :</strong> {movie.Genre}</p>
          <p><strong>Réalisateur :</strong> {movie.Director}</p>
          <p><strong>Acteurs :</strong> {movie.Actors}</p>
          <p><strong>Résumé :</strong> {movie.Plot}</p>
          <p><strong>Langue :</strong> {movie.Language}</p>
          <p><strong>Durée :</strong> {movie.Runtime}</p>

          <Link
            to="/movies"
            style={{
              marginTop: "20px",
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#ffcc00",
              color: "#1c1c1c",
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none",
              width: "fit-content",
              transition: "background 0.3s, transform 0.2s",
              textAlign: "center"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e6b800";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffcc00";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Retour aux Films
          </Link>
        </div>
      </div>
    </div>
  );
}
