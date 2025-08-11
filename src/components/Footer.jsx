import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <p>
        Sitio desarrollado por{" "}
        <a href="https://github.com/wallykazz" target="_blank" rel="noopener noreferrer" className="github-link">
          <span className="github-wrapper">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub Logo"
              className="github-icon"
            />
            Walter Perez
          </span>
        </a>
      </p>
    </footer>
  );
};

export { Footer };