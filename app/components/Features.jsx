// app/components/Features.jsx
export default function Features() {
  return (
    <section className="features py-8">
      <h2 className="text-3xl font-bold text-center mb-8">¿Qué Ofrece NutriTrack?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <span className="text-4xl">{icon}</span>
        <h3 className="card-title">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}