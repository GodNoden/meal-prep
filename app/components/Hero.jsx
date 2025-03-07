// app/components/Hero.jsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Mejora tu Salud con NutriTrack</h1>
        <p>
          Registra tus comidas, recibe recomendaciones personalizadas y evita
          alimentos dañinos.
        </p>
        <Link href="/register">
          <button className="btn-primary">Comienza Ahora</button>
        </Link>
      </div>
      <img
        src="/images/healthy-food.jpg"
        alt="Comida saludable"
        className="hero-image"
      />
    </section>
  );
}