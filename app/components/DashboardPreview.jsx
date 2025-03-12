// app/components/DashboardPreview.jsx
export default function DashboardPreview() {
  return (
    <section className="dashboard-preview py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Tu Panel de Control</h2>
      <div className="flex justify-center">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/dashboard-preview.png"
              alt="Vista previa del dashboard"
              className="rounded-lg"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}