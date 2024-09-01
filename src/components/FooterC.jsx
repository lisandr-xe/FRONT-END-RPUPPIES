import { Row, Col, Image, Container } from "react-bootstrap";
import imgLogo from "../assets/img/rolling_puppies_logo.png";
import { Link } from "react-router-dom";
import "../css/FooterC.css";

const FooterC = () => {
  return (
    <>
      <Container fluid className="pt-4 bg-color-fondo">
        <Row>
          <Col
            xs={12}
            md={12}
            lg={3}
            xl={2}
            className="d-flex justify-content-end justify-content-md-center align-items-center p-0"
          >
            <Image src={imgLogo} className="logo--img__footer" />
          </Col>
          <Col
            xs={12}
            md={8}
            lg={5}
            xl={5}
            className="ps-5 mb-4 p-0 d-flex gap-2"
          >
            <div>
              <h3 className="ms-3">Servicios</h3>
              <ul className="list-group">
                <li className="list-group-item border-0 bg-transparent">
                  <Link className="nav-link">Castración</Link>
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  <Link className="nav-link">Higiene y cuidados</Link>
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  <Link className="nav-link">Algo</Link>
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  <Link className="nav-link">Algo más</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="ms-3">Información</h3>
              <ul className="list-group">
                <li className="list-group-item border-0 bg-transparent">
                  <Link className="nav-link">Acerca de nosotros</Link>
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  <Link className="nav-link">Trabaja con nosotros</Link>
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  <Link className="nav-link">Adopciones</Link>
                </li>
                <li className="list-group-item border-0 bg-transparent">
                  <Link className="nav-link">Blog</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col
            xs={12}
            md={4}
            lg={4}
            xl={5}
            className="mb-4 p-0 d-flex align-items-center justify-content-center gap-3"
          >
            <div className="map--container__footer">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1060679494326!2d-65.20974192408053!3d-26.836578490027872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1724506440040!5m2!1ses-419!2sar"
                height={200}
                width={250}
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <div className="d-flex flex-column gap-1 mt-4 mb-3">
                <div className="direccion d-flex align-items-baseline gap-2">
                  <i className="bi bi-geo-alt-fill fs-4"></i>
                  <p className="fs-5 m-0">Calle Falsa 123</p>
                </div>
                <div className="telefono d-flex align-items-baseline gap-2">
                  <i className="bi bi-telephone-fill fs-4"></i>
                  <p className="fs-5 m-0">555-123425</p>
                </div>
                <div className="direccion d-flex align-items-baseline gap-2">
                  <i className="bi bi bi-clock-fill fs-4"></i>
                  <p className="fs-5 m-0">8:00 a 20:00</p>
                </div>
                <div className="mt-3">
                  <button className="btn-1">Reservar Turno</button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={12} className="border-top border-3 py-3 bg-offwhite">
            <Container fluid className="mx-lg-0 d-flex flex-wrap">
              <div className="bottom--info__footer">
                <p className="fs-5 m-0 ms-sm-2 text-center text-sm-start">
                  Todos los derechos reservados
                </p>
                <p className="fs-5 m-0 ms-sm-2 text-center text-sm-start">
                  @Comunidad-RollingPuppies
                </p>
              </div>
              <div className="flex-grow-1 d-flex align-items-center gap-3 justify-content-sm-end justify-content-center">
                <p className="fs-2 fw-bold m-0">Seguinos</p>
                <div className="social d-flex justify-content-start gap-3 ">
                  <Link to="https://facebook.com" className="nav-link">
                    <i className="bi bi-facebook fs-2"></i>
                  </Link>
                  <Link to="https://x.com" className="nav-link">
                    <i className="bi bi-twitter-x fs-2"></i>
                  </Link>
                  <Link to="https://instagram.com" className="nav-link">
                    <i className="bi bi-instagram fs-2"></i>
                  </Link>
                  <Link to="https://youtube.com" className="nav-link">
                    <i className="bi bi-youtube fs-2"></i>
                  </Link>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FooterC;
