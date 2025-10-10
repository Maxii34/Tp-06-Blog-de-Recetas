import { Container } from "react-bootstrap";
import { Link } from "react-router";
import "../Ui/Cards.css";

export const CardsRedondas = ({ itemCategorias }) => {
  return (
    <Container>
      <div className="div-options">
        <Link to="" className="text-reset text-decoration-none">
          <img
            src={itemCategorias.imagen}
            className="img-options cards"
            loading="lazy"
            alt="Alfajores"
          />
          <div className="text-center my-1 overlay-text">
            <p>
              {itemCategorias.descripcion}
            </p>
          </div>
          <h4 className="text-center mt-4 text">{itemCategorias.nombre}</h4>
        </Link>
      </div>
    </Container>
  );
};

