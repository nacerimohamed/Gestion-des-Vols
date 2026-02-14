import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div
      style={{
        backgroundColor: "#2a2a2a",
        borderRadius: "12px",
        width: "220px",
        overflow: "hidden",
        boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.7)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.5)";
      }}
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/220x330?text=No+Image"}
        alt={movie.Title}
        style={{
          width: "100%",
          height: "330px",
          objectFit: "cover",
          display: "block",
        }}
      />

      <div style={{ padding: "12px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <h3 style={{
            fontSize: "17px",
            color: "#fff",
            margin: "0 0 5px 0",
            fontWeight: "600",
          }}>
            {movie.Title.length > 25 ? movie.Title.substring(0, 25) + "..." : movie.Title}
          </h3>
          <p style={{ color: "#ccc", margin: 0 }}>{movie.Year}</p>
        </div>

        <Link
          to={`/movie/${movie.imdbID}`}
          style={{
            marginTop: "10px",
            padding: "8px 0",
            backgroundColor: "#ffcc00",
            color: "#1c1c1c",
            borderRadius: "6px",
            fontWeight: "bold",
            textAlign: "center",
            textDecoration: "none",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e6b800")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ffcc00")}
        >
          Voir Détails
        </Link>
      </div>
    </div>
  );
}
