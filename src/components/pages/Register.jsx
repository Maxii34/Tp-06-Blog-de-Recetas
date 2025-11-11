import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { Footer } from "../index.jsx";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { registroUsuario } from "../helpers/queries.js";


export const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate();

 const onSubmit = async (dataRegister) => {

  // Validar contraseñas primero
  if (dataRegister.password !== dataRegister.repeatpassword) {
    return Swal.fire({
      title: "Ocurrió un error",
      text: "Las Contraseñas no coinciden, inténtalo nuevamente.",
      icon: "error",
    });
  }

  // Preparar datos para enviar
  const datosParaEnviar = {
    nombreUsuario: dataRegister.username,
    email: dataRegister.email,
    password: dataRegister.password
  };

  const respuesta = await registroUsuario(datosParaEnviar);

  // Si la respuesta NO es ok
  if (!respuesta || !respuesta.ok) {
    const datos = await respuesta.json();
    return Swal.fire({
      title: "Ocurrió un error",
      text: datos?.mensaje || datos?.error || "No se pudo completar el registro.",
      icon: "error",
    });
  }

  // Si todo bien manda alert
  const datos = await respuesta.json();
  Swal.fire({
    title: "Bienvenido",
    text: "Te registraste correctamente.",
    icon: "success",
  });

  reset();
  navegacion("/");
};


  return (
    <>
      <main>
        <Container className="my-5">
          <Row className="justify-content-md-center">
            <h2 className="text-center mb-4">- Formulario de Registro -</h2>
            <Col xs={12} md={8} lg={6}>
              <Form className="borde-css" onSubmit={handleSubmit(onSubmit)}>
                {/* Campo: Nombre de Usuario */}
                <Form.Group className="mb-3">
                  <Form.Label>Nombre completo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Elige un nombre de usuario"
                    {...register("username", {
                      required: "El nombre de usuario es un campo requerido",
                      minLength: {
                        value: 3,
                        message:
                          "El nombre de usuario debe tener al menos 3 caracteres",
                      },
                      maxLength: {
                        value: 20,
                        message:
                          "El nombre de usuario no puede superar los 20 caracteres",
                      },
                    })}
                  />
                  {errors.username && (
                    <span className="text-danger">
                      {errors.username?.message}
                    </span>
                  )}
                </Form.Group>

                {/* Campo: Correo Electrónico */}
                <Form.Group className="mb-3">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresa tu correo"
                    {...register("email", {
                      required: "El correo es un campo requerido",
                      pattern: {
                        value:
                          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                        message: "El correo ingresado no es válido",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-danger">{errors.email?.message}</span>
                  )}
                </Form.Group>

                {/* Campo: Contraseña */}
                <Form.Group className="mb-3">
                  <Form.Label className="text-center">Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    {...register("password", {
                      required: "La contraseña es un campo requerido",
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                        message: "La clave es obligatoria",
                      },
                    })}
                  />
                  {errors.password && (
                    <span className="text-danger">
                      {errors.password?.message}
                    </span>
                  )}
                </Form.Group>

                {/* Campo: Repetir Contraseña */}
                <Form.Group className="mb-3">
                  <Form.Label>Repetir Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Repite la contraseña"
                    {...register("repeatpassword", {
                      required: "La contraseña es un campo requerido",
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                        message: "La clave es obligatoria",
                      },
                    })}
                  />
                </Form.Group>
                {errors.repeatpassword && (
                  <span className="text-danger">
                    {errors.repeatpassword?.message}
                  </span>
                )}
                {/* Campo: Checkbox (Términos y Condiciones) */}
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Acepto los términos y condiciones"
                  />
                </Form.Group>

                {/* Botón de Registro */}
                <Button variant="primary" type="submit" className="w-100">
                  Registrarme
                </Button>
              </Form>
            </Col>
            <Col xs={12} md={8} lg={6}>
              <Card className="text-white top-img">
                <Card.Img
                  src="https://images.pexels.com/photos/8820570/pexels-photo-8820570.jpeg"
                  alt="Personas colaborando y sonriendo"
                  className="img-css-registro"
                />
                <Card.ImgOverlay
                  className="d-flex flex-column justify-content-center align-items-center text-center p-4"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                  {/* Título Motivacional */}
                  <Card.Title as="h2" className="fw-bold mb-3">
                    ¡Únete a la Comunidad! 🥧
                  </Card.Title>

                  {/* Texto Persuasivo con beneficios */}
                  <Card.Text className="lead mb-4">
                    Regístrate en solo un minuto y comienza a disfrutar de todos
                    los beneficios:
                  </Card.Text>

                  {/* Lista de Beneficios (Opcional, pero efectiva) */}
                  <Card.Text as="ul" className="list-unstyled mb-4">
                    <li> **Acceso exclusivo** a contenido Premium.</li>
                    <li> Participa en debates y foros.</li>
                    <li>
                      {" "}
                      Recibe nuevas recetas exclusivas semanalmente y noticias
                      antes que nadie.
                    </li>
                  </Card.Text>

                  {/* Llamada a la acción final (Slogan) */}
                  <Card.Text className="small fw-light mt-auto">
                    No esperes más. Tu próxima gran aventura comienza aquí.
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};
