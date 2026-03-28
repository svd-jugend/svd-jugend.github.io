import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header-custom">
      <div className="container header-custom-content">
        <div className="logo-container-custom">
          <img src="/assets/logo.png" alt="Schachclub Dettingen/Erms Logo" className="logo-custom" />
        </div>
        <div className="header-main-content-custom">
          <div className="welcome-text-block-custom">
            <h1>Willkommen bei der Jugendabteilung
              <p className="subtitle-custom">des SV Dettingen/Erms e.V.</p>
            </h1>
          </div>
          <nav className="navigation-custom">
            <ul>
              <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Startseite</NavLink></li>
              <li><NavLink to="/training" className={({ isActive }) => isActive ? "active" : ""}>Training</NavLink></li>
              <li><NavLink to="/ueber_uns" className={({ isActive }) => isActive ? "active" : ""}>Über Uns</NavLink></li>
              <li><NavLink to="/warumschach" className={({ isActive }) => isActive ? "active" : ""}>Warum Schach?</NavLink></li>
              <li><NavLink to="/kontakt" className={({ isActive }) => isActive ? "active" : ""}>Kontakt</NavLink></li>
              <li><NavLink to="/datenschutz" className={({ isActive }) => isActive ? "active" : ""}>Datenschutz</NavLink></li>
              <li><NavLink to="/impressum" className={({ isActive }) => isActive ? "active" : ""}>Impressum</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
