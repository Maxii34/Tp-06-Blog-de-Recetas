import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router";


export const Menu = ({ handleShow, login, setLogin }) => {
  const loginFalse = () => {
    setLogin(false);
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary border-1 border-dark border-bottom py-3 shadow"
    >
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          Tarta & Co.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to={"/"} className="nav-link me-1">
              Inicio
            </Link>
            {login === true? (
              <>
                <Link to="/recetas" className="nav-link me-1">
                  Recetas
                </Link>
                <Link to="/administracion" className="nav-link me-1">
                  Administración
                </Link>
                <Button
                  variant="link"
                  className="nav-link me-1"
                  onClick={loginFalse}
                >
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="link"
                  className="nav-link me-1"
                  onClick={handleShow}
                >
                  Iniciar Sesión
                </Button>
                <Link to="/register" className="nav-link me-1">
                  Registrarse
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
