import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { obtenerRecetaID } from "../helpers/queries";
import { Footer } from "../shared/Footer";

export const DetalleRecetas = () => {
  const { _id } = useParams();
  const [recetaDetalle, setRecetaDetalle] = useState(null);
  console.log(recetaDetalle);

  useEffect(() => {
    buscarReceta();
  }, []);

  const buscarReceta = async () => {
    const respuesta = await obtenerRecetaID(_id);
    if (respuesta.status === 200) {
      const recetaBuscada = await respuesta.json();
      setRecetaDetalle(recetaBuscada);
      console.log(recetaBuscada);
    } else {
      alert("No se encontró la receta");
    }
  };

  // Solo valida que exista.
  if (!recetaDetalle) {
    return null;
  }

  return (
    <>
      <Container className="mt-4">
        <div className="my-3 rounded">
          <Row>
            <Col xs={12} md={6} lg={6} className="p-0">
              <img
                src={recetaDetalle.imagen}
                alt="Receta"
                loading="lazy"
                className="w-100 img-ingredientes rounded cards"
              />
            </Col>
            <Col xs={12} md={6}>
              <h1 className="text-center display-6">{recetaDetalle.nombre}</h1>
              <div className="bg-primary-subtle p-3 rounded">
                <ul className="w-100 mb-0">{recetaDetalle.ingredientes}</ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="my-3">
          <h4 className="display-6 text-center p-2">
            {recetaDetalle.preparacion}
          </h4>
          <div>
            <ol></ol>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};
