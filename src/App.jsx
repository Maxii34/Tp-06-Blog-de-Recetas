// App.jsx
import { BrowserRouter, Route, Routes } from "react-router";
import {
  Inicio,
  Recetas,
  Administracion,
  Login,
  Register,
  FormularioRecetas,
  Menu,
} from "./components/index.jsx";
import { useEffect, useState } from "react";


function App() {

  const sesionUsuario = JSON.parse(localStorage.getItem("usuarioKey")) || false;
  //Estado del login.
  const [login, setLogin] = useState(sesionUsuario);

  useEffect(() => {
    localStorage.setItem("usuarioKey", JSON.stringify(login));
  }, [login]);
  //Estado del registro de usuarios.
  const [userRegister, setUserRegister] = useState([]);
  //Estado de las recetas creadas.
  const [recetas, setRecetas] = useState([]);



  //estado  y funciones del modal.
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <BrowserRouter>
        <Login handleClose={handleClose} show={show} setLogin={setLogin} />
        <Menu handleShow={handleShow} login={login} setLogin={setLogin} />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/recetas" element={<Recetas />} />
          <Route path="/administracion" element={<Administracion />} />
          <Route
            path="/formularioRecetas"
            element={
              <FormularioRecetas recetas={recetas} setRecetas={setRecetas} />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                setUserRegister={setUserRegister}
                userRegister={userRegister}
              />
            }
          />
          <Route path="*" element={""} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
