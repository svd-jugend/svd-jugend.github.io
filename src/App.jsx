import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ReactBricks } from 'react-bricks/frontend';
import config from './react-bricks/config';
import Layout from './components/Layout';
import Home from './pages/Home';
import Training from './pages/Training';
import AboutUs from './pages/AboutUs';
import WhyChess from './pages/WhyChess';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Imprint from './pages/Imprint';
import CmsPage from './pages/CmsPage';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const reactBricksConfig = {
    ...config,
    navigate,
    location,
  };

  return (
    <ReactBricks {...reactBricksConfig}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="training" element={<Training />} />
          <Route path="ueber_uns" element={<AboutUs />} />
          <Route path="warumschach" element={<WhyChess />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="datenschutz" element={<Privacy />} />
          <Route path="impressum" element={<Imprint />} />

          {/* Catch-all for CMS pages under /cms */}
          <Route path="cms/*" element={<CmsPage />} />
        </Route>
      </Routes>
    </ReactBricks>
  );
}

export default App;
