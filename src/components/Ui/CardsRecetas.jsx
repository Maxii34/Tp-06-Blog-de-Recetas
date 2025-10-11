import { Button, Card } from "react-bootstrap";

export const CardsRecetas = () => {
  return (
    <Card className="cardR">
      <Card.Body className="card__contentR">
        <Card.Title className="card__titleR">Card Title</Card.Title>
        <Card.Text className="card__descriptionR">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco.
        </Card.Text>
        <div className="d-flex justify-content-center mt-5 shadow">
        <Button variant="dark" className="w-100"><i className="bi bi-eye"></i> Ver más</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
