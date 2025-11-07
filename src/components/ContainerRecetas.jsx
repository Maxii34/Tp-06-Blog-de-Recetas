import { Col, Container, Row } from "react-bootstrap";
import { CardsRecetas } from "./index.jsx";
import { useEffect, useState } from "react";
import { listarRecetas } from "./helpers/queries.js";

export const ContainerRecetas = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    cargarRecetas();
  }, []);

  const cargarRecetas = async () => {
    //Se solicita los datos al backend, con la funcion listarRecetas()
    const respuesta = await listarRecetas();
    //Se verifican los datos recibidos
    if (respuesta.status === 200) {
      const data = await respuesta.json();
      //Cargarlo al estado
      setRecetas(data);
    }
  };

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
