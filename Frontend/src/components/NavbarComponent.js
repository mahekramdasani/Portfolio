import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const NavbarComponent = () => {
  const navigateAndReload = (path) => {
    history.push(path);
    window.location.reload();
  };
  const handleDownload = () => {
    const fileURL = 'https://drive.google.com/file/d/1j1X5BKSAWW6IOXoZ42KLt5g1iloUPSNo/view'; 

// Create a link to download
const link = document.createElement('a');
link.href = fileURL;
link.setAttribute('download', 'MahekRamdasani_Resume.pdf');

// Append to the HTML body
document.body.appendChild(link);

// Start the download
link.click();

// Clean up and remove the link
link.parentNode.removeChild(link);

  };
  return (
    <>
      <Navbar expand="lg" className="w-50">
        <Container>
          {window.location.pathname === "/" ? (
            <></>
          ) : (
            <Navbar.Brand href="/">Mahek Ramdasani</Navbar.Brand>
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
  href="https://drive.google.com/file/d/1j1X5BKSAWW6IOXoZ42KLt5g1iloUPSNo/view"
  target="_blank"
  rel="noopener noreferrer" className="transparent-button">Resume</a>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
