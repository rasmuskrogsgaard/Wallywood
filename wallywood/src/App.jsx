import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/layout.jsx';
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Kontakt from './pages/kontakt.jsx';
import Plakater from './pages/plakater.jsx';
import About from './pages/about.jsx';





function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="plakater" element={<Plakater />} />
          <Route path="about" element={<About />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;






