import { Col, Container, Row } from "react-bootstrap";
import { CardsRecetas } from "./index.jsx";

export const ContainerRecetas = () => {
  return (
    <div className="my-4 d-flex justify-content-center">
      <Container fluid>
        <Row className=" mx-1 justify-content-evenly">
          <Col xs={12} sm={6} md={4} lg={3}>
            <CardsRecetas />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <CardsRecetas />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <CardsRecetas />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
