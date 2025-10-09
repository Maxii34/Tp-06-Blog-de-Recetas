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
import Protector from "./components/routes/Protector.jsx";


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
  console.log(recetas);

  const crearRecetas = (nuevaReceta) => {
    setRecetas([...recetas, nuevaReceta]);
    return true;
  };

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

          {/* Rutas protejidas */}
          <Route path="administracion" element={<Protector login={login} />}>
            <Route index element={<Administracion recetas={recetas} />} />
            <Route path="recetas" element={<Recetas />} />
            <Route
              path="crear"
              element={
                <FormularioRecetas titulo="Crea una Receta Maestra" crearRecetas={crearRecetas} />
              }
            />
            <Route path="editar" element={<FormularioRecetas />} />
          </Route>
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
