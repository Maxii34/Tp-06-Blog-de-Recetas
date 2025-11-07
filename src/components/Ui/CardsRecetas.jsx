import { Button, Card } from "react-bootstrap";

export const CardsRecetas = ({ itemReceta }) => {
  return (
    <Card className="cardc">
      <div className="overflow-hidden OVH">
        <Card.Img 
          variant="top" 
          src={itemReceta.imagen} 
          className="card-img-top card-image zoom-hover"
          loading="lazy"
          alt="recetas"
        />
      </div>
      <Card.Body>
        <Card.Title as="h4" className="card-title">
          {itemReceta.nombre}
        </Card.Title>
        <Button variant="dark" className="btn card-button">
          Ver Receta
        </Button>
      </Card.Body>
    </Card>
  );
};