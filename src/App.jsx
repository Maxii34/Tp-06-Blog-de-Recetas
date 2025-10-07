// App.jsx
import { BrowserRouter, Route, Routes } from "react-router"; 
import { Inicio, Recetas, Administracion, Login, Register, FormularioRecetas } from "./components/index.jsx";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <BrowserRouter>
        <Login handleClose={handleClose} show={show} /> 

        <Routes>
          <Route path="/" element={<Inicio handleShow={handleShow} />} />
          <Route path="/recetas" element={<Recetas />} />
          <Route path="/administracion" element={<Administracion />} />
          <Route path="/formularioRecetas" element={<FormularioRecetas />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={""} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;