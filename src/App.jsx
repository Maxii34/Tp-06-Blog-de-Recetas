// App.jsx
import { BrowserRouter, Route, Routes } from "react-router"; 
import { Inicio, Recetas, Administracion, Login, Register } from "./components/index.jsx";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <BrowserRouter>
        {/* El componente <Login> (que contiene el Modal) se renderiza *siempre* */}
        {/* Se le pasan el estado y los handlers */}
        <Login handleClose={handleClose} show={show} /> 

        <Routes>
          <Route path="/" element={<Inicio handleShow={handleShow} />} />
          <Route path="/recetas" element={<Recetas />} />
          <Route path="/administracion" element={<Administracion />} />
          <Route path="/register" element={<Register />} />
          {/* Ya no necesitamos la ruta /login para el modal. */}
          {/* Si /login debe ser una página de login completa, deja la ruta y renombra el componente Modal/Login. */}
          <Route path="*" element={""} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;