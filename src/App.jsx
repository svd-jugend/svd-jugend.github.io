import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Training from './pages/Training';
import AboutUs from './pages/AboutUs';
import WhyChess from './pages/WhyChess';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Imprint from './pages/Imprint';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="training" element={<Training />} />
          <Route path="ueber_uns" element={<AboutUs />} />
          <Route path="warumschach" element={<WhyChess />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="datenschutz" element={<Privacy />} />
          <Route path="impressum" element={<Imprint />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
