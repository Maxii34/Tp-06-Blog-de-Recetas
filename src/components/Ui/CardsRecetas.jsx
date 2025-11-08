import { Card } from "react-bootstrap";
import { Link } from "react-router";

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
        <Link 
          to={`/administracion/detalle/${itemReceta._id}`} 
          className="btn card-button"
        >
          Ver Receta
        </Link>
      </Card.Body>
    </Card>
  );
};