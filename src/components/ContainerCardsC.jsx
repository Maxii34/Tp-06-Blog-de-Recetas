import { Col, Container, Row } from "react-bootstrap";
import { CardsCuadradas } from "./Ui/CardsCuadradas.jsx";
import { useRecetas } from "./Context/RecetasContext.jsx";

export const ContainerCardsC = () => {
  const { recetas } = useRecetas();
  return (
    <div className="d-flex justify-content-center">
      <Container fluid>
        <Row className="g-3 d-flex justify-content-center">
          {recetas.map((itemReceta) => (
            <Col xs={12} sm={6} md={4} lg={3} key={itemReceta.id}>
              <CardsCuadradas itemReceta={itemReceta} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
