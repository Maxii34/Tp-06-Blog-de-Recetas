import { Col, Container, Row } from "react-bootstrap";
import { CardsCuadradas } from "./Ui/CardsCuadradas.jsx";

export const ContainerCardsC = () => {
  return (
    <div>
      <Container>
        <Row className="g-3 justify-content-between">
          <Col xs={12} sm={6} lg={3}>
            <CardsCuadradas />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <CardsCuadradas />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <CardsCuadradas />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <CardsCuadradas />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <CardsCuadradas />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <CardsCuadradas />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <CardsCuadradas />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <CardsCuadradas />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
