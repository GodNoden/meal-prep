// app/components/Features.jsx
export default function Features() {
    return (
      <section className="features">
        <h2>¿Qué Ofrece NutriTrack?</h2>
        <div className="features-grid">
          <FeatureCard
            icon="📝"
            title="Registro de Comidas"
            description="Lleva un registro detallado de todo lo que consumes."
          />
          <FeatureCard
            icon="🤖"
            title="Recomendaciones IA"
            description="Recibe sugerencias saludables basadas en tus hábitos."
          />
          <FeatureCard
            icon="⚠️"
            title="Alertas de Salud"
            description="Evita alimentos dañinos con advertencias en tiempo real."
          />
        </div>
      </section>
    );
  }
  
  function FeatureCard({ icon, title, description }) {
    return (
      <div className="feature-card">
        <span className="icon">{icon}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }