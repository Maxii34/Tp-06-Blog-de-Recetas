import { Col, Container, Row } from "react-bootstrap";
import { CardsRedondas } from "./Ui/CardsRedondas.jsx";


export const ContainerCardsR = () => {
  return (
    <Container>
      <h1 className="text-center display-5 my-5">Elegí qué querés cocinar</h1>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3} className="my-3">
          <CardsRedondas />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="my-3">
          <CardsRedondas />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="my-3">
          <CardsRedondas />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="my-3">
          <CardsRedondas />
        </Col>
      </Row>
    </Container>
  );
};
