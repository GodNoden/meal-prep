// app/components/DashboardPreview.jsx
export default function DashboardPreview() {
    return (
      <section className="dashboard-preview">
        <h2>Tu Panel de Control</h2>
        <div className="preview-container">
          <img
            src="/images/dashboard-preview.png"
            alt="Vista previa del dashboard"
            className="preview-image"
          />
        </div>
      </section>
    );
  }