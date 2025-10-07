import { Link } from "react-router";
import { Menu, Footer } from "../index.jsx";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export const FormularioRecetas = () => {
  return (
    <>
      <Menu />
      <main>
        <div>
          <Container className="my-5">
            <Row className="justify-content-md-center">
              <Col xs={12} md={9} lg={7}>
                <div className=" border-1 border-bottom  border-dark my-4">
                  <h2 className="text-center mb-4">Crea tu Receta Maestra</h2>
                </div>

                <Form className="borde-css">
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="formRecipeName">
                        <Form.Label className="fw-bold">
                          Nombre de la Receta
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ej: Lasaña Clásica"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="formImageUrl">
                        <Form.Label className="fw-bold">
                          URL de la Imagen
                        </Form.Label>
                        <Form.Control
                          type="url"
                          placeholder="Pega el enlace de la imagen"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col xs={12}>
                      <Form.Group controlId="formIngredients">
                        <Form.Label className="fw-bold">
                          Ingredientes
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          placeholder="Un ingrediente por línea. Ej: 200g de harina, 1 huevo..."
                        />
                        <Form.Text className="text-muted">
                          Sé específico con cantidades y unidades.
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-4">
                    <Col xs={12}>
                      <Form.Group controlId="formPreparation">
                        <Form.Label className="fw-bold">
                          Preparación (Instrucciones a segir.)
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={6}
                          placeholder="Describe los pasos detalladamente..."
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-4 pt-3 border-top">
                    <Col md={6}>
                      <Form.Label className="fw-bold d-block">
                        Tipos de Receta
                      </Form.Label>
                      <div className="d-flex gap-4">
                        <Form.Check
                          type="radio"
                          label="Normal"
                          name="dietType"
                          id="dietNormal"
                        />
                        <Form.Check
                          type="radio"
                          label="Sin TACC (Gluten Free)"
                          name="dietType"
                          id="dietSinTacc"
                        />
                      </div>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="formCategory">
                        <Form.Label className="fw-bold">Categoría</Form.Label>
                        <Form.Select aria-label="Seleccionar categoría de la receta">
                          <option>Elige una categoría</option>
                          <option value="PastelesYTartas">
                            Pasteles y Tartas
                          </option>
                          <option value="Galletas">Galletas y Bizcochos</option>
                          <option value="PostresFrios">
                            Mousses y Postres Fríos
                          </option>
                          <option value="PanaderiaDulce">
                            Panadería Dulce (Brioches, Rolls)
                          </option>
                          <option value="MasasYRellenos">
                            Masas Base y Rellenos
                          </option>
                          <option value="Vegano">
                            Repostería Vegana/Saludable
                          </option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <Button
                      variant="success"
                      type="submit"
                      className="me-3 text-nowrap" 
                    >
                      Guardar Receta
                    </Button>
                    <Link
                      to={"/administracion"}
                      className="btn btn-danger text-nowrap me-3"
                    >
                      Volver
                    </Link>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
};
