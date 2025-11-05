import { Col, Container, Row } from "react-bootstrap";
import { CardsRedondas } from "./Ui/CardsRedondas.jsx";

// Datos simulados (por ahora)
const categorias = [
  {
    id: 1,
    nombre: "Alfajores",
    imagen:
      "https://images.unsplash.com/photo-1604953781841-004f1848ed3d?w=500&auto=format&fit=crop&q=60",
    descripcion: "Deliciosos alfajores artesanales rellenos con dulce de leche.",
  },
  {
    id: 2,
    nombre: "Tortas",
    imagen:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60",
    descripcion: "Tortas caseras decoradas para toda ocasión.",
  },
  {
    id: 3,
    nombre: "Galletas",
    imagen:
      "https://images.pexels.com/photos/302539/pexels-photo-302539.jpeg",
    descripcion: "Galletas dulces y crocantes recién horneadas.",
  },
  {
    id: 4,
    nombre: "Cupcakes",
    imagen:
      "https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg",
    descripcion: "Cupcakes decorados a mano con sabores variados.",
  },
  {
    id: 5,
    nombre: "Alfajores",
    imagen:
      "https://images.unsplash.com/photo-1604953781841-004f1848ed3d?w=500&auto=format&fit=crop&q=60",
    descripcion: "Deliciosos alfajores artesanales rellenos con dulce de leche.",
  },
  {
    id: 6,
    nombre: "Tortas",
    imagen:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60",
    descripcion: "Tortas caseras decoradas para toda ocasión.",
  },
  {
    id: 7,
    nombre: "Galletas",
    imagen:
      "https://images.pexels.com/photos/302539/pexels-photo-302539.jpeg",
    descripcion: "Galletas dulces y crocantes recién horneadas.",
  },
  {
    id: 8,
    nombre: "Cupcakes",
    imagen:
      "https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg",
    descripcion: "Cupcakes decorados a mano con sabores variados.",
  },
];

export const ContainerCardsR = () => {
  return (
    <Container>
      <Row>
        {categorias.map((itemCategorias) => (
          <Col key={itemCategorias.id} xs={12} sm={6} md={4} lg={3} className="my-3">
            <CardsRedondas itemCategorias={itemCategorias} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
