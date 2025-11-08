import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { useRecetas } from "../Context/RecetasContext";
import { Col, Row } from "react-bootstrap";

export const ModalAdminVer = () => {
  const { setLgShow, lgShow, recetaSelecionada } = useRecetas();

  if (!recetaSelecionada) {
    return null;
  }

  return (
    <>
      {/* Modal grande */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <Card.Img
                  variant="top"
                  src={recetaSelecionada.imagen}
                  className="w-100 h-100"
                  loading="lazy"
                />
              </Col>
              <Col xs={12} md={6} lg={6} className="">
                <Card.Body>
                  <Card.Title className="mb-3">
                    <h6 className=" text-muted">Vista de la receta:</h6>
                    {recetaSelecionada.nombre}
                  </Card.Title>
                  <Card.Text>
                    <span className="d-block mb-2">
                      <b>Ingredientes:</b> {recetaSelecionada.ingredientes}
                    </span>
                    <span className="d-block mb-2">
                      <b>Preparación:</b> {recetaSelecionada.preparacion}
                    </span>
                    <span className="d-block mb-2">
                      <b>Categoría:</b> {recetaSelecionada.categoria}
                    </span>
                    <span className="d-block">
                      <b>Tipo de dieta:</b> {recetaSelecionada.dietType}
                    </span>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Creada: {new Date(recetaSelecionada.createdAt).toLocaleDateString(
                      "es-AR",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                  </small>
                  <br />
                  <small className="text-muted">
                    Última actualización: {new Date(recetaSelecionada.updatedAt).toLocaleDateString(
                      "es-AR",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                  </small>
                </Card.Footer>
              </Col>
            </Row>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
};
