import "./App.css";
// import './css/style-light.css'
// import './css/style-dark.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import withRouter from 'react-router'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import TypingEffect from "./components/TypingEffect";
import { Footer } from "./components/Footer";
// import { ThemeProvider } from './components/ThemeContext';
function App() {
  const currentPath = window.location.pathname;
  return (
    <>
      <BrowserRouter>
        {currentPath == "/" ? (
          <>
            <TypingEffect />
          </>
        ) : (
          <></>
        )}
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
