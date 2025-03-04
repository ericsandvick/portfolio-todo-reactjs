import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ThemeModeMenu from './ThemeModeMenu';

function Header() {
    const header = (
        <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ToDo on React</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav className="ms-auto">
                <ThemeModeMenu />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )

    return header;
}

export default Header