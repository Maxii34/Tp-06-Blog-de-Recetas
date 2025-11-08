import { Row, Col, Container } from "react-bootstrap";
import { Footer } from "../shared/Footer";


export const DetalleRecetas = () => {
  return (
    <>
      <Container className=" mt-4">
        <div className="my-3 rounded">
          <Row>
            <Col xs={12} md={6} lg={6} className="p-0">
              <img
                src=""
                alt="Receta"
                loading="lazy"
                className="w-100 img-ingredientes rounded cards"
              />
            </Col>
            <Col xs={12} md={6}>
              <h1 className="text-center display-6">Ingredientes</h1>
              <div className="bg-primary-subtle p-3 rounded">
                <ul className="w-100 mb-0">// Lista de ingredientes</ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="my-3">
          <h4 className="display-6 text-center p-2">Preparación</h4>
          <div>
            <ol></ol>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};
