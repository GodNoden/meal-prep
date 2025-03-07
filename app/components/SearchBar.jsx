"use client"
// components/SearchBar.jsx
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    // Lógica para buscar recetas o ingredientes
    console.log("Searching for:", query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar Receta o Ingrediente"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}