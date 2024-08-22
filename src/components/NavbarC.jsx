import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from 'react-bootstrap/Image';
import imgLogo from "../assets/img/rolling_puppies_logo.png"

const NavbarC = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Image src={imgLogo} width={120}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Nosotros</Nav.Link>
              <Nav.Link href="#link">Servicios</Nav.Link>
              <Nav.Link href="#link">Planes</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#home">Iniciar Sesión</Nav.Link>
              <Nav.Link href="#link">Registrarse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
