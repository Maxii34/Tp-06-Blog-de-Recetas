import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-4 pt-4 pb-3">
      <Container>
        <Row className="align-items-start text-center text-md-start gy-4">
          {/* Información */}
          <Col xs={12} md={4} className="px-3">
            <h5 className="fw-bold mb-3">Características</h5>
            <ul className="list-unstyled mb-0">
              <li className="my-2">
                <Link to="" className="text-white text-decoration-none">
                  Recetas
                </Link>
              </li>
              <li className="my-2">
                <span className="text-white text-decoration-none">
                  Comunidad
                </span>
              </li>
              <li className="my-2">
                <span className="text-white text-decoration-none">
                  Productos
                </span>
              </li>
              <li className="my-2">
                <span className="text-white text-decoration-none">
                  Sobre nosotros
                </span>
              </li>
            </ul>
          </Col>

          {/* Contacto */}
          <Col xs={12} md={4} className="px-3">
            <h5 className="fw-bold mb-3">Contactanos</h5>
            <ul className="list-unstyled mb-0">
              <li className="my-2 d-flex align-items-center justify-content-center justify-content-md-start">
                <i className="bi bi-telephone-fill fs-5 me-2"></i>
                <span className="text-white">+54 11 3456 7890</span>
              </li>
              <li className="my-2 d-flex align-items-center justify-content-center justify-content-md-start">
                <i className="bi bi-envelope-fill fs-5 me-2"></i>
                <span className="text-white">tartasyco@gmail.com</span>
              </li>
              <li className="my-2 d-flex align-items-center justify-content-center justify-content-md-start">
                <i className="bi bi-geo-alt-fill fs-5 me-2"></i>
                <span className="text-white">
                  Sucursal Centro - Av. Siempre Viva 123
                </span>
              </li>
            </ul>
          </Col>

          {/* Redes sociales */}
          <Col xs={12} md={4} className="px-3">
            <h5 className="fw-bold mb-3">Seguinos en</h5>
            <ul className="list-unstyled mb-0">
              <li className="my-2">
                <a
                  href="#"
                  className="text-white text-decoration-none d-flex align-items-center justify-content-center justify-content-md-start"
                >
                  <i className="bi bi-instagram fs-5 me-2"></i> Instagram
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="text-white text-decoration-none d-flex align-items-center justify-content-center justify-content-md-start"
                >
                  <i className="bi bi-youtube fs-5 me-2"></i> Youtube
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="text-white text-decoration-none d-flex align-items-center justify-content-center justify-content-md-start"
                >
                  <i className="bi bi-tiktok fs-5 me-2"></i> Tiktok
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Línea inferior */}
        <Row>
          <Col className="border-top mt-4 pt-3 text-center">
            <p className="mb-0 small">
              &copy; 2025 Tortas & Co. | Todos los derechos reservados
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
