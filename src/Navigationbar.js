import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import git from './icons/git.svg';
import linkedin from './icons/linkedin.svg';
import twitter from './icons/twitter.svg';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

function Navigationbar() {
  const navigate = useNavigate();  // Initialize navigate function

  const handleLogout = () => {
    localStorage.removeItem("user");  // Remove user data from localStorage
    navigate("/");  // Redirect to the login page
  };

  return (
    <div>
      <Navbar variant='dark' bg='dark' expand="lg" sticky='top'>
        <Container>
          <Navbar.Brand href="/" style={{ fontFamily: 'Oxygen' }}>
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='icons' style={{ justifyContent: 'end' }}>
            <Nav className="me-auto">
              <Nav.Link href="/carousel">Carousel</Nav.Link>
              <Nav.Link href="/card">Card</Nav.Link>
            </Nav>
            <Nav style={{ gap: '0.5rem', alignItems: 'center' }}>
              <img src={git} alt='git' />
              <img src={twitter} alt='twitter' />
              <img src={linkedin} alt='linkedin' />
            </Nav>
          </Navbar.Collapse>
          <Button onClick={handleLogout}style={{marginLeft:"30px"}}>Logout</Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
