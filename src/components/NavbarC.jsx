import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import imgLogo from "../assets/img/rolling_puppies_logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavbarC = () => {
  const [userRole, setUserRole] = useState();
  const [userLogged, setUserLogged] = useState();

  //###################### PARA PROBAR - ELIMINAR CUANDO AGREGUEMOS TODA LA LOGICA ##########################
  useEffect(() => {
    setUserRole("user");
    setUserLogged(false);
  }, []);
  //##########################################################################################################

  return (
    <>
      <Navbar expand="lg" className="bg-color-fondo text-poppins mb-3">
        <Container fluid>
          <Navbar.Brand className="me-5" href="#home">
            <Image src={imgLogo} width={130} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {userRole === "admin" ? (
              <>
                <Nav className="me-auto d-flex gap-4">
                  <Link className="nav-link fw-medium" href="#home">
                    Usuarios
                  </Link>
                  <Link className="nav-link fw-medium" href="#link">
                    Administrar Turnos
                  </Link>
                </Nav>
              </>
            ) : (
              <>
                <Nav className="me-auto d-flex gap-4">
                  <Link to="#" className="nav-link fw-medium">
                    Nosotros
                  </Link>
                  <Link to="#" className="nav-link fw-medium">
                    Servicios
                  </Link>
                  <Link to="#" className="nav-link fw-medium">
                    Planes
                  </Link>
                  <Link to="#" className="nav-link fw-medium">
                    Contacto
                  </Link>
                </Nav>
              </>
            )}

            <Nav className="ms-auto">
              {userLogged && (
                <>
                  <Link to="#" className="nav-link">
                    <i class="bi bi-bag fs-1 me-2"></i>
                  </Link>
                  <Link to="#" className="nav-link">
                    <i class="bi bi-calendar-event fs-1 me-2"></i>
                  </Link>
                </>
              )}
              <Link
                to={userLogged ? "/user-profile" : "/login"}
                className="nav-link"
              >
                <i className="bi bi-person-circle fs-1"></i>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
