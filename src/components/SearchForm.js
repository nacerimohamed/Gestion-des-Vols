import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <input
        type="text"
        placeholder="Rechercher un film..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px 15px",
          width: "250px",
          borderRadius: "8px",
          border: "2px solid #555",
          backgroundColor: "#2a2a2a",
          color: "#fff",
          outline: "none",
          fontSize: "16px",
          transition: "border 0.3s",
        }}
        onFocus={(e) => (e.currentTarget.style.border = "2px solid #ffcc00")}
        onBlur={(e) => (e.currentTarget.style.border = "2px solid #555")}
      />

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#ffcc00",
          color: "#1c1c1c",
          fontWeight: "bold",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background 0.3s, transform 0.2s",
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
        Rechercher
      </button>
    </form>
  );
}
