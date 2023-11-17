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
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import TypingEffect from "./components/TypingEffect";
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
        {/* <Header /> */}
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
