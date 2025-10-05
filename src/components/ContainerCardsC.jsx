import { Col, Container, Row } from "react-bootstrap";
import { CardsCuadradas } from "./Ui/CardsCuadradas.jsx";

export const ContainerCardsC = () => {
  return (
    <div className="d-flex justify-content-center">
      <Container>
        <Row className="g-3 d-flex justify-content-center">
          <Col xs={12} sm={6} md={4} lg={3}>
            <CardsCuadradas />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <CardsCuadradas />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <CardsCuadradas />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <CardsCuadradas />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <CardsCuadradas />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <CardsCuadradas />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <CardsCuadradas />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <CardsCuadradas />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
