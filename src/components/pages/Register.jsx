import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { Menu, Footer } from "../index.jsx";

export const Register = () => {
  return (
    <>
      <Menu />
      <main>
        <Container className="my-5">
          <Row className="justify-content-md-center">
              <h2 className="text-center mb-4">- Formulario de Registro -</h2>
            <Col xs={12} md={8} lg={6}>
              <Form className="borde-css">
                {/* Campo: Nombre de Usuario */}
                <Form.Group className="mb-3">
                  <Form.Label>Nombre de Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Elige un nombre de usuario"
                  />
                  <Form.Text className="text-muted">
                    Tu nombre de usuario será visible para otros.
                  </Form.Text>
                </Form.Group>

                {/* Campo: Correo Electrónico */}
                <Form.Group className="mb-3">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control type="email" placeholder="Ingresa tu correo" />
                  <Form.Text className="text-muted">
                    Nunca compartiremos tu correo con nadie más.
                  </Form.Text>
                </Form.Group>

                {/* Campo: Contraseña */}
                <Form.Group className="mb-3">
                  <Form.Label className="text-center">Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>

                {/* Campo: Repetir Contraseña */}
                <Form.Group className="mb-3">
                  <Form.Label>Repetir Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Repite la contraseña"
                  />
                </Form.Group>

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
                    <li> Recibe nuevas recetas exclusivas semanalmente y noticias antes que nadie.</li>
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
