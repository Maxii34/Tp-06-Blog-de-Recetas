import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router";

export const Login = ({ show, handleClose }) => {
  const cerrarModal = () => {
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Acceso de usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body className="login-content">
          <p className="title">Iniciar sesión</p>

          <Form className="form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su correo" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
              />
            </Form.Group>

            <div className="forgot">
              <Link to="#">¿Olvidaste tu contraseña?</Link>
            </div>

            <Button className="sign" type="submit">
              Iniciar sesión
            </Button>
          </Form>

          <div className="social-message">
            <div className="line"></div>
            <p className="message">Iniciar con redes sociales</p>
            <div className="line"></div>
          </div>

          <div className="social-icons">
            <Button
              className="social-btn-google"
              aria-label="Iniciar con Google"
            >
              Iniciar con Google
            </Button>
          </div>

          <p className="signup">
            ¿No tenés una cuenta?
            <Link to="#" className="text-decoration-underline ms-1 text-dark">
              Registrate
            </Link>
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={cerrarModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
