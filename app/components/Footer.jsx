// app/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 NutriTrack. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="/about">Sobre Nosotros</a>
          <a href="/contact">Contacto</a>
          <a href="/privacy">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}