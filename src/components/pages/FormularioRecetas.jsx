import { Link } from "react-router";
import { Footer } from "../index.jsx";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { useRecetas } from "../Context/RecetasContext.jsx";

export const FormularioRecetas = ({ titulo }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { crearReceta } = useRecetas();


  const onSubmit = (dataRecetas) => {
    // Lógica de recetas
    if (titulo === "Crea una Receta Maestra") {
      dataRecetas.id = uuidv4();
      if (crearReceta(dataRecetas)) {
        Swal.fire({
          title: "Creaste una nueva Receta",
          text: `creaste la receta ${dataRecetas.nombre} correctamente.`,
          icon: "success",
        });
      } else {
        // Logica de editar receta.
      }
    }
    reset();
  };

  return (
    <>
      <main>
        <div>
          <Container className="my-5">
            <Row className="justify-content-md-center">
              <Col xs={12} md={9} lg={7}>
                <div className=" border-1 border-bottom  border-dark my-4">
                  <h2 className="text-center mb-4">{titulo}</h2>
                </div>

                <Form className="borde-css" onSubmit={handleSubmit(onSubmit)}>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="formRecipeName">
                        <Form.Label className="fw-bold">
                          Nombre de la Receta
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ej: Lasaña Clásica"
                          {...register("nombre", {
                            required:
                              "El nombre de la receta es un campo requerido",
                            minLength: {
                              value: 3,
                              message:
                                "El nombre de la receta debe tener al menos 3 caracteres",
                            },
                            maxLength: {
                              value: 50,
                              message:
                                "El nombre de la receta no puede superar los 50 caracteres",
                            },
                          })}
                        />
                        {errors.nombre && (
                          <span className="text-danger">
                            {errors.nombre.message}
                          </span>
                        )}
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
                          {...register("imagen", {
                            required: "La URL de la imagen es obligatoria",
                            pattern: {
                              value:
                                /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i,
                              message:
                                "Debe ser una URL válida que termine en .jpg, .jpeg, .png, .gif o .webp",
                            },
                          })}
                        />
                        {errors.imagen && (
                          <span className="text-danger">
                            {errors.imagen.message}
                          </span>
                        )}
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
                          {...register("ingredientes", {
                            required:
                              "Los ingredientes son obligatorios para la receta",
                            minLength: {
                              value: 10,
                              message:
                                "Los ingredientes deben tener al menos 10 caracteres",
                            },
                            maxLength: {
                              value: 500,
                              message:
                                "Los ingredientes no pueden superar los 300 caracteres",
                            },
                          })}
                        />
                        {errors.ingredientes && (
                          <span className="text-danger">
                            {errors.ingredientes.message}
                          </span>
                        )}
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
                          {...register("preparacion", {
                            required: "La preparación es obligatoria",
                            minLength: {
                              value: 10,
                              message:
                                "La preparación debe tener al menos 20 caracteres",
                              maxLength: {
                                value: 1000,
                                message:
                                  "La preparación no puede superar los 1000 caracteres",
                              },
                            },
                          })}
                        />
                        {errors.preparacion && (
                          <span className="text-danger">
                            {errors.preparacion.message}
                          </span>
                        )}
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
                          value="Normal"
                          id="dietNormal"
                          {...register("dietType", {
                            required: "Debes seleccionar un tipo de receta",
                          })}
                        />
                        <Form.Check
                          type="radio"
                          label="Sin tac"
                          value="Sin tac"
                          id="dietSinTacc"
                          {...register("dietType", {
                            required: "Debes seleccionar un tipo de receta",
                          })}
                        />
                      </div>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="formCategory">
                        <Form.Label className="fw-bold">Categoría</Form.Label>
                        <Form.Select
                          aria-label="Seleccionar categoría de la receta"
                          defaultValue=""
                          {...register("categoria", {
                            required: "Debes seleccionar una categoría",
                            validate: (value) =>
                              value !== "" || "Selecciona una categoría válida",
                          })}
                        >
                          <option value="">Elige una categoría</option>
                          <option value="PastelesYTartas">Pasteles</option>
                          <option value="PastelesYTartas">Tartas</option>
                          <option value="Galletas">Galletas</option>
                          <option value="Galletas">Bizcochos</option>
                          <option value="PostresFrios">Postres Fríos</option>
                          <option value="MasasYRellenos">Masas Base</option>
                          <option value="MasasYRellenos">Rellenos</option>
                        </Form.Select>

                        {errors.categoria && (
                          <span className="text-danger">
                            {errors.categoria.message}
                          </span>
                        )}
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
