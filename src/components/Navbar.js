import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation(); // باش نعرفو الصفحة الحالية

  const linkStyle = (path) => ({
    textDecoration: "none",
    padding: "8px 15px",
    borderRadius: "8px",
    color: location.pathname === path ? "#ffcc00" : "#fff",
    backgroundColor: location.pathname === path ? "#2a2a2a" : "transparent",
    transition: "all 0.3s",
  });

  return (
    <nav style={{
      padding: "15px 30px",
      background: "#1c1c1c",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      boxShadow: "0 2px 8px rgba(0,0,0,0.5)"
    }}>
      <h2 style={{ color: "#ffcc00", margin: 0 }}>Movie App 🎬</h2>

      <ul style={{
        display: "flex",
        gap: "15px",
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}>
        <li><Link to="/" style={linkStyle("/")}>Accueil</Link></li>
        <li><Link to="/movies" style={linkStyle("/movies")}>Films</Link></li>
        <li><Link to="/about" style={linkStyle("/about")}>À propos</Link></li>
      </ul>
    </nav>
  );
}
