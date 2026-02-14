export default function About() {
  return (
    <div style={{
      padding: "40px",
      backgroundColor: "#1c1c1c",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff"
    }}>
      <div style={{
        backgroundColor: "#2a2a2a",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
        maxWidth: "600px",
        textAlign: "center",
      }}>
        <h1 style={{ color: "#ffcc00", marginBottom: "20px" }}>À propos 🎬</h1>
        <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#ddd" }}>
          Bienvenue dans notre <strong>Movie App</strong> ! <br /><br />
          Cette application vous permet de rechercher vos films préférés à partir de l'API <strong>OMDB</strong>, 
          consulter leurs détails, et naviguer facilement entre les différentes sections.
        </p>
        <p style={{ marginTop: "20px", color: "#aaa", fontSize: "14px" }}>
          Développé avec ❤️ en React.js pour une interface moderne et responsive.
        </p>
      </div>
    </div>
  );
}
