"use client"
// components/RecipeCarousel.jsx
import { useState } from "react";

const recipes = [
  { id: 1, title: "Receta A", description: "Descripción de la receta A" },
  { id: 2, title: "Receta B", description: "Descripción de la receta B" },
  { id: 3, title: "Receta C", description: "Descripción de la receta C" },
];

export default function RecipeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextRecipe = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recipes.length);
  };

  const prevRecipe = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? recipes.length - 1 : prevIndex - 1
    );
  };

  const currentRecipe = recipes[currentIndex];

  return (
    <div className="recipe-carousel">
      <button onClick={prevRecipe}>`{'<'}`</button>
      <div className="recipe-card">
        <h2>{currentRecipe.title}</h2>
        <p>{currentRecipe.description}</p>
      </div>
      <button onClick={nextRecipe}>`{'>'}`</button>
    </div>
  );
}