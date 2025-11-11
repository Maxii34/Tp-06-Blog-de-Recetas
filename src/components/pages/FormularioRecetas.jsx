import { Link, useNavigate, useParams } from "react-router";
import { Footer } from "../index.jsx";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  crearReceta,
  editarRecetaId,
  obtenerRecetaID,
} from "../helpers/queries.js";
import { useEffect } from "react";
import { useRecetas } from "../Context/RecetasContext.jsx";

export const FormularioRecetas = ({ titulo }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const { id } = useParams();

  const { cargarRecetas } = useRecetas();

  useEffect(() => {
    buscarReceta();
  }, []);

  const navegacion = useNavigate();

  //Si tiene el titulo, correcto busca la receta y la carga en el formulario.
  const buscarReceta = async () => {
    if (titulo === "Editar receta") {
      const respuesta = await obtenerRecetaID(id);
      if (respuesta.status === 200) {
        const recetaBuscada = await respuesta.json();
        setValue("nombre", recetaBuscada.nombre);
        setValue("imagen", recetaBuscada.imagen);
        setValue("ingredientes", recetaBuscada.ingredientes);
        setValue("preparacion", recetaBuscada.preparacion);
        setValue("categoria", recetaBuscada.categoria);
        setValue("dietType", recetaBuscada.dietType);
      } else {
        alert("No se encontro la receta");
      }
    }
  };

  const onSubmit = async (data) => {
    // Lógica de crear recetas
    if (titulo === "Crea una Receta Maestra") {
      const respuesta = await crearReceta(data);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Receta creada",
          text: `La receta ${data.nombre} se creo correctamente`,
          icon: "success",
        });
        reset();
        cargarRecetas();
      } else {
        //mensaje de error
        Swal.fire({
          title: "Ocurrio un error",
          text: `No se pudo crear la receta.`,
          icon: "error",
        });
      }
    } else {
      //Agregar aki logica para editar recetas.
      const respuesta = await editarRecetaId(id, data);
      console.log(respuesta);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Receta modificado",
          text: `La receta ${data.nombre} se edito correctamente`,
          icon: "success",
        });
        navegacion("/administracion/");
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: `No se pudo editar la receta ${data.nombreProducto}`,
          icon: "error",
        });
      }
    }
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
                          {...register("categoria", {
                            required: "Debes seleccionar una categoría",
                            validate: (value) =>
                              value !== "" || "Selecciona una categoría válida",
                          })}
                        >
                          <option value="">Elige una categoría</option>
                          <option value="Alfajores">Alfajores</option>
                          <option value="Muffins">Muffins</option>
                          <option value="Tortas y tartas">
                            Tortas y tartas
                          </option>
                          <option value="Postres">Postres</option>
                          <option value="Para el te">Para el te</option>
                          <option value="Galletas">Galletas</option>
                          <option value="Otras recetas">Otras recetas</option>
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
