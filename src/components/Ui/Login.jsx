import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

export const Login = ({ show, handleClose, setlogin }) => {
  const cerrarModal = () => {
    handleClose();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate();


  const onSubmit = (dataLogin) => {
    console.log(dataLogin);
    //logica de login
    if (dataLogin.password === dataLogin.repeatpassword) {
      if (
        dataLogin.email === import.meta.env.VITE_API_EMAIL &&
        dataLogin.password === import.meta.env.VITE_API_PASSWORD
      ) {
        setlogin(true);
        Swal.fire({
          title: "Bienvenido Administrador",
          text: "Iniciaste sesion correctamente.",
          icon: "success",
        });
        navegacion("/administracion");
        handleClose();
        console.log(setlogin);
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: "Credenciales incorrectas",
          icon: "error",
        });
      }
      reset();
      handleClose();
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: "Las Contraseñas no coinciden, intentalo nuevamente.",
        icon: "error",
      });
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Acceso de usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body className="login-content">
          <p className="title">Iniciar sesión</p>

          <Form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su correo"
                {...register("email", {
                  required: "El correo es un campo requerido",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message: "El correo ingresado no es válido",
                  },
                })}
              />
              {errors.email && <span>{errors.email?.message}</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                {...register("password", {
                  required: "La contraseña es un campo requerido",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                    message: "La clave es obligatoria",
                  },
                })}
              />
              {errors.password && <span>{errors.password?.message}</span>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                {...register("repeatpassword", {
                  required: "La contraseña es un campo requerido",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                    message: "La clave es obligatoria",
                  },
                })}
              />
              {errors.repeatpassword && (
                <span>{errors.repeatpassword?.message}</span>
              )}
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
