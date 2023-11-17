import React from "react";
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
  return (
    <>
      <Navbar expand="lg" className="w-50">
        <Container>
          {window.location.pathname === "/" ? (
            <></>
          ) : (
            <Navbar.Brand href="/"><img src={logo} width="120px"/></Navbar.Brand>
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                as={NavLink}
                to="/about"
                activeClassName="active"
                onClick={() => navigateAndReload("/about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/skills"
                activeClassName="active"
                onClick={() => navigateAndReload("/skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/projects"
                activeClassName="active"
                onClick={() => navigateAndReload("/projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                activeClassName="active"
                onClick={() => navigateAndReload("/contact")}
              >
                Contact
              </Nav.Link>
              {/* <Nav.Link
  as="a"
  href="https://drive.google.com/file/d/1j1X5BKSAWW6IOXoZ42KLt5g1iloUPSNo/view"
  target="_blank"
  rel="noopener noreferrer"
>
  Resume
</Nav.Link> */}
            </Nav>
          <a
  href="https://drive.google.com/file/d/1jjaUF5Kti-CjmbfdqQysVHhKWhBozStw/view"
  target="_blank"
  rel="noopener noreferrer" className="transparent-button">Resume</a>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
