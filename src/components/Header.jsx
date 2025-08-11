import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import "../styles/components/Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">TIENDA WALDO</div>

        {/* Botón hamburguesa */}
        <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu} aria-label="Menú">
          <span />
          <span />
          <span />
        </button>

        {/* Menú móvil */}
        <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          {user ? (
            <>
              <Link to="/" onClick={closeMenu}>Inicio</Link>
              <Link to="/about-us" onClick={closeMenu}>Sobre nosotros</Link>
              <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </>
          ) : (
            <>
              <Link to="/about-us" onClick={closeMenu}>Sobre nosotros</Link>
              <Link to="/login" onClick={closeMenu}>Login</Link>
              <Link to="/registrate" onClick={closeMenu}>Regístrate</Link>
            </>
          )}
        </nav>

        {/* Menú escritorio */}
        <nav className="desktop-nav">
          <ul>
            {user ? (
              <>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about-us">Sobre nosotros</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogout}>Cerrar sesión</button></li>
              </>
            ) : (
              <>
                <li><Link to="/about-us">Sobre nosotros</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/registrate">Regístrate</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };