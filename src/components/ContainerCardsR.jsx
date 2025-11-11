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
    nombre: "Muffins",
    imagen:
      "https://images.pexels.com/photos/30388621/pexels-photo-30388621/free-photo-of-pastelitos-de-chispas-de-chocolate.jpeg?auto=compress&cs=tinysrgb&w=600",
    descripcion: "Deliciosos alfajores artesanales rellenos con dulce de leche.",
  },
  {
    id: 6,
    nombre: "Tortas y tartas",
    imagen:
      "https://images.pexels.com/photos/30739082/pexels-photo-30739082/free-photo-of-pastel-de-capas-de-fresas-con-glaseado-de-crema-batida.jpeg?auto=compress&cs=tinysrgb&w=600",
    descripcion: "Tortas caseras decoradas para toda ocasión.",
  },
  {
    id: 7,
    nombre: "Postres",
    imagen:
      "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=600",
    descripcion: "Galletas dulces y crocantes recién horneadas.",
  },
  {
    id: 8,
    nombre: "Otras recetas",
    imagen:
      "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&w=600",
    descripcion: "Cupcakes decorados a mano con sabores variados.",
  },
];

export const ContainerCardsR = () => {
  return (
      <div className="card-Redondad">
    <Container>
      <Row>
        {categorias.map((itemCategorias) => (
          <Col key={itemCategorias.id} xs={12} sm={6} md={4} lg={3} className="my-3">
            <CardsRedondas itemCategorias={itemCategorias} />
          </Col>
        ))}
      </Row>
    </Container>
        </div>
  );
};
