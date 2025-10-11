import { Col, Container, Row } from "react-bootstrap";
import { CardsRecetas } from "./index.jsx";

export const ContainerRecetas = () => {
  return (
    <div className="my-4 d-flex justify-content-center">
      <Container>
        <Row className=" g-3 mx-1 justify-content-center">
          <Col xs={12} sm={6} md={3} lg={3}>
            <CardsRecetas />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
