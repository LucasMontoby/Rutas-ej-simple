
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import Home from './Home'
import Productos from './Productos';
import Contacto from './Contacto';
import NotFound from './NotFound';


function App() {
  return (
  <BrowserRouter>
    <nav>

      <ul>

        <li><Link to="/">Home</Link></li>

        <li><Link to="/productos">Productos</Link></li>

        <li><Link to="/contacto">Contacto</Link></li>

      </ul>

    </nav>

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  </BrowserRouter>
  );
}

export default App;
