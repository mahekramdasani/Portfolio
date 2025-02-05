import { React, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";
import logo from "../images/maheklogo.png"
const history = createBrowserHistory();

const NavbarComponent = () => {
  const navigateAndReload = (path) => {
    history.push(path);
    window.location.reload();
  };
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  return (
    <>
      <Navbar expand="lg" className={isNavExpanded ? 'navbar-expanded w-50' : 'navbar-collapsed w-50'}>
        <Container>
          {window.location.pathname === "/" ? (
            <></>
          ) : (
            <Navbar.Brand href="/"><img src={logo} width="120px" /></Navbar.Brand>
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavbarToggle} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link
                  as={NavLink}
                  to="/about"
                  activeClassName="active"
                  onClick={() => navigateAndReload("/about")}
                >
                  About Me
                </Nav.Link></Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={NavLink}
                  to="/work"
                  activeClassName="active"
                  onClick={() => navigateAndReload("/work")}
                >
                  Work
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={NavLink}
                  to="/skills"
                  activeClassName="active"
                  onClick={() => navigateAndReload("/skills")}
                >
                  Skills
                </Nav.Link></Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={NavLink}
                  to="/projects"
                  activeClassName="active"
                  onClick={() => navigateAndReload("/projects")}
                >
                  Projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={NavLink}
                  to="/contact"
                  activeClassName="active"
                  onClick={() => navigateAndReload("/contact")}
                >
                  Contact Me
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <a
                  href="https://drive.google.com/file/d/1AhkiWupjRImTwF_G5DMYTWQtse5kOFRI/view"
                  target="_blank"
                  rel="noopener noreferrer" className="transparent-button">Resume</a>
              </Nav.Item>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
