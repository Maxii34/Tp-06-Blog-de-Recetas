import { Container } from "react-bootstrap";
import { Link } from "react-router";

export const CardsRedondas = () => {
  return (
    <Container>
      <div className="div-options">
        <Link to="" className="text-reset text-decoration-none">
          <img
            src="https://images.unsplash.com/photo-1604953781841-004f1848ed3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWxmYWpvcmVzfGVufDB8fDB8fHww"
            className="img-options cards"
            loading="lazy"
            alt="Alfajores"
          />
          <h4 className="text">Alfajores</h4>
        </Link>
      </div>
    </Container>
  );
};
