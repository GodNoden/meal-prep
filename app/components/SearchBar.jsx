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
      {/* <input
        type="text"
        placeholder="Buscar Receta o Ingrediente"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button> */}
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8">
            </circle>
            <path d="m21 21-4.3-4.3">
            </path>
          </g>
        </svg>
        <input
          type="search"
          required
          placeholder="Buscar Receta o Ingrediente"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      
      <button onClick={handleSearch} class="btn btn-neutral join-item">
        Buscar
      </button>
      
    </div>

  );
}