import { Button, Modal, Form } from "react-bootstrap";

export const Login = ({ show, handleClose }) => {
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Botón para abrir el modal */}
      <Button variant="primary" onClick={handleShow}>
        Iniciar sesión
      </Button>

      {/* Modal con el formulario */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Acceso de usuario</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="form-container">
            <p className="title">Iniciar sesión</p>

            <Form className="form">
              <div className="input-group">
                <Form.Label htmlFor="username">Usuario</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  id="username"
                  placeholder=""
                />
              </div>

              <div className="input-group">
                <Form.Label htmlFor="password">Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                />
                <div className="forgot">
                  <a rel="noopener noreferrer" href="#">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
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
              <Button aria-label="Iniciar con Google" className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                ></svg>
              </Button>

              <Button aria-label="Iniciar con Twitter" className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                ></svg>
              </Button>

              <Button aria-label="Iniciar con GitHub" className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                ></svg>
              </Button>
            </div>

            <p className="signup">
              ¿No tenés una cuenta?
              <a rel="noopener noreferrer" href="#" className="">
                Registrate
              </a>
            </p>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
