import { Col, Container, Row } from "react-bootstrap";
import { CardsCuadradas } from "./Ui/CardsCuadradas.jsx";

export const ContainerCardsC = () => {
  return (
    <>
      <Container>
        <div>
          <h3 className="text-center py-4 text-dark display-6">
            Recetas deliciosas y <b>100% libres de gluten (Sin TACC)</b> para
            disfrutar sin preocupaciones.
          </h3>
        </div>
        <div className="d-flex justify-content-center">
          <Row className="">
            <CardsCuadradas />
          </Row>
        </div>
      </Container>
    </>
  );
};
