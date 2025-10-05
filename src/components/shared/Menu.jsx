import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router";

export const Menu = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary border-1 border-dark border-bottom"
    >
      <Container>
        <Navbar.Brand href="#home">Tarta & Co.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to={"/"}>Inicio</Link>
            <Link to={"/recetas"}>Recetas</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
