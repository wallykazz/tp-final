import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p className="footer-left">© 2025 Walter Perez. Todos los derechos reservados.</p>
        <p className="footer-right">
          <a href="https://github.com/wallykazz" target="_blank" rel="noopener noreferrer" className="github-link">
            <span className="github-wrapper">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub Logo"
                className="github-icon"
              />
              Repositorio en GitHub
            </span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export { Footer };