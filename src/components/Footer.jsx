import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <p>
          © <span>{currentYear}</span> Schachclub SV Dettingen/Erms Jugend
          {' '}| <Link to="/impressum" style={{ color: 'var(--color-light-gray)', textDecoration: 'underline' }}>Impressum</Link>
          {' '}| <Link to="/datenschutz" style={{ color: 'var(--color-light-gray)', textDecoration: 'underline' }}>Datenschutz</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
