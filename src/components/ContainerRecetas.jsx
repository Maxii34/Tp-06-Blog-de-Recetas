import { Col, Container, Row } from "react-bootstrap";
import { CardsRecetas } from "./index.jsx";
import { useRecetas } from "./Context/RecetasContext.jsx";

export const ContainerRecetas = () => {

  const { recetas } = useRecetas();

  return (
    <div className="my-4 d-flex justify-content-center">
      <Container>
        <Row className=" g-3 mx-1 justify-content-center">
          {recetas.map((itemReceta) => (
            <Col xs={12} sm={6} md={3} lg={3} key={itemReceta._id}>
              <CardsRecetas itemReceta={itemReceta} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
