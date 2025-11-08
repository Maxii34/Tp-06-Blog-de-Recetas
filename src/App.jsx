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
  DetalleRecetas
} from "./components/index.jsx";
import { useEffect, useState } from "react";
import Protector from "./components/routes/Protector.jsx";
import { RecetasProvider } from "./components/Context/RecetasContext.jsx";

function App() {
  const sesionUsuario = JSON.parse(localStorage.getItem("usuarioKey")) || false;
  //Estado del login.
  const [login, setLogin] = useState(sesionUsuario);

  const [userRegister, setUserRegister] = useState([]);

  useEffect(() => {
    localStorage.setItem("usuarioKey", JSON.stringify(login));
  }, [login]);

  //estado  y funciones del modal.
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <RecetasProvider>
        <BrowserRouter>
          <Login handleClose={handleClose} show={show} setLogin={setLogin} />
          <Menu handleShow={handleShow} login={login} setLogin={setLogin} />
          <Routes>
            <Route path="/" element={<Inicio />} />

            {/* Rutas protejidas */}
            <Route path="administracion" element={<Protector login={login} />}>
              <Route index element={<Administracion />} />
              <Route path="recetas" element={<Recetas />} />
              <Route path="detalle/:_id" element={<DetalleRecetas />} />
              <Route
                path="crear"
                element={
                  <FormularioRecetas
                    titulo="Crea una Receta Maestra"
                  />
                }
              />
              <Route path="editar/:id" element={<FormularioRecetas titulo="Editar receta" />} />
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
      </RecetasProvider>
    </>
  );
}

export default App;
