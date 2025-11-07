import { Button, Card } from "react-bootstrap";
import "./../Ui/Cards.css";

export const CardsCuadradas = ({ itemReceta }) => {
  return (
    <Card className="cards1">
      {itemReceta.imagen ? (
        <img
          src={itemReceta.imagen}
          alt="Imagen descriptiva"
          className="card__imgs1"
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="card__svg"
          role="img"
          aria-label="Icono de imagen"
        >
          <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
        </svg>
      )}

      <Card.Body className="card__contents1">
        <div className="px-3 pt-3">
          <Card.Title className="card__titles1">{itemReceta.nombre}</Card.Title>
          <Card.Text className="card__descriptions1">
            {/*{itemRecetingredientes} Sacar lorem y dejar esto.*/}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </Card.Text>
        </div>
        <Card.Footer>
          <Button variant="dark" className="card__buttons1">
            <i className="bi bi-eye"></i> Ver más
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};
