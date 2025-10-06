import Nav from "react-bootstrap/Nav";
import { Menu, Footer } from "../index.jsx";

export const Administracion = () => {
  return (
    <>
      <Menu />
      <main>
        <Nav variant="tabs" className="bg-dark-subtle text-white" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="">Option 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Option 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Option 3</Nav.Link>
          </Nav.Item>
        </Nav>
      </main>
      <Footer />
    </>
  );
};
